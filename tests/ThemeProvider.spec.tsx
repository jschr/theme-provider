import * as React from 'react'
import * as expect from 'expect'
import { shallow } from 'enzyme'
import * as TestUtils from 'react-addons-test-utils'
import { createStore } from 'redux'

import { ThemeProvider, ThemeStore, themeReducer, createThemeEnhancer, themeStoreShape } from '../src'

const theme = createStore(themeReducer, {}, createThemeEnhancer()) as ThemeStore

describe('ThemeProvider', () => {
  it('should render children components', () => {
    const wrapper = shallow(
      <ThemeProvider theme={theme}>
        <div className='unique'/>
      </ThemeProvider>
    )

    expect(wrapper.contains(<div className='unique'/>)).toBe(true)
  })

  it('should require a theme', () => {
    const originalConsoleError = console.error
    console.error = () => { /* noop */ }

    expect(() => {
      shallow(
        <ThemeProvider theme={undefined}>
          <div className='unique'/>
        </ThemeProvider>
      )
    }).toThrow()

    console.error = originalConsoleError
  })

  it('should error if rendered without a child component', () => {
    const originalConsoleError = console.error
    console.error = () => { /* noop */ }

    expect(() => {
      shallow(<ThemeProvider theme={theme} />)
    }).toThrow()

    console.error = originalConsoleError
  })

  it('should add the theme to the child context', () => {
    class Child extends React.Component<any, { store: any, client: any}> {
      public static contextTypes: React.ValidationMap<any> = {
        theme: themeStoreShape.isRequired,
      }

      public context: {
        theme: ThemeStore
      }

      public render() {
        return <div />
      }
    }

    const tree = TestUtils.renderIntoDocument(
      <ThemeProvider theme={theme}>
        <Child />
      </ThemeProvider>
    ) as React.Component<any, any>

    const child = TestUtils.findRenderedComponentWithType(tree, Child)
    expect(child.context.theme).toEqual(theme)
  })
})
