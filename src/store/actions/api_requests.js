import axios from 'axios'

export default {
  GET_SELLERS_LIST_FROM_API({commit}) {
    return axios('http://localhost:3000/sellers', {
      method: 'GET'
    })
        .then(sellers => {
          commit('GET_SELLERS_LIST_FROM_API', sellers.data)
        })
  }
}