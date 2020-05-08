import axios from 'axios'

import BackendRoutePathConstants from '../../constants'
import { Customer } from '../../types'

const { customers, backendUrl } = BackendRoutePathConstants

export default {
  async getCustomers() {
    return await axios
      .get(`${backendUrl}/${customers}`)
      .then((res) => res)
      .catch((error) => error.response.data)
  },
  async saveCustomer(customer: Partial<Customer>) {
    return await axios
      .post(`${backendUrl}/${customers}`, customer)
      .then((res) => res)
      .catch((error) => error.response.data)
  },
}
