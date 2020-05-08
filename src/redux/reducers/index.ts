import { combineReducers } from 'redux'

import customers from './customers'
import calculation from './calculation'

const createRootReducer = () =>
  combineReducers({
    customers,
    calculation,
  })

export default createRootReducer
