import * as React from 'react'
import { compose } from 'redux'
import { FormProvider, FormStore } from 'form-provider'
import { withStyles } from 'theme-provider'
import { css } from 'glamor'

import { preventDefault } from './domHelpers'

function createStyles(theme) {
  css.global('html', {
    fontFamily: theme.fontFamily,
    fontSize: `${theme.baseFontSize}px`
  })
}

function Global({ children = null }) {
  return (
    children
  )
}

export default withStyles(createStyles)(Global)
