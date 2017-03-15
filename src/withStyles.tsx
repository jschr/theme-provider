import * as React from 'react'
import { createStore, Unsubscribe } from 'redux'

import themeReducer, { ThemeState } from './themeReducer'
import themeEnhancer, { ThemeStore } from './themeEnhancer'
import themeStoreShape from './themeStoreShape'

export interface StylesProps {
  styles: any
}

export default function withStyles<P>(
  createStyles: (themeState: ThemeState, props: P) => any
) {
  return function createComponent(
    BaseComponent: React.ComponentClass<P & StylesProps> | React.StatelessComponent<P & StylesProps>
  ): React.ComponentClass<P> {
    class WrappedComponent extends React.PureComponent<P, { styles: any }> {
      public static displayName = `withStyles(${BaseComponent.displayName || 'Component'})`

      public static contextTypes = {
        theme: themeStoreShape.isRequired
      }

      private theme: ThemeStore
      private unsubscribe: Unsubscribe

      public render() {
        return <BaseComponent {...this.props} styles={this.state.styles} />
      }

      private componentWillMount() {
        const { theme } = this.context

        this.updateStyles(this.props)

        if (typeof createStyles === 'function') {
          this.unsubscribe = theme.subscribe(() => {
            this.updateStyles(this.props)
          })
        }
      }

      private componentWillReceiveProps(nextProps) {
        if (typeof withStyles === 'function') {
          this.updateStyles(nextProps)
        }
      }

      private componentWillUnmount() {
        if (this.unsubscribe) this.unsubscribe()
      }

      private updateStyles(props) {
        const { theme } = this.context

        this.setState({
          styles: typeof createStyles === 'function'
            ? createStyles(theme.getState(), props)
            : createStyles
        })
      }
    }

    return WrappedComponent
  }
}
