import Vue from 'vue';
import Router from 'vue-router';
import store from '../store/store.js'

import aLoginPage from '@/components/a-login-page'
import aMainPage from '@/components/a-main-page'
import aSellersPage from '@/components/sellers/a-sellers-page'
import aSellerCatalog from '@/components/sellers/a-seller-catalog'
import aCustomerFavorites from '@/components/sellers/a-customer-favorites'
import aOrderList from '@/components/cart/a-order-list'
import aAboutPage from '@/components/a-about-page'
import aSettingsPage from '@/components/settings/a-settings-page'
import aProfilePage from '@/components/profile/a-profile-page'

Vue.use(Router);

let router = new Router ({
        mode: 'history',
        routes: [
            {
                path: '/login',
                name: 'login',
                component: aLoginPage
            },
            {
                path: '/home',
                name: 'Home',
                component: aMainPage,
            },
            {
                path: '/profile',
                name: 'Profile',
                component: aProfilePage
            },
            {
                path: '/sellers-list',
                name: 'sellersList',
                component: aSellersPage
            },
            {
                path: '/seller-catalog',
                name: 'catalog',
                component: aSellerCatalog,
            },
            {
                path: '/customer-cabinet',
                name: 'CustomerFavorites',
                component: aCustomerFavorites
            },
            {
                path: '/customer-order-list',
                name: 'CustomerOrderList',
                component: aOrderList
            },
            {
                path: '/about',
                name: 'About',
                component: aAboutPage
            },
            {
                path: '/settings',
                name: 'Settings',
                component: aSettingsPage
            }
        ]
});

router.beforeEach((to, from, next) => {
    if (to.fullPath !== '/login') {
        if (!store.state.isRegistered && !store.state.isAuth) {
            next('/login');
        }
    }
    next();
});

export default router;