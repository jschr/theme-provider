# theme-provider

[![npm](https://img.shields.io/npm/v/theme-provider.svg)](https://www.npmjs.com/package/theme-provider)
[![Build Status](https://img.shields.io/travis/jschr/theme-provider/master.svg)](https://travis-ci.org/jschr/theme-provider)

React helpers for theming components. Works with inline styles or any css-in-js library.

Demos:
  * [Basic Example](http://theme-provider-basic-example.surge.sh/)

## Installation

```bash
npm install --save react react-dom redux react-redux # peer dependencies
npm install --save theme-provider
```

## Usage

```js
// MyApp.js

import { withTheme, ThemeProvider } from 'theme-provider'

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
})(MyApp)

// or theme variables as a function of props
export default withTheme(props => ({
  primaryColor: props.primaryColor
}))(MyApp)
```

Check out the [basic form example](examples/basic) for the entire source.

```js
// MyThemedComponent.js

import { withStyles } from 'theme-provider'

function MyThemedComponent({ styles }) {
  return (
    <div style={styles.base} />
  )
}

export default withStyles(theme => ({
  base: {
    background: theme.primaryColor
  }
}))(MyThemedComponent)

```

## Usage with Glamor

```js
// MyThemedComponent.js

import { style } from 'glamor'
import { withStyles } from 'theme-provider'

function MyThemedComponent({ styles }) {
  return (
    <div {...styles.base} />
  )
}

export default withStyles(theme => ({
  base: style({
    background: theme.primaryColor
  })
}))(MyThemedComponent)

```

## Usage with Aphrodite

```js
// MyThemedComponent.js

import { StyleSheet, css } from 'aphrodite'
import { withStyles } from 'theme-provider'

function MyThemedComponent({ styles }) {
  return (
    <div className={css(styles.base)} />
  )
}

export default withStyles(theme => StyleSheet.create({
  base: {
    background: theme.primaryColor
  }
}))(MyThemedComponent)

```
