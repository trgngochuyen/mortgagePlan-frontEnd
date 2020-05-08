import { takeEvery, call, put } from 'redux-saga/effects'

import {
  GET_CUSTOMERS_REQUEST,
  GET_CUSTOMERS_SUCCESS,
  GET_CUSTOMERS_FAILURE,
  SAVE_CUSTOMER_REQUEST,
  SAVE_CUSTOMER_SUCCESS,
  SAVE_CUSTOMER_FAILURE,
  CALCULATE_MONTHLY_PAYMENT_SUCCESS,
  SaveCustomerRequest,
} from '../../types'

import Repository from '../repositories'

export function* getCustomers() {
  yield takeEvery(GET_CUSTOMERS_REQUEST, function* () {
    try {
      const response = yield call(Repository.getCustomers)
      if (response.status === 'error') {
        throw response
      }
      yield put({
        type: GET_CUSTOMERS_SUCCESS,
        payload: {
          all: response.data,
        },
      })
    } catch (error) {
      yield put({
        type: GET_CUSTOMERS_FAILURE,
        payload: { error: error },
      })
    }
  })
}

export function* saveCustomer() {
  yield takeEvery(SAVE_CUSTOMER_REQUEST, function* ({
    payload: { customer },
  }: SaveCustomerRequest) {
    try {
      const response = yield call(Repository.saveCustomer, customer)
      if (response.status === 'error') {
        throw response
      }
      yield put({
        type: SAVE_CUSTOMER_SUCCESS,
        payload: {
          customer: response.data,
        },
      })
      yield put({
        type: CALCULATE_MONTHLY_PAYMENT_SUCCESS,
        payload: {
          result: response.data.monthlyPayment,
        },
      })
    } catch (error) {
      yield put({
        type: SAVE_CUSTOMER_FAILURE,
        payload: { error: error },
      })
    }
  })
}
