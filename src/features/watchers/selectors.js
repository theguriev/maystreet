import { createSelector } from 'reselect'
import { KEY } from 'hooks/usePricesThing/constants'

const pricesSelector = state => state?.[KEY]?.data || {}

export const watchersSelector = state => state?.watchers

export const watcherTickersSelector = createSelector(
  watchersSelector,
  state => Object.keys(state?.tickers || {})
)

export const watcherAlertsSelector = createSelector(
  watchersSelector,
  state => state?.alerts || {}
)

const deviation = (watcherPrice, currentPrice) => {
  const diff = currentPrice - watcherPrice
  const one = watcherPrice / 100
  return diff / one
}

export const tickersInDeviationSelector = createSelector(
  watcherAlertsSelector,
  pricesSelector,
  (watchers, prices) => Object.keys(watchers).reduce(
    (acc, key) => ([
      ...acc,
      {
        ...watchers[key],
        currentDeviation: deviation(watchers[key].price, prices[key].bid)
      }
    ]),
    []
  ).filter(el => el.value <= Math.abs(el.currentDeviation))
)
