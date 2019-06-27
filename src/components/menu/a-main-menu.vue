<template>
    <v-toolbar class="fixed-bottom" v-if="toggleHeaderVisibility">
        <ul class="a-main-menu elevation-2 bg-color">
            <li>
                <router-link :to="{name: 'Home'}">
                    <div class="menu_a" @click="mainPageClick">
                        <v-icon>home</v-icon>
                        <span>Home</span>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'sellersList'}">
                    <div class="menu_a" @click="catalogPageClick">
                        <v-icon>view_module</v-icon>
                        <span>Suppliers</span>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'CustomerFavorites'}">
                    <div class="menu_a" @click="favoritePageClick">
                        <v-icon>favorite</v-icon>
                        <span>Favorites</span>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'CustomerOrderList'}">
                    <div class="menu_a" @click="cartPageClick">
                        <v-icon>shopping_cart</v-icon>
                        <span>Orders</span>
                        <span class="order_counter"
                              v-if="this.$store.state.cart.length"
                        >{{ orderCounter }}</span>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'Profile'}">
                    <div class="menu_a" @click="aboutPageClick">
                        <v-icon>person</v-icon>
                        <span class="no-wrap">Profile</span>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'Settings'}">
                    <div class="menu_a" @click="settingsPageClick">
                        <v-icon>settings</v-icon>
                        <span>Preferences</span>
                    </div>
                </router-link>
            </li>
        </ul>
    </v-toolbar>
</template>

<script>
import {mapActions} from 'vuex'

    export default {
        name: "a-main-menu",
        computed: {
            orderCounter() {
                    return this.$store.state.cart.length;
            },

            toggleHeaderVisibility() {
                return this.$store.state.isHeaderVisible
            }
        },

        methods: {
            ...mapActions([
                    'SET_HEADER_TEXT'
            ]),
            mainPageClick() {
                this.SET_HEADER_TEXT('Home');
            },
            catalogPageClick() {
                this.SET_HEADER_TEXT('Suppliers');
            },
            favoritePageClick() {
                this.SET_HEADER_TEXT('My favorite Suppliers');
            },
            cartPageClick() {
                this.SET_HEADER_TEXT('My orders');
            },
            aboutPageClick() {
                this.SET_HEADER_TEXT('About');
            },
            settingsPageClick() {
                this.SET_HEADER_TEXT('Preferences');
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
    .a-main-menu {
        display: flex;
        justify-content: space-around;
        padding: 0 5px;
        width: 100%;
    }

    .a-main-menu li {
        position: relative;
        bottom: 5px;
        list-style: none;
        padding: 20px 0;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
    }

    .a-main-menu a {
        text-decoration: none;
    }

    .a-main-menu a svg {
        width: 25px;
        height: 25px;
    }

    .menu_a {
        font-size: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .no-wrap {
      white-space: nowrap;
    }
</style>
