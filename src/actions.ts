import * as objectPath from 'object-path'

import {
  VALUE,
  SET_STATE,
  INIT_STATE
} from './constants'

export function setValue(path: objectPath.Path, value: any) {
  return {
    type: VALUE,
    payload: { path, value }
  }
}

export function setState(state: Object) {
  return {
    type: SET_STATE,
    payload: state
  }
}

export function initializeState(state: Object) {
  return {
    type: INIT_STATE,
    payload: state
  }
}
