import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        sellers: [
            { name: 'Мираторг', about: 'Информация о поставщике 1', logo: 'userpic.jpg', docs: 'cert1.jpg', id: 1, category: 'Мясная продукция', phone: '8-800-111-11-11', favorite: false, products: [
                    { title: 'Мясо', img: 'meat.png', price: '1000', value: 'кг' },
                    { title: 'Сосиски', img: 'sosiska.jpg', price: '500', value: 'кг' },
                    { title: 'Колбаса', img: 'kolbasa.jpg', price: '700', value: 'кг' },
                ] },
            { name: '22 Хлебзавод', about: 'Информация о поставщике 2', logo: 'userpic2.jpeg', docs: 'cert2.jpg', id: 2, category: 'Хлебная продукция', phone: '8-800-222-22-22', favorite: false, products: [
                    { title: 'Хлеб', img: 'bread.jpg', price: '50', value: 'шт' },
                    { title: 'Булочка', img: 'bulochka.jpg', price: '70', value: 'шт' },
                    { title: 'Пряник', img: 'pryanik.jpg', price: '100', value: 'шт' },
                ] },
            { name: 'Домик в деревне', about: 'Информация о поставщике 3', logo: 'userpic.jpg', id: 3, category: 'Молочная продукция', phone: '8-800-333-33-33', favorite: false, },
            { name: 'Мясницкий ряд', about: 'Информация о поставщике 4', logo: 'userpic.jpg', id: 4, category: 'Мясная продукция', phone: '8-800-444-44-44', favorite: false, },
            { name: 'Черемушки', about: 'Информация о поставщике 5', logo: 'userpic.jpg', id: 5, category: 'Хлебная продукция', phone: '8-800-555-55-55', favorite: false, },
            { name: 'Любятово', about: 'Информация о поставщике 6', logo: 'userpic.jpg', id: 6, category: 'Молочная продукция', phone: '8-800-666-66-66', favorite: false, },
            { name: 'Рублевский МК', about: 'Информация о поставщике 7', logo: 'userpic.jpg', id: 7, category: 'Мясная продукция', phone: '8-800-777-77-77', favorite: false, },
            { name: 'МосХлебТорг', about: 'Информация о поставщике 8', logo: 'userpic.jpg', id: 8, category: 'Хлебная продукция', phone: '8-800-888-88-88', favorite: false, },
            { name: 'Микоян', about: 'Информация о поставщике 9', logo: 'userpic.jpg', id: 9, category: 'Мясная продукция', phone: '8-800-100-10-10', favorite: false, },
            { name: '28 Хлебзавод', about: 'Информация о поставщике 10', logo: 'userpic.jpg', id: 10, category: 'Хлебная продукция', phone: '8-800-101-01-01', favorite: false, },
            { name: 'Веселый молочник', about: 'Информация о поставщике 11', logo: 'userpic.jpg', id: 11, category: 'Молочная продукция', phone: '8-800-334-55-22', favorite: false, },
        ],
        selectedSeller: 0,
        customer: {
            favorites: []
        }
    },
    getters: {
        SELLERS: state => {
            return state.sellers;
        },
    },
    mutations: {
        FILTER: (state, payload) => {
            state.sellers = state.sellers.filter(function (i) {
                return i.category.match(payload);
            });
        },
        SET_INDEX: (state, payload) => {
            state.selectedSeller = payload;
        },
        SET_FAV: (state, payload) => {
            state.sellers[payload].favorite = !state.sellers[payload].favorite;
        },
    },
    actions: {
        FILTER_SELLERS: ( context, payload ) => {
            context.commit( 'FILTER', payload );
        },
        SET_SELLER_INDEX: (context, payload) => {
            context.commit('SET_INDEX', payload)
        },
        SET_SELLER_TO_FAV: ( context, payload ) => {
            context.commit('SET_FAV', payload)
        },
    }
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
    store,
}).$mount('#app')
