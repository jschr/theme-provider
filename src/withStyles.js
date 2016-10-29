import React, { Component } from 'react'

import themeStoreShape from './themeStoreShape'

export default function withStyles(styles) {
  return (BaseComponent) => {
    class WrappedComponent extends Component {
      componentWillMount() {
        const { theme } = this.context

        this.setStyles(theme.getState())

        if (typeof styles === 'function') {
          this.unsubscribe = theme.subscribe(() => {
            this.setStyles(theme.getState())
          })
        }
      }

      componentWillUnmount() {
        this.unsubscribe()
      }

      setStyles(themeVars) {
        this.setState({
          styles: typeof styles === 'function'
            ? styles(themeVars)
            : styles
        })
      }

      render() {
        return <BaseComponent {...this.props} styles={this.state.styles} />
      }
    }

    WrappedComponent.displayName = `withStyles(${BaseComponent.displayName || 'Component'})`
    WrappedComponent.contextTypes = {
      theme: themeStoreShape
    }

    return WrappedComponent
  }
}

