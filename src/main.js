import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        pageName: '',
        isHeaderVisible: true,
        sellers: [
            { name: 'Мираторг', about: 'Информация о поставщике 1', logo: 'miratorg.jpg', docs: 'cert1.jpg', id: 1, category: 'Мясная продукция', phone: '8-800-111-11-11', favorite: false, products: [
                    { title: 'Мясо Коровки', img: 'meat.png', price: '1000', value: 'кг', ordered: false, qty: 1, total: 1000, category: 'Мясо' },
                    { title: 'Мясо Барашка', img: 'meat.png', price: '800', value: 'кг', ordered: false, qty: 1, total: 800, category: 'Мясо' },
                    { title: 'Сосиски Такие', img: 'sosiska.jpg', price: '400', value: 'кг', ordered: false, qty: 1, total: 400, category: 'Сосиски' },
                    { title: 'Сосиски Другие', img: 'sosiska.jpg', price: '500', value: 'кг', ordered: false, qty: 1, total: 500, category: 'Сосиски' },
                    { title: 'Колбаса для Богатых', img: 'kolbasa.jpg', price: '1000', value: 'кг', ordered: false, qty: 1, total: 1000, category: 'Колбаска' },
                    { title: 'Колбаса для Бедных', img: 'kolbasa.jpg', price: '700', value: 'кг', ordered: false, qty: 1, total: 700, category: 'Колбаска' },
                ] },
            { name: '22 Хлебзавод', about: 'Информация о поставщике 2', logo: '2hleb.jpg', docs: 'cert2.jpg', id: 2, category: 'Хлебная продукция', phone: '8-800-222-22-22', favorite: false, products: [
                    { title: 'Хлеб Белий', img: 'bread.jpg', price: '60', value: 'шт', ordered: false, qty: 1, total: 60, category: 'Хлебушек'  },
                    { title: 'Хлеб Черний', img: 'bread.jpg', price: '50', value: 'шт', ordered: false, qty: 1, total: 50, category: 'Хлебушек'  },
                    { title: 'Булочка Вкусная', img: 'bulochka.jpg', price: '70', value: 'шт', ordered: false, qty: 1, total: 70, category: 'Булочки'  },
                    { title: 'Булочка очень Вкусная', img: 'bulochka.jpg', price: '100', value: 'шт', ordered: false, qty: 1, total: 100, category: 'Булочки'  },
                    { title: 'Пряник Такой', img: 'pryanik.jpg', price: '100', value: 'шт', ordered: false, qty: 1, total: 100, category: 'Прянички'  },
                    { title: 'Пряник Другой', img: 'pryanik.jpg', price: '110', value: 'шт', ordered: false, qty: 1, total: 110, category: 'Прянички'  },
                ] },
            { name: 'Домик в деревне', about: 'Информация о поставщике 3', logo: 'domik.jpg', id: 3, category: 'Молочная продукция', phone: '8-800-333-33-33', favorite: false, },
            { name: 'Мясницкий ряд', about: 'Информация о поставщике 4', logo: 'myasnitskiy.jpg', id: 4, category: 'Мясная продукция', phone: '8-800-444-44-44', favorite: false, },
            { name: 'Черемушки', about: 'Информация о поставщике 5', logo: 'face-logo.png', id: 5, category: 'Хлебная продукция', phone: '8-800-555-55-55', favorite: false, },
            { name: 'Любятово', about: 'Информация о поставщике 6', logo: 'face-logo.png', id: 6, category: 'Молочная продукция', phone: '8-800-666-66-66', favorite: false, },
            { name: 'Рублевский МК', about: 'Информация о поставщике 7', logo: 'face-logo.png', id: 7, category: 'Мясная продукция', phone: '8-800-777-77-77', favorite: false, },
            { name: 'МосХлебТорг', about: 'Информация о поставщике 8', logo: 'face-logo.png', id: 8, category: 'Хлебная продукция', phone: '8-800-888-88-88', favorite: false, },
            { name: 'Микоян', about: 'Информация о поставщике 9', logo: 'face-logo.png', id: 9, category: 'Мясная продукция', phone: '8-800-100-10-10', favorite: false, },
            { name: '28 Хлебзавод', about: 'Информация о поставщике 10', logo: 'face-logo.png', id: 10, category: 'Хлебная продукция', phone: '8-800-101-01-01', favorite: false, },
            { name: 'Веселый молочник', about: 'Информация о поставщике 11', logo: 'face-logo.png', id: 11, category: 'Молочная продукция', phone: '8-800-334-55-22', favorite: false, },
        ],
        productCategories: [
            { name: 'Все категории', },
            { name: 'Мясная продукция' },
            { name: 'Хлебная продукция' },
            { name: 'Молочная продукция', },

        ],
        selectedSeller: 0,
        cart: [],
        order: [],
        users: [
            { login: 'anton', password: '123123' },
            { login: 'sergey', password: '321321' },
        ],
        isAuth: false,
    },
    getters: {
        SELLERS: state => {
            return state.sellers;
        },
    },
    mutations: {
        SET_HEADER: ( state, payload ) => {
            state.pageName = payload;
        },
        FILTER: ( state, payload ) => {
            state.sellers = state.sellers.filter(function (i) {
                return i.category.match(payload);
            });
        },
        SET_INDEX: ( state, payload ) => {
            state.selectedSeller = payload;
        },
        SET_FAV: ( state, payload ) => {
            state.sellers[payload].favorite = !state.sellers[payload].favorite;
        },
        ADD_TO_CART: ( state, products ) => {
            if ( state.cart.includes( products ) ) {
                return false;
            } else {
                state.cart.push(products);
            }
        },
        SET_ORDER_LIST: ( state, {productIndex, sellerIndex} ) => {
            state.sellers[sellerIndex].products[productIndex].ordered = !state.sellers[sellerIndex].products[productIndex].ordered;
        },
        REMOVE_ITEM: ( state, payload ) => {
           state.cart[payload].qty = 0;
           state.cart.splice(payload, 1);
        },
        PLUS_QTY: ( state, payload ) => {
            state.cart[payload].qty++;
            state.cart[payload].total = state.cart[payload].qty * state.cart[payload].price;
        },
        MINUS_QTY: ( state, payload ) => {
            if ( state.cart[payload].qty > 1 ) {
                state.cart[payload].qty--;
                state.cart[payload].total -= state.cart[payload].price;
            } else {
                return false;
            }
        },
        CART_CHECKOUT: ( state, payload ) => {
            state.order.push(payload);
            state.cart.splice(0, state.cart.length);
        },
        HIDE_HEAD: ( state ) => {
            state.isHeaderVisible = false;
        },
        SHOW_HEAD: ( state ) => {
            state.isHeaderVisible = true;
        },
        AUTH: ( state ) => {
            state.isAuth = true;
        }
    },
    actions: {
        SET_HEADER_TEXT: ( context, payload ) => {
            context.commit( 'SET_HEADER', payload );
        },
        FILTER_SELLERS: ( context, payload ) => {
            context.commit( 'FILTER', payload );
        },
        SET_SELLER_INDEX: ( context, payload ) => {
            context.commit('SET_INDEX', payload);
        },
        SET_SELLER_TO_FAV: ( context, payload ) => {
            context.commit('SET_FAV', payload);
        },
        ADD_TO_CART: ( context, products ) => {
           context.commit('ADD_TO_CART', products );
        },
        SET_ORDER_LIST: ( context, {productIndex, sellerIndex} ) => {
            context.commit('SET_ORDER_LIST', {productIndex, sellerIndex});
        },
        REMOVE_FROM_CART: ( context, payload ) => {
            context.commit( 'REMOVE_ITEM', payload );
        },
        INCREMENT_PRODUCT_QTY: ( context, payload ) => {
           context.commit( 'PLUS_QTY', payload );
        },
        DECREMENT_PRODUCT_QTY: ( context, payload ) => {
            context.commit( 'MINUS_QTY', payload );
        },
        CHECKOUT: ( context, payload ) => {
           context.commit( 'CART_CHECKOUT', payload );
        },
        HIDE_HEADER: ( context) => {
            context.commit( 'HIDE_HEAD' );
        },
        SHOW_HEADER: ( context) => {
            context.commit( 'SHOW_HEAD' );
        },
        SUCCESS_AUTH: ( context ) => {
            context.commit( 'AUTH' );
        }
    }
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
    store,
}).$mount('#app');
