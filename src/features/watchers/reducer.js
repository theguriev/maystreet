import { omit } from 'lodash-es'
import { add, remove } from './actions'

export default (state = {}, { type, payload }) => {
  switch (type) {
    case add.type:
      return {
        ...state,
        [payload.type]: {
          ...(state[payload.type] || {}),
          [payload.ticker]: payload
        }
      }
    case remove.type:
      return {
        ...state,
        [payload.type]: {
          ...omit(state[payload.type] || {}, [payload.ticker])
        }
      }
    default:
      return state
  }
}
