import { SET } from './constants'

const handlers = {
  [SET]: (state, newState) => Object.assign(state, newState)
}

export default function formReducer(state = {}, action = {}) {
  return handlers[action.type]
    ? handlers[action.type](state, action.payload)
    : state
}
