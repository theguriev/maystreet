import { useThing } from '@redux-things/core'
import { fetchFn } from './services'
import { KEY } from './constants'
import { tickersSelector } from './selectors'

export const useTickersThing = (props = {}) => useThing(
  KEY,
  fetchFn,
  {
    selector: tickersSelector,
    ...props
  }
)
