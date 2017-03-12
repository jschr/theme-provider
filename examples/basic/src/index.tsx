import * as React from 'react'
import * as ReactDOM from 'react-dom'

import BasicTheme from './BasicTheme'

function render({ baseFontSize }) {
  ReactDOM.render(
    <BasicTheme baseFontSize={baseFontSize} onSubmit={render} />,
    document.getElementById('root')
  )
}

render({ baseFontSize: 16 })
