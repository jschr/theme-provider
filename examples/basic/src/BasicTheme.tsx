import * as React from 'react'
import { compose } from 'redux'
import { withTheme, ThemeProvider } from 'theme-provider'

import Global from './Global'
import ThemeForm from './ThemeForm'

export interface BasicThemeProps {
  baseFontSize: number
  lineClamp: number
  onSubmit: (themeState: any) => void
}

function createTheme({ baseFontSize }) {
  return {
    baseFontSize,
    fontFamily: '\'Avenir Next\', \'Helvetic Neue\', Arial, sans-serif',
    primaryColor: '#66afe9'
  }
}

function BasicTheme({ theme, baseFontSize, lineClamp, onSubmit }) {
  return (
    <ThemeProvider theme={theme}>
      <Global>
        <ThemeForm baseFontSize={baseFontSize} lineClamp={lineClamp} onSubmit={onSubmit} />
      </Global>
    </ThemeProvider>
  )
}

export default withTheme<BasicThemeProps>(createTheme)(BasicTheme)
