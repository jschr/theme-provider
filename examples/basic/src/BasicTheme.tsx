import * as React from 'react'
import { compose } from 'redux'
import { withTheme, ThemeProvider } from 'theme-provider'

import Global from './Global'
import ThemeForm from './ThemeForm'

export interface BasicThemeProps {
  baseFontSize: number
  onSubmit: (themeState: any) => void
}

function createTheme({ baseFontSize }) {
  console.log(baseFontSize)
  return {
    baseFontSize,
    fontFamily: '\'Avenir Next\', \'Helvetic Neue\', Arial, sans-serif',
    primaryColor: 'red'
  }
}

function BasicTheme({ theme, baseFontSize, onSubmit }) {
  return (
    <ThemeProvider theme={theme}>
      <Global>
        <ThemeForm baseFontSize={baseFontSize} onSubmit={onSubmit} />
      </Global>
    </ThemeProvider>
  )
}

export default withTheme<BasicThemeProps>(createTheme)(BasicTheme)
