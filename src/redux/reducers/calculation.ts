import {
  CalculationState,
  CalculationActions,
  CALCULATE_MONTHLY_PAYMENT_SUCCESS,
} from '../../types'

export default function calculation(
  state: CalculationState = {
    result: 0,
  },
  action: CalculationActions
): CalculationState {
  switch (action.type) {
  case CALCULATE_MONTHLY_PAYMENT_SUCCESS: {
    const { result } = action.payload
    return { ...state, result }
  }
  default:
    return state
  }
}
