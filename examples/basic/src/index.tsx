import * as React from 'react'
import * as ReactDOM from 'react-dom'

import BasicTheme from './BasicTheme'

function render({ baseFontSize, lineClamp }) {
  ReactDOM.render(
    <BasicTheme baseFontSize={baseFontSize} lineClamp={lineClamp} onSubmit={render} />,
    document.getElementById('root')
  )
}

render({ baseFontSize: 16, lineClamp: 3 })
