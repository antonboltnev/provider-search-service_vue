<template>
    <div id="app">
        <a-main-menu/>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Router  from 'vue-router';

    import 'vue-awesome/icons'

    import aMainMenu from '@/components/a-main-menu'
    import aMainPage from '@/components/a-main-page'
    import aSellerCatalog from '@/components/a-seller-catalog'
    import aCustomerCabinet from '@/components/a-customer-cabinet'



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
    * {
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 15px auto 60px auto;
        padding: 0 10px;
    }
</style>
