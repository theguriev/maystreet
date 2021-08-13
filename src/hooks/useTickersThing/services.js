export const fetchFn = () => fetch('http://localhost:3000/static/tickers').then(r => r.json())
