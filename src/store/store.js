import Vue from 'vue'
import Vuex from 'vuex'
import common_actions from './actions/common_actions.js'
import api_requests from './actions/api_requests.js'
import mutations from './mutations/mutations.js'
import getters from './getters/getters'


Vue.use(Vuex);

const actions = {...api_requests, ...common_actions};

let store = new Vuex.Store({
  state: {
    pageName: '',
    isHeaderVisible: true,
    sellers: [],
    productCategories: [
      {name: 'ALL'},
      {name: 'Meat'},
      {name: 'Bread'},
      {name: 'Milk'},
      {name: 'Vodka'},
    ],
    selectedSeller: 0,
    cart: [],
    users: [],
    isAuth: false,
    isRegistered: false,
    errorMessages: {
      authError: 'Incorrect input',
      authWrongEmail: 'No such user found',
      authWrongPass: 'Wrong password',
      registerPassConfirm: 'Passwords do not match',
      emptyFields: 'Please, fill the form-fields'
    },
    preferencesCheckboxes: [
      {id: 'profile-data', value: true},
      {id: 'notifications', value: true},
      {id: 'updates', value: true},
      {id: 'news', value: true}
    ]
  },
  getters,
  mutations,
  actions
});

export default store;