"""Audit commercial HTML, local assets and link depth; optional HTTP probe."""
import argparse,json,re,urllib.request,urllib.error
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,urljoin
from collections import deque
class Page(HTMLParser):
 def __init__(self):super().__init__();self.links=[];self.assets=[];self.canonical=[];self.robots=[];self.h1=0;self.ids=[];self.title=0;self.description=0
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag=='h1':self.h1+=1
  if tag=='title':self.title+=1
  if 'id' in a:self.ids.append(a['id'])
  if tag=='meta' and a.get('name')=='description':self.description+=1
  if tag=='meta' and a.get('name')=='robots':self.robots.append(a.get('content',''))
  if tag=='link' and a.get('rel')=='canonical':self.canonical.append(a.get('href'))
  if tag=='a' and 'href' in a:self.links.append(a['href'])
  if tag=='img' and 'src' in a:self.assets.append(a['src'])
  if tag=='script' and 'src' in a:self.assets.append(a['src'])
  if tag=='link' and a.get('rel') in ('stylesheet','icon'):self.assets.append(a['href'])
def resolve(root,path):
 p=root/path.lstrip('/');return p/'index.html' if p.is_dir() else p
def audit(root,origin,http=False):
 pages={};issues=[];edges={}
 for f in root.rglob('*.html'):
  rel=f.relative_to(root)
  if rel.parts[0]=='apps':continue
  path='/'+str(rel);path=path.removesuffix('index.html');page=Page();page.feed(f.read_text());pages[path]=page
 for path,p in pages.items():
  if p.h1!=1 or p.title!=1 or p.description!=1:issues.append({'path':path,'issue':'heading/title/description count'})
  if len(p.ids)!=len(set(p.ids)):issues.append({'path':path,'issue':'duplicate IDs'})
  if p.canonical!=[origin+path]:issues.append({'path':path,'issue':'canonical mismatch'})
  edges[path]=[]
  for link in p.links+p.assets:
   u=urlsplit(urljoin(origin+path,link))
   if u.netloc!=urlsplit(origin).netloc:continue
   file=resolve(root,u.path)
   if not file.exists():issues.append({'path':path,'issue':'missing local resource','target':link});continue
   target=u.path.removesuffix('index.html')
   if target in pages:edges[path].append(target)
   if u.fragment and target in pages and u.fragment not in pages[target].ids:issues.append({'path':path,'issue':'missing fragment','target':link})
 depth={'/':0};q=deque(['/'])
 while q:
  path=q.popleft()
  for target in edges.get(path,[]):
   if target not in depth:depth[target]=depth[path]+1;q.append(target)
 for path in pages:
  if path not in depth:issues.append({'path':path,'issue':'orphan commercial page'})
  elif depth[path]>3:issues.append({'path':path,'issue':'depth exceeds three'})
 result={'mode':'local static audit','origin':origin,'pages':len(pages),'depth':depth,'issues':issues,'http':[]}
 if http:
  for path in list(pages)+['/seo-audit-nonexistent-page-9f21/']:
   try:
    with urllib.request.urlopen(origin+path,timeout=15) as response:result['http'].append({'path':path,'status':response.status,'final_url':response.url,'x_robots_tag':response.headers.get('X-Robots-Tag')})
   except (urllib.error.URLError,OSError) as e:result['http'].append({'path':path,'error':str(e)})
  result['http_note']='A missing-page 200 is a possible soft-404, not a complete diagnosis. Network errors cannot establish origin status.'
 return result
if __name__=='__main__':
 p=argparse.ArgumentParser();p.add_argument('--root',default='dist');p.add_argument('--origin',default='https://fauvor.org');p.add_argument('--http',action='store_true');p.add_argument('--report',default='audit-report.json');a=p.parse_args();result=audit(Path(a.root),a.origin.rstrip('/'),a.http);Path(a.report).write_text(json.dumps(result,indent=2));print(json.dumps(result,indent=2));raise SystemExit(bool(result['issues']))
