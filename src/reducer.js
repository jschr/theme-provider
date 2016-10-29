import { UPDATE } from './constants'

const handlers = {
  [UPDATE]: (state, propsToMerge) => ({
    ...state,
    ...propsToMerge
  })
}

export default function formReducer(state = {}, action = {}) {
  return handlers[action.type]
    ? handlers[action.type](state, action.payload)
    : state
}
