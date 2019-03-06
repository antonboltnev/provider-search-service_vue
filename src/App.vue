<template>
    <div id="app" :class="{ 'margin_bottom' : !toggleHeaderVisibility }">
        <a-header class="fixed-top bg-color2 shadow-border"/>
        <a-main-menu/>
        <keep-alive>
            <transition name="fade">
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

    import aHeader from '@/components/a-header'
    import aMainMenu from '@/components/a-main-menu'
    import aMainPage from '@/components/a-main-page'
    import aSellersPage from '@/components/a-sellers-page'
    import aSellerCatalog from '@/components/a-seller-catalog'
    import aCustomerCabinet from '@/components/a-customer-cabinet'
    import aOrderList from '@/components/a-order-list'
    import aAboutPage from '@/components/a-about-page'
    import aSettingsPage from '@/components/a-settings-page'



    Vue.use(Router);

    const router = new Router({
        routes: [
            {
                path: '/home',
                name: 'Home',
                component: aMainPage
            },
            {
                path: '/sellers-list',
                name: 'SellersList',
                component: aSellersPage
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

    export default {
        name: 'app',
        router,
        components: {
            aHeader,
            aMainPage,
            aSellersPage,
            aSellerCatalog,
            aMainMenu,
            aCustomerCabinet,
            aAboutPage,
            aSettingsPage
        },

        computed: {
            toggleHeaderVisibility() {
                return this.$store.state.isHeaderVisible
            }
        },

        watch: {
            $route() {
                if ( this.$route.path === '/home' ) {
                    this.$store.dispatch('HIDE_HEADER');
                } else {
                    this.$store.dispatch('SHOW_HEADER');
                }
            },
        },

        created() {
            if ( this.$route.path === '/home' ) {
                this.$store.dispatch('HIDE_HEADER');
            } else {
                this.$store.dispatch('SHOW_HEADER');
            }
        }
    }
</script>

<style>
    #app.margin_bottom {
        margin-bottom: 0;
        height: 100%;
        padding: 0;
    }
</style>
