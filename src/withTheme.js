import React, { Component } from 'react'
import { createStore } from 'redux'

import themeReducer from './reducer'

export default function withForm(initialState, reducer = themeReducer, enhancer) {
  return (BaseComponent) => {
    class WrappedComponent extends Component {
      componentWillMount() {
        const state = typeof initialState === 'function'
          ? initialState(this.props)
          : initialState

        this.theme = createStore(reducer, state, enhancer)
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
