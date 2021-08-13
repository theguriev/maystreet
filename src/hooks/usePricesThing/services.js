export const fetchFn = ({ options }) => fetch(`http://localhost:3000/prices/${options.tickers.join(',')}`).then(r => r.json())
