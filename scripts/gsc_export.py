"""Read Search Console data with an existing OAuth token; never persist credentials."""
import os,argparse,json,csv,urllib.request
from urllib.parse import quote
p=argparse.ArgumentParser();p.add_argument('--start',required=True);p.add_argument('--end',required=True);p.add_argument('--site',default='sc-domain:fauvor.org');p.add_argument('--output',default='gsc-queries.csv');p.add_argument('--min-impressions',type=int,default=100);a=p.parse_args()
token=os.environ.get('GSC_ACCESS_TOKEN')
if not token:raise SystemExit('Missing GSC_ACCESS_TOKEN. Obtain OAuth read access in the authorized account; do not put tokens in command arguments or files.')
rows=[];start=0
while True:
 body=json.dumps({'startDate':a.start,'endDate':a.end,'dimensions':['query','page'],'rowLimit':25000,'startRow':start}).encode()
 request=urllib.request.Request('https://www.googleapis.com/webmasters/v3/sites/'+quote(a.site,safe='')+'/searchAnalytics/query',data=body,headers={'Authorization':'Bearer '+token,'Content-Type':'application/json'})
 with urllib.request.urlopen(request,timeout=30) as response:data=json.load(response)
 batch=data.get('rows',[]);rows.extend(batch)
 if len(batch)<25000:break
 start+=len(batch)
with open(a.output,'w',newline='') as f:
 writer=csv.writer(f);writer.writerow(['query','page','clicks','impressions','ctr','position','review_priority'])
 for r in rows:writer.writerow([*r['keys'],r['clicks'],r['impressions'],r['ctr'],r['position'],8<=r['position']<=15 and r['impressions']>=a.min_impressions])
print('Exported',len(rows),'rows. Average positions are aggregates, not guaranteed exact daily rankings.')
