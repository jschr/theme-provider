import * as React from 'react'
import { compose } from 'redux'
import { FormProvider, FormStore } from 'form-provider'
import { withStyles } from 'theme-provider'
import { css } from 'glamor'

import { preventDefault } from './domHelpers'

export interface FormProps {
  form: FormStore
  onSubmit: (formState: any) => void
}

function createStyles() {
  return {
    default: css({
      display: 'block',
      maxWidth: '30rem',
      margin: '0 auto'
    })
  }
}

function Form({ form, styles, onSubmit, children = null }) {
  return (
    <FormProvider form={form} onSubmit={onSubmit} submitOnValue>
      <form {...styles.default} onSubmit={preventDefault(form.submit)}>
        { children }
      </form>
    </FormProvider>
  )
}

export default withStyles<FormProps>(createStyles)(Form)
