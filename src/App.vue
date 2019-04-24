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
    import '../public/styles.css'
    import {router} from './router/router.js'
    import 'vue-awesome/icons'

    import aLoginPage from '@/components/a-login-page'
    import aHeader from '@/components/a-header'
    import aMainMenu from '@/components/a-main-menu'
    import aMainPage from '@/components/a-main-page'
    import aSellersPage from '@/components/a-sellers-page'
    import aSellerCatalog from '@/components/a-seller-catalog'
    import aCustomerCabinet from '@/components/a-customer-cabinet'
    import aOrderList from '@/components/a-order-list'
    import aAboutPage from '@/components/a-about-page'
    import aSettingsPage from '@/components/a-settings-page'
    import aProfilePage from '@/components/a-profile-page'



    export default {
        name: 'app',
        router,
        components: {
            aLoginPage,
            aHeader,
            aMainPage,
            aSellersPage,
            aSellerCatalog,
            aMainMenu,
            aCustomerCabinet,
            aAboutPage,
            aSettingsPage,
            aProfilePage
        },

        computed: {
            toggleHeaderVisibility() {
                return this.$store.state.isHeaderVisible
            }
        },

        methods: {
           hideHeader() {
               if ( this.$route.path === '/login' ) {
                   this.$store.dispatch('HIDE_HEADER');
               } else {
                   this.$store.dispatch('SHOW_HEADER');
               }
           }
        },

        watch: {
            $route() {
                this.hideHeader();
            },
        },

        created() {
            this.$router.push('/login');
            if ( localStorage.getItem("user") ) {
                this.$store.dispatch( 'USER_FROM_STORAGE', JSON.parse(localStorage.getItem("user")) );
                console.log(JSON.parse(localStorage.getItem("user")));
            }

            this.hideHeader();
        },
        mounted() {
            this.hideHeader();
        }
    }
</script>

<style>
    #app.margin_bottom {
        margin-bottom: 0;
        height: 100%;
        padding: 0;
        background: url(../public/img/groccery-bg.jpg) no-repeat center;
        background-size: cover;
        max-width: 100%;
    }
</style>
