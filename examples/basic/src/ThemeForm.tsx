import * as React from 'react'
import { compose } from 'redux'
import { withForm, FormProvider, Field, connectForm } from 'form-provider'

import { preventDefault, target } from './domHelpers'
import Form from './Form'
import Dropdown from './Dropdown'
import Text from './Text'

export interface ThemeFormProps {
  baseFontSize: number
  lineClamp: number
  onSubmit: (formState: any) => void
}

function createForm({ baseFontSize, lineClamp }) {
  return {
    baseFontSize,
    lineClamp
  }
}

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id lorem eget neque egestas ' +
  'fermentum dignissim id orci. Cras eget purus vitae erat dignissim sagittis vel a odio. In vitae ex gravida' +
  'massa suscipit sollicitudin quis sed sem. Ut aliquet dapibus sapien, vitae hendrerit orci bibendum id. ' +
  'Curabitur ut arcu sit amet nulla placerat convallis. In libero tortor, faucibus nec elit vel, fermentum imperdiet' +
  'felis. Phasellus tempor ullamcorper est, sit amet posuere urna posuere accumsan. In bibendum eu metus in pretium. ' +
  'Etiam in neque molestie, pulvinar odio tristique, porta elit. Vestibulum venenatis non neque nec mollis. ' +
  'Ut facilisis a erat eget bibendum. Curabitur pellentesque posuere lectus eget hendrerit. Ut tempus iaculis semper.' +
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet quam vel purus porttitor varius.'

function ThemeForm({ form, lineClamp, onSubmit }) {
  return (
    <Form form={form} onSubmit={onSubmit}>
      <h3>Basic Theme</h3>

      <Field path='baseFontSize'>
        {({ value, setValue }) =>
          <Dropdown label='Base Font Size' value={value} options={[12, 16, 22, 36]} onValue={setValue} />
        }
      </Field>

      <Field path='lineClamp'>
        {({ value, setValue }) =>
          <Dropdown label='Line Clamp' value={value} options={[3, 6, 9]} onValue={setValue} />
        }
      </Field>

      <Text clamp={lineClamp} text={text} />

      <br />
      <a href='https://github.com/jschr/theme-provider/blob/master/examples/basic/src'>
        view code
      </a>
    </Form>
  )
}

export default withForm<ThemeFormProps>(createForm)(ThemeForm)
