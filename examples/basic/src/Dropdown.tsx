import * as React from 'react'
import { withStyles } from 'theme-provider'
import { css } from 'glamor'

import { target } from './domHelpers'

export interface DropdownProps {
  label: string
  value: any
  options: any[]
  onValue: (value) => void
}

function createStyles(theme) {
  return {
    label: css({
      display: 'block',
      marginBottom: '0.25rem'
    }),

    select: css({
      display: 'block',
      width: '100%',
      fontSize: '1rem',
      boxSizing: 'border-box',
      height: '2em',
      padding: '0.5rem 1rem',
      backgroundColor: '#fff',
      border: '1px solid #eee',
      borderRadius: '1rem',
      marginBottom: '2rem',
      boxShadow: 'none',
      outline: 'none',

      ':focus': {
        borderColor: theme.primaryColor
      }
    })
  }
}

function Dropdown({ styles, label, value, onValue, options }) {
  return (
    <div>
      <label {...styles.label}>{label}</label>
      <select {...styles.select} value={value} onChange={target(onValue)}>
        { options.map((val, i) =>
          <option key={i} value={val}>{val}</option>
        )}
      </select>
    </div>
  )
}

export default withStyles<DropdownProps>(createStyles)(Dropdown)
