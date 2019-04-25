<template>
    <nav>
        <ul class="a-main-menu shadow-border bg-color fixed-bottom" v-if="toggleHeaderVisibility">
            <li>
                <router-link to="/home">
                    <div class="menu_a" @click="mainPageClick">
                        <icon name="home"></icon>
                        <span>Home</span>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link to="/customer-cabinet">
                    <div class="menu_a" @click="favoritePageClick">
                        <icon name="heart"></icon>
                        <span>Favorites</span>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link to="/customer-order-list">
                    <div class="menu_a" @click="cartPageClick">
                        <icon name="cart-arrow-down"></icon>
                        <span>Orders</span>
                        <span class="order_counter bg-color"
                              v-if="this.$store.state.cart.length"
                        >{{ orderCounter }}</span>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link to="/profile">
                    <div class="menu_a" @click="aboutPageClick">
                        <icon name="user"></icon>
                        <span class="no-wrap">Profile</span>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link to="/settings">
                    <div class="menu_a" @click="settingsPageClick">
                        <icon name="cog"></icon>
                        <span>Preferences</span>
                    </div>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
import Icon from 'vue-awesome/components/Icon'

    export default {
        name: "a-main-menu",
        components: {
          Icon
        },
        computed: {
            orderCounter() {
                    return this.$store.state.cart.length;
            },

            toggleHeaderVisibility() {
                return this.$store.state.isHeaderVisible
            }
        },

        methods: {
            mainPageClick() {
                this.$store.dispatch('SET_HEADER_TEXT', 'Home');
            },
            favoritePageClick() {
                this.$store.dispatch('SET_HEADER_TEXT', 'My favorite providers');
            },
            cartPageClick() {
                this.$store.dispatch('SET_HEADER_TEXT', 'My orders');
            },
            aboutPageClick() {
                this.$store.dispatch('SET_HEADER_TEXT', 'About');
            },
            settingsPageClick() {
                this.$store.dispatch('SET_HEADER_TEXT', 'Preferences');
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
        padding: 0 5px 3px 5px;
    }

    .a-main-menu li {
        position: relative;
        list-style: none;
        padding: 10px 10px;
        border-radius: 3px;
        transition: .2s;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
    }

    .a-main-menu li:active {
        box-shadow: inset 0 1px 15px 2px #4c4c4c;
        transition: .2s;
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
