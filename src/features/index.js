import { all } from 'redux-saga/effects'
import alerts from './alerts'
import watchers from './watchers'

export function* saga() {
  yield all([...watchers.sagas])
}

export const reducers = {
  alerts: alerts.reducer,
  watchers: watchers.reducer
}

export * from './alerts/selectors'
export * from './watchers/selectors'
