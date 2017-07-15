import * as objectPath from 'object-path'
import { Action, Store, Unsubscribe } from 'redux'

import { VALUE } from './constants'
import * as actions from './actions'
import { ThemeState } from './themeReducer'

export interface ThemeStore extends Store<any> {
  getThemeState: () => ThemeState
  setThemeState: (state: ThemeState) => void
  dispatch: (action: Action) => any
  setValue: (path: objectPath.Path, value: any) => void
  reset: () => void
  clear: () => void
}

export default function themeEnhancer(themeReducerName?: string) {
  return (next: (...args: any[]) => any) => (...args: any[]): ThemeStore => {
    const store: Store<any> = next(...args)
    // flag to submit on state change, allows for async store updates like batched subscribe
    let triggerOnValueListeners = false

    function getThemeState(): ThemeState {
      let state = store.getState() || {}

      if (themeReducerName) state = state[themeReducerName]

      return state
    }

    const initialState = getThemeState()

    function setThemeState(state: ThemeState): void {
      store.dispatch(actions.setState(state))
    }

    function setValue(path: objectPath.Path, value: any): void {
      store.dispatch(actions.setValue(path, value))
    }

    function reset(): void {
      store.dispatch(actions.initializeState(initialState))
    }

    function clear(): void {
      store.dispatch(actions.initializeState({}))
    }

    return {
      ...store,
      getThemeState,
      setThemeState,
      setValue,
      reset,
      clear
    }
  }
}
