import { createSelector } from 'reselect'
import { watcherAlertsSelector } from 'features/watchers/selectors'
import { KEY } from './constants'

export const pricesSelector = state => state?.[KEY]?.data || null

export const tickersOptionsSelector = (_state, { options }) => options?.tickers || []

export const onlySelectedPricesSelector = createSelector(
  pricesSelector,
  tickersOptionsSelector,
  (data, tickers) => {
    if (!data || tickers.some(ticker => !data[ticker])) {
      return null
    }
    return tickers.map(ticker => data[ticker])
  }
)

export const selector = createSelector(
  onlySelectedPricesSelector,
  watcherAlertsSelector,
  (prices, alerts) => prices?.map(
    el => ({
      ...el,
      alert: alerts[el.symbol]
    })
  ) || prices
)
