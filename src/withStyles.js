import React, { Component } from 'react'

import themeStoreShape from './themeStoreShape'

export default function withStyles(getStyles) {
  return (BaseComponent) => {
    class WrappedComponent extends Component {
      componentWillMount() {
        const { theme } = this.context

        this.setStyles(theme.getState())

        this.unsubscribe = theme.subscribe(() => {
          this.setStyles(theme.getState())
        })
      }

      componentWillUnmount() {
        this.unsubscribe()
      }

      setStyles(themeVars) {
        this.setState({ styles: getStyles(themeVars) })
      }

      render() {
        const { styles } = this.state
        return <BaseComponent {...this.props} styles={styles} />
      }
    }

    WrappedComponent.displayName = `withStyles(${BaseComponent.displayName || 'Component'})`
    WrappedComponent.contextTypes = {
      theme: themeStoreShape
    }

    return WrappedComponent
  }
}

