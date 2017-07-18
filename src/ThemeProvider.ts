import { PureComponent, Children } from 'react'
import * as PropTypes from 'prop-types'
import * as invariant from 'invariant'

import { ThemeStore } from './themeEnhancer'
import { ThemeState } from './themeReducer'
import themeStoreShape from './themeStoreShape'

export interface ThemeProviderProps {
  theme: ThemeStore
}

export default class ThemeProvider extends PureComponent<ThemeProviderProps, {}> {
  private static propTypes = {
    theme: themeStoreShape.isRequired,
    children: PropTypes.node
  }

  private static childContextTypes = {
    theme: themeStoreShape.isRequired
  }

  constructor(props, context) {
    super(props, context)

    invariant(props.theme, 'ThemeProvider is missing the "theme" prop.')
  }

  public render() {
    const { children } = this.props

    return Children.only(children)
  }

  private getChildContext() {
    const { theme } = this.props

    return { theme }
  }
}
