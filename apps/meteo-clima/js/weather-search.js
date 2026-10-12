/* Open-Meteo client: current weather and seven-day forecast, no fabricated fallback. */
(function (root) {
  function condition(code) {
    if (code === 0) return ['Despejado', 'clear', '☀️'];
    if (code <= 3) return ['Nublado', 'cloudy', '☁️'];
    if (code <= 48) return ['Niebla', 'cloudy', '🌫️'];
    if (code >= 95) return ['Tormenta', 'thunderstorm', '⛈️'];
    if (code >= 71 && code <= 77 || code === 85 || code === 86) return ['Nieve', 'snow', '❄️'];
    return ['Lluvia', 'rain', '🌧️'];
  }
  async function search(query, signal, request = fetch) {
    async function json(url) {
      const response = await request(url, {signal});
      if (!response.ok) throw new Error('No se pudo consultar el servicio meteorológico. Intentá nuevamente.');
      return response.json();
    }
    const geo = await json('https://geocoding-api.open-meteo.com/v1/search?' + new URLSearchParams({name:query,count:'1',language:'es'}));
    if (!geo.results?.length) throw new Error('No encontramos esa ciudad. Probá con su nombre completo.');
    const city = geo.results[0];
    const params = new URLSearchParams({latitude:city.latitude,longitude:city.longitude,timezone:'auto',forecast_days:'7',current:'temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,surface_pressure,wind_speed_10m,wind_direction_10m,cloud_cover',hourly:'temperature_2m,precipitation_probability,dew_point_2m',daily:'weather_code,temperature_2m_max,temperature_2m_min,uv_index_max'});
    const weather = await json('https://api.open-meteo.com/v1/forecast?' + params);
    const c = weather.current, h = weather.hourly, d = weather.daily;
    if (!c || !h || !d || !Number.isFinite(c.temperature_2m)) throw new Error('El servicio devolvió datos incompletos. Intentá nuevamente.');
    const [description, type] = condition(c.weather_code);
    const start = Math.max(0,h.time.findIndex(time => time >= c.time.slice(0,13)+':00'));
    const indices = Array.from({length:12},(_,i)=>Math.min(start+i*2,h.time.length-1));
    return {name:city.name,country:[city.admin1,city.country].filter(Boolean).join(', '),coords:`${city.latitude.toFixed(4)}°, ${city.longitude.toFixed(4)}°`,temp:Math.round(c.temperature_2m),feelsLike:Math.round(c.apparent_temperature),min:Math.round(d.temperature_2m_min[0]),max:Math.round(d.temperature_2m_max[0]),condition:description,weatherType:type,humidity:c.relative_humidity_2m,pressure:Math.round(c.surface_pressure),windSpeed:c.wind_speed_10m,windDeg:c.wind_direction_10m,uvIndex:d.uv_index_max[0],aqi:null,dewPoint:Math.round(h.dew_point_2m[start]),cloudCover:c.cloud_cover,hourly:indices.map(i=>Math.round(h.temperature_2m[i])),precipProb:indices.map(i=>h.precipitation_probability[i]),daily:d.time.map((date,i)=>({day:new Intl.DateTimeFormat('es',{weekday:'short',timeZone:'UTC'}).format(new Date(date+'T12:00:00Z')),icon:condition(d.weather_code[i])[2],high:Math.round(d.temperature_2m_max[i]),low:Math.round(d.temperature_2m_min[i])}))};
  }
  root.FauvorWeather = {search,condition};
})(globalThis);
