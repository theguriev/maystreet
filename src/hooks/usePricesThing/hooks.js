import { useThing } from '@redux-things/core'
import { fetchFn } from './services'
import { KEY } from './constants'
import { selector } from './selectors'
import { reducer } from './reducers'

export const usePricesThing = (props = {}) => useThing(
  KEY,
  fetchFn,
  {
    reducer,
    selector,
    ...props
  }
)
