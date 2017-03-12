import * as React from 'react'
import { createStore } from 'redux'

import themeReducer, { ThemeState } from './themeReducer'
import themeEnhancer, { ThemeStore } from './themeEnhancer'

export interface ThemeProps {
  theme: ThemeStore
}

export default function withTheme<P>(
  createTheme?: ThemeState | ((props: P) => ThemeState),
  reducer = themeReducer,
  enhancer = themeEnhancer()
) {
  return function createComponent(
    BaseComponent: React.ComponentClass<P & ThemeProps> | React.StatelessComponent<P & ThemeProps>
  ): React.ComponentClass<P> {
    class WrappedComponent extends React.PureComponent<P, {}> {
      public static displayName = `withTheme(${BaseComponent.displayName || 'Component'})`

      private theme: ThemeStore

      public render() {
        return <BaseComponent {...this.props} theme={this.theme} />
      }

      private componentWillMount() {
        const state = typeof createTheme === 'function'
          ? createTheme(this.props)
          : createTheme

        this.theme = createStore(reducer, state, enhancer) as ThemeStore
      }

      private componentWillReceiveProps(nextProps) {
        if (typeof createTheme === 'function') {
          this.theme.setThemeState(createTheme(nextProps))
        }
      }

      private componentWillUnmount() {
        this.theme = null
      }
    }

    return WrappedComponent
  }
}
