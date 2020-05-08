import {
  GET_CUSTOMERS_REQUEST,
  SAVE_CUSTOMER_REQUEST,
  CustomersActions,
  Customer,
} from '../../types'

export function getCustomers(): CustomersActions {
  return {
    type: GET_CUSTOMERS_REQUEST,
  }
}

export function saveCustomer(customer: Customer): CustomersActions {
  return {
    type: SAVE_CUSTOMER_REQUEST,
    payload: {
      customer,
    },
  }
}
