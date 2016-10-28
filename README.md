# react-redux-theme-provider
React helpers for theming components

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