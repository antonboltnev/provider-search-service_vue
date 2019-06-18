import Vue from 'vue';
import Router from 'vue-router';
import store from '../store/store.js'

import aLoginPage from '@/components/a-login-page'
import aMainPage from '@/components/a-main-page'
import aSellersPage from '@/components/a-sellers-page'
import aSellerCatalog from '@/components/a-seller-catalog'
import aCustomerCabinet from '@/components/a-customer-cabinet'
import aOrderList from '@/components/a-order-list'
import aAboutPage from '@/components/a-about-page'
import aSettingsPage from '@/components/a-settings-page'
import aProfilePage from '@/components/a-profile-page'

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
                name: 'CustomerCabinet',
                component: aCustomerCabinet
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