
export default {
    SET_HEADER_TEXT({commit}, text) {
        commit('SET_HEADER', text);
    },
    FILTER_SELLERS({commit}, category) {
        commit('FILTER', category);
    },
    SET_SELLER_INDEX({commit}, index) {
        commit('SET_INDEX', index);
    },
    SET_SELLER_TO_FAV({commit}, index)  {
        commit('SET_FAV', index);
    },
    ADD_TO_CART({commit}, products) {
        commit('ADD_TO_CART', products);
    },
    SET_ORDER_LIST({commit}, {product_index, sellerIndex}) {
        commit('SET_ORDER_LIST', {product_index, sellerIndex});
    },
    REMOVE_FROM_CART({commit}, index) {
        commit('REMOVE_ITEM', index);
    },
    INCREMENT_PRODUCT_QTY({commit}, index) {
        commit('PLUS_QTY', index);
    },
    DECREMENT_PRODUCT_QTY({commit}, index) {
        commit('MINUS_QTY', index);
    },
    CHECKOUT({commit}) {
        commit('CART_CHECKOUT');
    },
    HIDE_HEADER({commit}) {
        commit('HIDE_HEAD');
    },
    SHOW_HEADER({commit}) {
        commit('SHOW_HEAD');
    },
    SUCCESS_AUTH({commit}, user) {
        commit('AUTH', user);
    },
    SUCCESS_REGISTRATION({commit}) {
        commit('SUCCESS_REGISTRATION');
    },
    REGISTRATION({commit}, regData) {
        commit('REGISTER', regData);
    },
    EDIT_PROFILE({commit}, userData) {
        commit('EDIT_PROFILE_INFO', userData);
    },
    SET_PREFERENCES_CHECKBOXES({commit}, index) {
        commit('SET_CHECKBOX', index);
    },
}