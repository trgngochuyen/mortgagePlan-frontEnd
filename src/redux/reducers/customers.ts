import {
  CustomersState,
  CustomersActions,
  GET_CUSTOMERS_SUCCESS,
  SAVE_CUSTOMER_SUCCESS,
} from '../../types'

export default function customers(
  state: CustomersState = {
    all: [],
  },
  action: CustomersActions
): CustomersState {
  switch (action.type) {
  case GET_CUSTOMERS_SUCCESS: {
    const { all } = action.payload
    return { ...state, all }
  }
  case SAVE_CUSTOMER_SUCCESS: {
    const { customer } = action.payload
    return { ...state, all: [...state.all, customer] }
  }
  default:
    return state
  }
}
