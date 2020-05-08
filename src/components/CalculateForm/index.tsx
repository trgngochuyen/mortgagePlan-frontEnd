import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, InputAdornment } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Formik, Form } from 'formik'
import { object, string, number } from 'yup'

import FormikMuiTextField from '../FormikMuiTextField'
import { saveCustomer } from '../../redux/actions'

const useStyles = makeStyles({
  form: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
  },
})

const validationSchema = object({
  name: string().max(100).required('Customer name is required'),
  years: number()
    .integer()
    .required('Required')
    .notOneOf([0], 'Years cannot be 0'),
  loan: number().required('Required').notOneOf([0], 'Loan cannot be 0'),
  interestRate: number().required('Required'),
  monthlyPayment: number(),
})

type Props = {
  name: string
  years: number
  loan: number
  interestRate: number
}

const initialValues = {
  name: '',
  years: 0,
  loan: 0,
  interestRate: 0,
  monthlyPayment: 0,
}
export default function CalculateForm() {
  const classes = useStyles()
  const dispatch = useDispatch()

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        dispatch(saveCustomer(values))
        setTimeout(() => {
          setSubmitting(false)
        }, 500)
        resetForm()
      }}
    >
      {({ isSubmitting, dirty, isValid }) => (
        <Form className={classes.form}>
          <FormikMuiTextField label="Name" name="name" />
          <FormikMuiTextField label="Years" name="years" />
          <FormikMuiTextField
            label="Loan"
            name="loan"
            inputProps={{
              InputProps: {
                endAdornment: <InputAdornment position="end">€</InputAdornment>,
              },
            }}
          />
          <FormikMuiTextField
            label="Interest Rate"
            name="interestRate"
            inputProps={{
              InputProps: {
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              },
            }}
          />
          <Button
            disabled={!dirty || !isValid || isSubmitting}
            type="submit"
            variant="outlined"
            color="primary"
          >
            Calculate
          </Button>
        </Form>
      )}
    </Formik>
  )
}
