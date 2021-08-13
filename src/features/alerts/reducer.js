import { omit, values } from 'lodash-es'
import { add, remove } from './actions'

export default (state = { items: [] }, { type, payload }) => {
  switch (type) {
    case add.type:
      return {
        ...state,
        items: [payload, ...state.items]
      }
    case remove.type:
      return {
        items: values(omit(state?.items || [], [payload]))
      }
    default:
      return state
  }
}
