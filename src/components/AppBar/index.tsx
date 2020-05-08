import React, { FunctionComponent } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'

export const drawerWidth = 550

const useStyles = makeStyles({
  root: {
    height: '60px',
    padding: '10px'
  },
})

const MyAppBar: FunctionComponent = ({ children }) => {
  const classes = useStyles()

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.root)}
    >
      {children}
    </AppBar >
  )
}
MyAppBar.displayName = 'MyAppBar'

export default MyAppBar