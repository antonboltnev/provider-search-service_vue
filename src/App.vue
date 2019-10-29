<template>
    <v-container id="app" :class="{ 'margin_bottom' : !toggleHeaderVisibility }">
        <a-header class="fixed-top bg-color2 elevation-2"/>
        <a-main-menu/>
        <keep-alive>
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </keep-alive>
    </v-container>
</template>

<script>
    import router from './router/router.js'
    import 'vue-awesome/icons'
    import {mapActions} from 'vuex'

    import aHeader from './components/a-header'
    import aMainMenu from './components/menu/a-main-menu'



    export default {
        name: 'app',
        router,
        components: {
            aHeader,
            aMainMenu,
        },

        computed: {
            toggleHeaderVisibility() {
                return this.$store.state.isHeaderVisible
            }
        },

        methods: {
            ...mapActions([
                'GET_SELLERS_LIST_FROM_API'
            ]),
           hideHeader() {
               if ( this.$route.path === '/login' ) {
                   this.$store.dispatch('HIDE_HEADER');
               } else {
                   this.$store.dispatch('SHOW_HEADER');
               }
           }
        },
        //
        watch: {
            $route() {
                this.hideHeader();
            },
        },

        created() {
            this.hideHeader();
            this.GET_SELLERS_LIST_FROM_API();
        },
        mounted() {
            this.hideHeader();
            this.GET_SELLERS_LIST_FROM_API();
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
