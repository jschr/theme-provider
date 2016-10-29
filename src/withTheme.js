import React, { PureComponent } from 'react'
import { createStore } from 'redux'

// import { updateTheme } from './actions'
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

      // TODO: updating theme stateould cause many redundant css rules to be generated if using a
      // lib like glamor or aphrodite because they currently do not remove unused rules. Commenting
      // out for now because I haven't had a use case where theme variables changed without a page
      // refresh.
      // componentWillReceiveProps(nextProps) {
      //   if (typeof initialState === 'function') {
      //     const newState = initialState(nextProps)
      //     this.theme.dispatch(updateTheme(newState))
      //   }
      // }

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
