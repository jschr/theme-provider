import { UPDATE } from './constants'

export function updateTheme(value) { // eslint-disable-line
  return {
    type: UPDATE,
    payload: value
  }
}
