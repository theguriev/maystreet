import { KEY } from './constants'

export const tickersSelector = (state, { options }) => {
  const { tickers = [] } = options
  const data = state?.[KEY]?.data
  if (!data) {
    return null
  }
  const dataMap = data.reduce(
    (acc, key) => ({
      ...acc,
      [key]: true
    }),
    {}
  )
  tickers.forEach(
    ticker => {
      dataMap[ticker] = false
    }
  )
  return Object.keys(dataMap).reduce(
    (acc, key) => {
      if (dataMap[key]) {
        return [
          ...acc,
          key
        ]
      }
      return acc
    }, []
  )
}
