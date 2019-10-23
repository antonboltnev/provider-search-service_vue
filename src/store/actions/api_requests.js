import axios from 'axios'

export default {
    GET_SELLERS_LIST_FROM_API({commit}) {
        axios('http://localhost:3000/sellers', {
            method: 'GET'
        })
            .then(sellers => {
                console.log(sellers);
                commit('GET_SELLERS_LIST_FROM_API', sellers.data)
        })
    }
}