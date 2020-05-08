import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import { getCustomers } from '../../redux/actions'
import { AppState } from '../../types'

const useStyles = makeStyles({
  root: {
    padding: '20px',
  },
  table: {
    minWidth: 650,
    maxWidth: '90vw',
    margin: '0 auto',
  },
})

export default function CustomerTable() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { all } = useSelector((state: AppState) => state.customers)
  console.log(all)
  useEffect(() => {
    if (all && !all.length) {
      dispatch(getCustomers())
    }
  }, [all, dispatch])
  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell align="right">Loan</TableCell>
            <TableCell align="right">Years</TableCell>
            <TableCell align="right">Interest Rate</TableCell>
            <TableCell align="right">Monthly Payment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {all.length ?
            all.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">
                  {row.loan.toFixed(2).toLocaleString()} €
                </TableCell>
                <TableCell align="right">{row.years}</TableCell>
                <TableCell align="right">{row.interestRate}%</TableCell>
                <TableCell align="right">
                  {row.monthlyPayment.toFixed(2).toLocaleString()} €
                </TableCell>
              </TableRow>
            )) :
            <p>No data available</p>}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
