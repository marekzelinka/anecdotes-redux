export function filterReducer(state = '', action) {
  switch (action.type) {
    case 'SET_FILTER': {
      return action.payload.filter
    }
    default: {
      return state
    }
  }
}

export function setFilter(filter) {
  return {
    type: 'SET_FILTER',
    payload: {
      filter,
    },
  }
}
