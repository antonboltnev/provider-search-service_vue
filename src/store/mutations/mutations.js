import router from '../../router/router.js'

export default {
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
        return new Promise(function (resolve) {
                state.isAuth = true;
                state.users.push(user);
                return resolve();
        })
        .then(() => {
            setTimeout(function () {
                router.push('/home');
            }, 1500);
        })
    },
    REGISTER: (state, regData) => {
        return new Promise(function (resolve) {
            state.users.slice(0, state.users.length);
            resolve();
        })
        .then(() => {
            state.users.push(regData);
        });
    },
    SUCCESS_REGISTRATION: (state) => {
        return new Promise(function (resolve) {
            state.isRegistered = true;
            resolve();
        })
        .then(() =>{
            setTimeout(function () {
                router.push('/home');
            }, 1500);
        })
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
}