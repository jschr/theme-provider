import React from 'react'
import { connect } from 'react-redux'

import themeStoreShape from './themeStoreShape'

export default function connectTheme(...args) {
  return function wrapWithConnect(BaseComponent) {
    const ConnectedBaseComponent = connect(...args)(BaseComponent)

    function ConnectedComponent(props, context) {
      return (
        <ConnectedBaseComponent {...props} store={context.theme} />
      )
    }

    ConnectedComponent.contextTypes = {
      theme: themeStoreShape.isRequired
    }

    return ConnectedComponent
  }
}
