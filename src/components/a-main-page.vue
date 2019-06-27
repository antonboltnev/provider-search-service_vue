<template>
    <v-container fluid class="a-main-page">
        <v-layout class="a-main-page-nav-blocks wrap">
            <v-flex class="bg-color-fff" md6 xs6>
                <router-link  class="text-color5 flex align-center column" :to="{name: 'sellersList'}">
                    <div>
                        <v-icon>view_module</v-icon>
                        <div class="nav-block">Suppliers catalogue</div>
                    </div>
                </router-link>
            </v-flex>
            <v-flex md6 xs6>
                <router-link :to="{name: 'CustomerFavorites'}" class="text-color3 flex align-center column">
                    <div>
                        <v-icon color="#fff">favorite</v-icon>
                        <div class="nav-block">Favorites</div>
                    </div>
                </router-link>
            </v-flex>
            <v-flex md6 xs6>
                <router-link :to="{name: 'CustomerOrderList'}" class="text-color3 flex align-center column">
                    <div class="nav-block">
                        <v-icon color="#fff">shopping_cart</v-icon>
                        <div>My orders
                            <span class="order_counter"
                                  v-if="this.$store.state.cart.length"
                            >{{ orderCounter }}
                            </span>
                        </div>
                    </div>
                </router-link>
            </v-flex>
            <v-flex class="bg-color-fff" md6 xs6>
                <router-link :to="{name: 'Profile'}" class="text-color5 flex align-center column">
                    <div>
                        <v-icon>person</v-icon>
                        <div class="nav-block">Profile</div>
                    </div>
                </router-link>
            </v-flex>
            <v-flex class="bg-color-fff" md6 xs6>
                <router-link :to="{name: 'Settings'}" class="text-color5 flex align-center column">
                    <div @click="settingsPageClick">
                        <v-icon>settings</v-icon>
                        <div class="nav-block">Preferences</div>
                    </div>
                </router-link>
            </v-flex>
            <v-flex md6 xs6>
                <router-link :to="{name: 'About'}" class="text-color3 flex align-center column">
                    <div @click="aboutPageClick">
                        <v-icon color="#fff">info</v-icon>
                        <div class="nav-block">About</div>
                    </div>
                </router-link>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import Icon from 'vue-awesome/components/Icon'
    import {mapActions} from 'vuex'

    export default {
        name: "a-main-page",
        components: {
            Icon
        },

        computed: {
            orderCounter() {
                return this.$store.state.cart.length;
            },
        },

        methods: {
            ...mapActions([
                'SET_HEADER_TEXT'
            ]),
            sellersPageClick() {
                this.SET_HEADER_TEXT('Suppliers');
            },
            aboutPageClick() {
                this.SET_HEADER_TEXT('About');
            },
            settingsPageClick() {
                this.SET_HEADER_TEXT('Preferences');
            }
        },
    }
</script>

<style scoped>
    .order_counter {
        right: -6px;
        top: -7px;
    }
</style>
<style>
    .container.a-main-page {
        padding: 0;
    }

    .a-main-page, .a-main-page-nav-blocks {
        height: 100%;
    }

    .a-main-page-nav-blocks .flex {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .a-main-page-nav-blocks a.bg-color2 {
        background: transparent;
    }

    .nav-block {
        position: relative;
    }

    .a-main-page-nav-blocks a .v-icon {
        color: #41b883;
        font-size: 4em;
        margin-bottom: 20px;
    }
</style>
