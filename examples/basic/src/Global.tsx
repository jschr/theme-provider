import * as React from 'react'
import { compose } from 'redux'
import { FormProvider, FormStore } from 'form-provider'
import { withStyles } from 'theme-provider'
import { css } from 'glamor'

import { preventDefault } from './domHelpers'

let previousRule

function createStyles(theme) {
  const htmlCss = css({
    fontFamily: theme.fontFamily,
    fontSize: `${theme.baseFontSize}px`
  })

  // fixes global style ordering issue with glamor
  // https://github.com/threepointone/glamor/issues/222#issuecomment-286186869
  const rule = Object.keys(htmlCss)[0]

  document.documentElement.removeAttribute(previousRule)
  document.documentElement.setAttribute(rule, htmlCss[rule])

  previousRule = rule
}

function Global({ children = null }) {
  return (
    children
  )
}

export default withStyles(createStyles)(Global)
