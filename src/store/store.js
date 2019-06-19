import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/router.js'
Vue.use(Vuex);
let store = new Vuex.Store({
    state: {
        pageName: '',
        isHeaderVisible: true,
        sellers: [
            { name: 'Miratorg', about: 'Provider 1 Info', logo: 'miratorg.jpg', docs: 'cert1.jpg', id: 1, category: 'Meat', phone: '8-800-111-11-11', favorite: false, products: [
                    { title: 'Meat Type 1', img: 'meat.png', price: '1000', value: 'kg', ordered: false, qty: 1, total: 1000, category: 'Meat' },
                    { title: 'Meat Type 2', img: 'meat.png', price: '800', value: 'kg', ordered: false, qty: 1, total: 800, category: 'Meat' },
                    { title: 'Sausages Type 1', img: 'sosiska.jpg', price: '400', value: 'kg', ordered: false, qty: 1, total: 400, category: 'Sausages' },
                    { title: 'Sausages Type 2', img: 'sosiska.jpg', price: '500', value: 'kg', ordered: false, qty: 1, total: 500, category: 'Sausages' },
                    { title: 'Beef Type 1', img: 'kolbasa.jpg', price: '1000', value: 'kg', ordered: false, qty: 1, total: 1000, category: 'Beef' },
                    { title: 'Beef Type 2', img: 'kolbasa.jpg', price: '700', value: 'kg', ordered: false, qty: 1, total: 700, category: 'Beef' },
                ] },
            { name: 'Grocery', about: 'Provider 2 Info', logo: '2hleb.jpg', docs: 'cert2.jpg', id: 2, category: 'Grocery', phone: '8-800-222-22-22', favorite: false, products: [
                    { title: 'White Bread', img: 'bread.jpg', price: '60', value: 'piece', ordered: false, qty: 1, total: 60, category: 'Bread'  },
                    { title: 'Black Bread', img: 'bread.jpg', price: '50', value: 'piece', ordered: false, qty: 1, total: 50, category: 'Bread'  },
                    { title: 'Biscuit 1', img: 'bulochka.jpg', price: '70', value: 'piece', ordered: false, qty: 1, total: 70, category: 'Biscuit'  },
                    { title: 'Biscuit 2', img: 'bulochka.jpg', price: '100', value: 'piece', ordered: false, qty: 1, total: 100, category: 'Biscuit'  },
                    { title: 'Honey-cake 1', img: 'pryanik.jpg', price: '100', value: 'piece', ordered: false, qty: 1, total: 100, category: 'Honey-cake'  },
                    { title: 'Honey-cake 2', img: 'pryanik.jpg', price: '110', value: 'piece', ordered: false, qty: 1, total: 110, category: 'Honey-cake'  },
                ] },
            { name: 'Milk products', about: 'Provider 3 Info', logo: 'domik.jpg', id: 3, category: 'Milk', phone: '8-800-333-33-33', favorite: false, },
            { name: 'Meat Products', about: 'Provider 4 Info', logo: 'myasnitskiy.jpg', id: 4, category: 'Meat', phone: '8-800-444-44-44', favorite: false, },
            { name: 'Bread Products', about: 'Provider 5 Info', logo: 'face-logo.png', id: 5, category: 'Bread', phone: '8-800-555-55-55', favorite: false, },
            { name: 'Cookies', about: 'Provider 6 Info', logo: 'face-logo.png', id: 6, category: 'Milk', phone: '8-800-666-66-66', favorite: false, },
            { name: 'Another Meat Products', about: 'Provider 7 Info', logo: 'face-logo.png', id: 7, category: 'Meat', phone: '8-800-777-77-77', favorite: false, },
            { name: 'Another Bread Products', about: 'Provider 8 Info', logo: 'face-logo.png', id: 8, category: 'Bread', phone: '8-800-888-88-88', favorite: false, },
            { name: 'Another Meat Products 2', about: 'Provider 9 Info', logo: 'face-logo.png', id: 9, category: 'Meat', phone: '8-800-100-10-10', favorite: false, },
            { name: 'Another Bread Products 2', about: 'Provider 10 Info', logo: 'face-logo.png', id: 10, category: 'Bread', phone: '8-800-101-01-01', favorite: false, },
            { name: 'Milk products 2', about: 'Provider 11 Info', logo: 'face-logo.png', id: 11, category: 'Milk', phone: '8-800-334-55-22', favorite: false, },
        ],
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
    getters: {
        SELLERS: state => {
            return state.sellers;
        },
    },
    mutations: {
        SET_HEADER: (state, text) => {
            state.pageName = text;
        },
        FILTER: (state, category) => {
            state.sellers = state.sellers.filter(function (i) {
                return i.category.match(category);
            });
        },
        SET_INDEX: (state, index) => {
            state.selectedSeller = index;
            console.log(index);
        },
        SET_FAV: (state, index) => {
            state.sellers[index].favorite = !state.sellers[index].favorite;
        },
        ADD_TO_CART: (state, products) => {
            if (state.cart.includes(products)) {
                return false;
            } else {
                state.cart.push(products);
            }
        },
        SET_ORDER_LIST: (state, {product_index, sellerIndex}) => {
            state.sellers[sellerIndex].products[product_index].ordered = true;
        },
        REMOVE_ITEM: (state, index) => {
            for ( let seller of state.sellers) {
                if  ( seller.products !== undefined ) {
                    for ( let product of  seller.products) {
                        if (product.title === state.cart[index].title) {
                            product.ordered = false;
                        }
                    }
                }
            }
            state.cart[index].qty = 1;
            state.cart.splice(index, 1);
        },
        PLUS_QTY: (state, index) => {
            state.cart[index].qty++;
            state.cart[index].total = state.cart[index].qty * state.cart[index].price;
        },
        MINUS_QTY: (state, index) => {
            if (state.cart[index].qty > 1) {
                state.cart[index].qty--;
                state.cart[index].total -= state.cart[index].price;
            } else {
                return false;
            }
        },
        CART_CHECKOUT: (state) => {
            state.cart.splice(0, state.cart.length);
            for (let i = 0; i < state.sellers.length; i++) {
                if  (state.sellers[i].products !== undefined) {
                    for (let j = 0; j <  state.sellers[i].products.length; j++) {
                        state.sellers[i].products[j].ordered = false;
                        state.sellers[i].products[j].qty = 1;
                    }
                }
            }
        },
        HIDE_HEAD: (state) => {
            state.isHeaderVisible = false;
        },
        SHOW_HEAD: (state) => {
            state.isHeaderVisible = true;
        },
        SET_USER: (state, payload) => {
            state.users.push(payload);
        },
        AUTH: (state, user) => {
            let promise = new Promise(function (resolve) {
                    state.isAuth = true;
                    state.users.push(user);
                    return resolve();
            });
            promise.then(() => {
                setTimeout(function () {
                    router.push('/home');
                }, 1500);
            })
        },
        REGISTER: (state, regData) => {
            let promise = new Promise(function (resolve) {
                state.users.slice(0, state.users.length);
                resolve();
            });
            promise.then(() => {
                state.users.push(regData);
            });
        },
        SUCCESS_REGISTRATION: (state) => {
            let promise = new Promise(function (resolve) {
                state.isRegistered = true;

                resolve();
            });
            promise.then(() =>{
                setTimeout(function () {
                    router.push('/home');
                }, 1500);
            });
        },
        EDIT_PROFILE_INFO: (state, userData) => {
            Object.assign(state.users, userData);
        },
        SET_CHECKBOX: (state, index) => {
            for (let item of state.preferencesCheckboxes) {
                if (item.id === index) {
                    item.value = !item.value;
                }
            }
        }
    },
    actions: {
        SET_HEADER_TEXT ({commit}, text) {
            commit('SET_HEADER', text);
        },
        FILTER_SELLERS ({commit}, category) {
            commit('FILTER', category);
        },
        SET_SELLER_INDEX ({commit}, index) {
            commit('SET_INDEX', index);
        },
        SET_SELLER_TO_FAV ({commit}, index)  {
            commit('SET_FAV', index);
        },
        ADD_TO_CART ({commit}, products) {
            commit('ADD_TO_CART', products);
        },
        SET_ORDER_LIST ({commit}, {product_index, sellerIndex}) {
            commit('SET_ORDER_LIST', {product_index, sellerIndex});
        },
        REMOVE_FROM_CART ({commit}, index) {
            commit('REMOVE_ITEM', index);
        },
        INCREMENT_PRODUCT_QTY ({commit}, index) {
            commit('PLUS_QTY', index);
        },
        DECREMENT_PRODUCT_QTY ({commit}, index) {
            commit('MINUS_QTY', index);
        },
        CHECKOUT ({commit}) {
            commit('CART_CHECKOUT');
        },
        HIDE_HEADER ({commit}) {
            commit('HIDE_HEAD');
        },
        SHOW_HEADER ({commit}) {
            commit('SHOW_HEAD');
        },
        SUCCESS_AUTH ({commit}, user) {
            commit('AUTH', user);
        },
        SUCCESS_REGISTRATION ({commit}) {
            commit('SUCCESS_REGISTRATION');
        },
        REGISTRATION ({commit}, regData) {
            commit('REGISTER', regData);
        },
        EDIT_PROFILE ({commit}, userData) {
            commit('EDIT_PROFILE_INFO', userData);
        },
        SET_PREFERENCES_CHECKBOXES ({commit}, index) {
            commit('SET_CHECKBOX', index);
        },
    }
});

export  default store;