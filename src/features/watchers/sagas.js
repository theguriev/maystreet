/* eslint-disable max-len */
import {
  takeEvery,
  select,
  put,
  all
} from 'redux-saga/effects'
import { tickersInDeviationSelector } from './selectors'
import { add } from '../alerts/actions'
import { remove } from './actions'

function* createAlerts() {
  const tickersInDeviation = yield select(tickersInDeviationSelector)
  yield all(tickersInDeviation.map(
    el => put(add({ title: el.ticker, content: `BID price moved ${el.currentDeviation}% from the opening price at ${new Date()}` }))
  ))
  yield all(tickersInDeviation.map(
    el => put(remove({
      ticker: el.ticker,
      type: 'alerts'
    }))
  ))
}

export default [
  takeEvery('@redux-things/TPrices/fulfilled', createAlerts)
]
