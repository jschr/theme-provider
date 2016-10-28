import { UPDATE } from './constants'

const handlers = {
  [UPDATE]: (state, newState) => Object.assign(state, newState)
}

export default function formReducer(state = {}, action = {}) {
  return handlers[action.type]
    ? handlers[action.type](state, action.payload)
    : state
}
