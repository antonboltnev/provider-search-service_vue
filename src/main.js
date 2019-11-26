import Vue from 'vue'
import App from './App.vue'
import store from './store/store.js'
import Vuetify from 'vuetify'
import './assets/styles.scss'
import './assets/variables.scss'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
}).$mount('#app');
