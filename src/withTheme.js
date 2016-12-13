import React, { PureComponent } from 'react'
import { createStore } from 'redux'

import { updateTheme } from './actions'
import themeReducer from './reducer'

export default function withTheme(initialState, reducer = themeReducer, enhancer) {
  return (BaseComponent) => {
    class WrappedComponent extends PureComponent {
      componentWillMount() {
        const state = typeof initialState === 'function'
          ? initialState(this.props)
          : initialState

        this.theme = createStore(reducer, state, enhancer)
      }

      componentWillReceiveProps(nextProps) {
        if (typeof initialState === 'function') {
          const newState = initialState(nextProps)
          this.theme.dispatch(updateTheme(newState))
        }
      }

      componentWillUnmount() {
        this.theme = null
      }

      render() {
        return <BaseComponent {...this.props} theme={this.theme} />
      }
    }

    WrappedComponent.displayName = `withTheme(${BaseComponent.displayName || 'Component'})`

    return WrappedComponent
  }
}
