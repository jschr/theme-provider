# react-redux-theme-provider

[![npm](https://img.shields.io/npm/v/react-redux-theme-provider.svg?style=flat-square)](https://www.npmjs.com/package/react-redux-theme-provider)

React helpers for theming components. Works great with inline styles or any css-in-js library.

## Installation

React 15.3.0 and Redux 3.0.0 or later are peer dependencies.

```
npm install --save react-redux-theme-provider
```

## Usage

```
// MyApp.js

import { withTheme, ThemeProvider } from 'react-redux-theme-provider

function MyApp({ theme }) {
  return (
    <ThemeProvider theme={theme}>
      <MyThemedComponent />
    </ThemeProvider>
  )
}

// theme variables
export default withTheme({
  primaryColor: 'blue'
})

// or theme variables as a function of props
export default withTheme(props => {
  primaryColor: props.primaryColor
})
```

```
// MyThemedComponent.js

import { withStyles } from 'react-redux-theme-provider

function MyThemedComponent({ styles }) {
  return (
    <div style={styles.base} />
  )
}

export default withStyles((theme) => ({
  base: {
    background: theme.primaryColor
  }
}))(MyThemedComponent)

```
