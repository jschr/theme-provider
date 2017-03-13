import * as React from 'react'
import { withStyles } from 'theme-provider'
import { css, merge } from 'glamor'

import { target } from './domHelpers'

export interface TextProps {
  text: string
  clamp?: number
}

function lineClamp(num) {
  return {
    display: '-webkit-box',
    WebkitLineClamp: num,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  }
}

function createStyles(theme) {
  return {
    text: css({
      display: 'block',
      marginBottom: '0.25rem'
    })
  }
}

function Text({ styles, text, clamp }) {
  return (
    <span {...merge(styles.text, clamp && css(lineClamp(clamp)))}>
      { text }
    </span>
  )
}

export default withStyles<TextProps>(createStyles)(Text)
