import { SET } from './constants'

export function updateTheme(value) { // eslint-disable-line
  return {
    type: SET,
    payload: value
  }
}
