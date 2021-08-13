export const reducer = (state, { type, payload }, { toType }) => {
  if (type === toType('fulfilled')) {
    return {
      ...state,
      data: {
        ...(state.data || {}),
        ...payload.reduce(
          (acc, el) => ({
            ...acc,
            [el.symbol]: el
          }),
          state.data || {}
        )
      }
    }
  }
  return state || {}
}
