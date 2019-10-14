import Vue from 'vue'
import Vuex from 'vuex'
import common_actions from './actions/common_actions.js'
import api_requests from './actions/common_actions.js'
import mutations from './mutations/mutations.js'
import getters from './getters/getters'


Vue.use(Vuex);

const actions = Object.assign({}, api_requests, common_actions);

let store = new Vuex.Store({
    state: {
        pageName: '',
        isHeaderVisible: true,
        sellers: [
            { name: 'Miratorg', about: 'Supplier 1 Info', logo: 'miratorg.jpg', docs: 'cert1.jpg', id: 1, category: 'Meat', phone: '8-800-111-11-11', favorite: false, products: [
                    { title: 'Meat Type 1', img: 'meat.png', price: '1000', value: 'kg', ordered: false, qty: 1, total: 1000, category: 'Meat', fat: 100, calories: 200, carbs: 300, iron: 400, protein: 500, delivery: 1, minvalue: 10 },
                    { title: 'Meat Type 2', img: 'meat.png', price: '800', value: 'kg', ordered: false, qty: 1, total: 800, category: 'Meat', fat: 123, calories: 321, carbs: 345, iron: 666, protein: 534, delivery: 1, minvalue: 10 },
                    { title: 'Sausages Type 1', img: 'sosiska.jpg', price: '400', value: 'kg', ordered: false, qty: 1, total: 400, category: 'Sausages', fat: 324, calories: 222, carbs: 333, iron: 555, protein: 666, delivery: 1, minvalue: 5 },
                    { title: 'Sausages Type 2', img: 'sosiska.jpg', price: '500', value: 'kg', ordered: false, qty: 1, total: 500, category: 'Sausages', fat: 62, calories: 75, carbs: 36, iron: 87, protein: 77, delivery: 1, minvalue: 5 },
                    { title: 'Beef Type 1', img: 'kolbasa.jpg', price: '1000', value: 'kg', ordered: false, qty: 1, total: 1000, category: 'Beef', fat: 22, calories: 44, carbs: 85, iron: 35, protein: 423, delivery: 1, minvalue: 15 },
                    { title: 'Beef Type 2', img: 'kolbasa.jpg', price: '700', value: 'kg', ordered: false, qty: 1, total: 700, category: 'Beef', fat: 909, calories: 88, carbs: 568, iron: 4234, protein: 568, delivery: 1, minvalue: 13 },
                ] },
            { name: 'Grocery', about: 'Supplier 2 Info', logo: '2hleb.jpg', docs: 'cert2.jpg', id: 2, category: 'Grocery', phone: '8-800-222-22-22', favorite: false, products: [
                    { title: 'White Bread', img: 'bread.jpg', price: '60', value: 'piece', ordered: false, qty: 1, total: 60, category: 'Bread', fat: 11, calories: 66, carbs: 22, iron: 44, protein: 11, delivery: 2, minvalue: 20 },
                    { title: 'Black Bread', img: 'bread.jpg', price: '50', value: 'piece', ordered: false, qty: 1, total: 50, category: 'Bread', fat: 55, calories: 77, carbs: 22, iron: 400, protein: 44, delivery: 2, minvalue: 20 },
                    { title: 'Biscuit 1', img: 'bulochka.jpg', price: '70', value: 'piece', ordered: false, qty: 1, total: 70, category: 'Biscuit', fat: 11, calories: 414, carbs: 515, iron: 400, protein: 500, delivery: 3, minvalue: 30 },
                    { title: 'Biscuit 2', img: 'bulochka.jpg', price: '100', value: 'piece', ordered: false, qty: 1, total: 100, category: 'Biscuit', fat: 626, calories: 634, carbs: 323, iron: 11, protein: 33, delivery: 3, minvalue: 30 },
                    { title: 'Honey-cake 1', img: 'pryanik.jpg', price: '100', value: 'piece', ordered: false, qty: 1, total: 100, category: 'Honey-cake', fat: 100, calories: 444, carbs: 263, iron: 236, protein: 312, delivery: 1, minvalue: 20 },
                    { title: 'Honey-cake 2', img: 'pryanik.jpg', price: '110', value: 'piece', ordered: false, qty: 1, total: 110, category: 'Honey-cake', fat: 134, calories: 34, carbs: 32, iron: 568, protein: 5626, delivery: 1, minvalue: 20 },
                ] },
            { name: 'Milk products', about: 'Supplier 3 Info', logo: 'domik.jpg', id: 3, category: 'Milk', phone: '8-800-333-33-33', favorite: false, },
            { name: 'Meat Products', about: 'Supplier 4 Info', logo: 'myasnitskiy.jpg', id: 4, category: 'Meat', phone: '8-800-444-44-44', favorite: false, },
            { name: 'Bread Products', about: 'Supplier 5 Info', logo: 'face-logo.png', id: 5, category: 'Bread', phone: '8-800-555-55-55', favorite: false, },
            { name: 'Cookies', about: 'Supplier 6 Info', logo: 'face-logo.png', id: 6, category: 'Milk', phone: '8-800-666-66-66', favorite: false, },
            { name: 'Another Meat Products', about: 'Supplier 7 Info', logo: 'face-logo.png', id: 7, category: 'Meat', phone: '8-800-777-77-77', favorite: false, },
            { name: 'Another Bread Products', about: 'Supplier 8 Info', logo: 'face-logo.png', id: 8, category: 'Bread', phone: '8-800-888-88-88', favorite: false, },
            { name: 'Another Meat Products 2', about: 'Supplier 9 Info', logo: 'face-logo.png', id: 9, category: 'Meat', phone: '8-800-100-10-10', favorite: false, },
            { name: 'Another Bread Products 2', about: 'Supplier 10 Info', logo: 'face-logo.png', id: 10, category: 'Bread', phone: '8-800-101-01-01', favorite: false, },
            { name: 'Milk products 2', about: 'Supplier 11 Info', logo: 'face-logo.png', id: 11, category: 'Milk', phone: '8-800-334-55-22', favorite: false, },
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
    getters,
    mutations,
    actions
});

export  default store;