// App State

export type AppState = {
  customers: CustomersState
  calculation: CalculationState
}
// Customers
export type Customer = {
  name: string
  years: number
  loan: number
  interestRate: number
  monthlyPayment: number
}

export const GET_CUSTOMERS_REQUEST = 'GET_CUSTOMERS_REQUEST'
export const GET_CUSTOMERS_SUCCESS = 'GET_CUSTOMERS_SUCCESS'
export const GET_CUSTOMERS_FAILURE = 'GET_CUSTOMERS_FAILURE'

export type GetCustomersRequest = {
  type: typeof GET_CUSTOMERS_REQUEST
}

export type GetCustomersSuccess = {
  type: typeof GET_CUSTOMERS_SUCCESS
  payload: {
    all: Customer[]
  }
}

export type CustomersActions =
  | GetCustomersRequest
  | GetCustomersSuccess
  | SaveCustomerRequest
  | SaveCustomerSuccess

export type CustomersState = {
  all: Customer[]
}

export const SAVE_CUSTOMER_REQUEST = 'SAVE_CUSTOMER_REQUEST'
export const SAVE_CUSTOMER_SUCCESS = 'SAVE_CUSTOMER_SUCCESS'
export const SAVE_CUSTOMER_FAILURE = 'SAVE_CUSTOMER_FAILURE'

export type SaveCustomerRequest = {
  type: typeof SAVE_CUSTOMER_REQUEST
  payload: {
    customer: Customer
  }
}

export type SaveCustomerSuccess = {
  type: typeof SAVE_CUSTOMER_SUCCESS
  payload: {
    customer: Customer
  }
}

// Calculation
export type Result = number

export const CALCULATE_MONTHLY_PAYMENT_SUCCESS =
  'CALCULATE_MONTHLY_PAYMENT_SUCCESS'
export const CALCULATE_MONTHLY_PAYMENT_FAILURE =
  'CALCULATE_MONTHLY_PAYMENT_FAILURE'

export type CalculationSuccess = {
  type: typeof CALCULATE_MONTHLY_PAYMENT_SUCCESS
  payload: {
    result: Result
  }
}
export type CalculationActions = CalculationSuccess
export type CalculationState = {
  result: Result
}
