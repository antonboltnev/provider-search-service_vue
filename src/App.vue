<template>
    <div id="app">
        <a-main-menu/>
        <keep-alive>
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </keep-alive>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Router  from 'vue-router';
    import '../public/styles.css'

    import 'vue-awesome/icons'

    import aMainMenu from '@/components/a-main-menu'
    import aMainPage from '@/components/a-main-page'
    import aSellerCatalog from '@/components/a-seller-catalog'
    import aCustomerCabinet from '@/components/a-customer-cabinet'
    import aOrderList from '@/components/a-order-list'



    Vue.use(Router);

    const router = new Router({
        routes: [
            {
                path: '/',
                name: 'Home',
                component: aMainPage
            },
            {
                path: '/seller-catalog',
                name: 'Catalog',
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
        ] // сокращённая запись для `routes: routes`
    });

    export default {
        name: 'app',
        router,
        components: {
            aMainPage,
            aSellerCatalog,
            aMainMenu,
            aCustomerCabinet
        },
    }
</script>

<style>
</style>
