import * as React from 'react'
import { compose } from 'redux'
import { FormProvider, FormStore } from 'form-provider'
import { withStyles } from 'theme-provider'

import { preventDefault } from './domHelpers'

export interface FormProps {
  form: FormStore
  onSubmit: (formState: any) => void
}

function createStyles(theme) {
  return {

  }
}

function Form({ form, onSubmit, children = null }) {
  return (
    <FormProvider form={form} onSubmit={onSubmit} submitOnValue>
      <form onSubmit={preventDefault(form.submit)}>
        { children }
      </form>
    </FormProvider>
  )
}

export default withStyles<FormProps>(createStyles)(Form)
