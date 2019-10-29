export default {
  SELLERS: state => {
    return state.sellers;
  },
  ERROR_MSGS: state => {
    return state.errorMessages;
  },
  IS_REGISTERED: state => {
    return state.isRegistered;
  },
  IS_AUTH: state => {
    return state.isAuth;
  },
  IS_HEADER_VISIBLE: state => {
    return state.isHeaderVisible;
  },
  PAGE_TITLE: state => {
    return state.pageName;
  },
  CART: state => {
    return state.cart
  },
  USERS: state => {
    return state.users;
  },
  SELECTED_SELLER: state => {
    return state.selectedSeller;
  },
  PRODUCT_CATEGORIES: state => {
    return state.productCategories;
  },
  PREFERENCES_CHECKBOXES: state => {
    return state.preferencesCheckboxes;
  }
}