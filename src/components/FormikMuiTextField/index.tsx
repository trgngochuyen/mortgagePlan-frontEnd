import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'
import { useField, FieldAttributes } from 'formik'

const useStyles = makeStyles({
  root: {
    maxWidth: '15vw',
  },
})
const FormikMuiTextField: FC<
  {
    label: string
    disabled?: boolean
    inputProps?: any
    variant?: string
  } & FieldAttributes<{}>
> = ({
  label,
  disabled = false,
  inputProps,
  variant = 'outlined',
  ...textFieldProps
}) => {
  const classes = useStyles()
  const [field, meta] = useField<{}>(textFieldProps)
  const errorText = meta.error && meta.touched ? meta.error : ''
  return (
    <TextField
      {...field}
      {...inputProps}
      helperText={errorText}
      error={!!errorText}
      label={label}
      color="primary"
      disabled={disabled}
      variant={variant}
      fullWidth
      className={classes.root}
    />
  )
}

export default FormikMuiTextField
