const TYPES = {
  ADD: 'alerts/add',
  REMOVE: 'alerts/remove'
}

export const add = payload => ({
  type: TYPES.ADD,
  payload
})
add.type = TYPES.ADD

export const remove = payload => ({
  type: TYPES.REMOVE,
  payload
})
remove.type = TYPES.REMOVE

export default {
  add,
  remove
}
