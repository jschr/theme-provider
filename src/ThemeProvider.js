import { PureComponent, PropTypes, Children } from 'react'

import themeStoreShape from './themeStoreShape'

export default class ThemeProvider extends PureComponent {
  getChildContext() {
    const { theme } = this.props

    return { theme }
  }

  render() {
    const { children } = this.props

    return Children.only(children)
  }
}

ThemeProvider.propTypes = {
  theme: themeStoreShape.isRequired,
  children: PropTypes.node
}

ThemeProvider.childContextTypes = {
  theme: themeStoreShape.isRequired
}
