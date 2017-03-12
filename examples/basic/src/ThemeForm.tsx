import * as React from 'react'
import { compose } from 'redux'
import { withForm, FormProvider, Field, connectForm } from 'form-provider'

import { preventDefault, target } from './domHelpers'
import Form from './Form'
import Dropdown from './Dropdown'

export interface ThemeFormProps {
  baseFontSize: number
  onSubmit: (formState: any) => void
}

function createForm({ baseFontSize }) {
  return {
    baseFontSize
  }
}

function ThemeForm({ form, onSubmit }) {
  return (
    <Form form={form} onSubmit={onSubmit}>
      <h3>Basic Theme</h3>

      <Field path='baseFontSize'>
        {({ value, setValue }) =>
          <Dropdown label='Base Font Size' value={value} options={[12, 16, 22, 36]} onValue={setValue} />
        }
      </Field>
    </Form>
  )
}

export default withForm<ThemeFormProps>(createForm)(ThemeForm)
