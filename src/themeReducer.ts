import * as objectPath from 'object-path'
import * as immutable from 'object-path-immutable'
import { Action } from 'redux'

import {
  VALUE,
  SET_STATE,
  INIT_STATE
} from './constants'

export interface ThemeState {
  errors?: Error[]
  [key: string]: any
}

export default function themeReducer(state = {}, action: any): ThemeState {
  switch (action.type) {
    case VALUE:
      return immutable.set(state, action.payload.path, action.payload.value)

    case SET_STATE:
      return { ...state, ...action.payload }

    case INIT_STATE:
      return action.payload

    default:
      return state
  }
}
