import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import { Typography } from '@material-ui/core'

import CalculateForm from '../components/CalculateForm'
import CustomerTable from '../components/CustomerTable'
import AppBar from '../components/AppBar'
import { AppState } from '../types'

const useStyles = makeStyles({
  app: {
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: '100vh',
    flexDirection: 'column',
    overflowX: 'hidden',
    position: 'relative',
  },
  center: {
    textAlign: 'center',
  },
  content: {
    position: 'absolute',
    top: '75px',
    width: '100%',
    margin: '0 auto',
    height: '90%'
  },
  table: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column'
  }
})
function Home() {
  const classes = useStyles()
  const monthlyPayment = useSelector(
    (state: AppState) => state.calculation.result
  )

  return (
    <div className={classes.app}>
      <AppBar
        children={<Typography variant="h4">
          Mortgage Plan Calculator
        </Typography>} />
      <div className={classes.content}>
        <CalculateForm />
        <div className={classes.table}>
          <div className={classes.center} style={{ minHeight: '20vh' }}>
            <Typography color="primary" variant="h1">
              {monthlyPayment}€
          </Typography>
            <Typography color="primary" variant="subtitle1">
              Calculated Monthly Payment
          </Typography>
          </div>
          <CustomerTable />
        </div>
      </div>
    </div>
  )
}

export default Home
