import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import { Typography } from '@material-ui/core'

import CalculateForm from '../components/CalculateForm'
import CustomerTable from '../components/CustomerTable'
import { AppState } from '../types'

const useStyles = makeStyles({
  app: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100vh',
    flexDirection: 'column',
    overflowX: 'hidden',
  },
  center: {
    textAlign: 'center',
  },
})
function Home() {
  const classes = useStyles()
  const monthlyPayment = useSelector(
    (state: AppState) => state.calculation.result
  )
  console.log(monthlyPayment)
  return (
    <div className={classes.app}>
      <div style={{ flex: 1 }}>
        <Typography className={classes.center} variant="h5" color="primary">
          Mortgage Plan Calculator
        </Typography>
        <CalculateForm />
        <div className={classes.center} style={{ minHeight: '20vh' }}>
          <Typography color="primary" variant="h1">
            {monthlyPayment}€
          </Typography>
          <Typography color="primary" variant="subtitle1">
            Calculated Monthly Payment
          </Typography>
        </div>
      </div>
      <CustomerTable />
    </div>
  )
}

export default Home
