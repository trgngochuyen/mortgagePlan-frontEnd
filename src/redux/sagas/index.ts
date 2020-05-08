import { all, fork } from 'redux-saga/effects'

import { getCustomers, saveCustomer } from './customers'

export default function* rootSaga() {
  yield all([fork(getCustomers), fork(saveCustomer)])
}
