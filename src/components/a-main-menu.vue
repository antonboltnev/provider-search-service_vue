<template>
    <ul class="a-main-menu shadow-border bg-color2">
        <li>
          <router-link to="/">
            <div class="menu_a" @click="mainPageClick">
              <icon name="home"></icon>
                <span>Главная</span>
            </div>
          </router-link>
        </li>
        <li><router-link to="/">
          <div class="menu_a" @click="mainPageClick">
            <icon name="envelope"></icon>
              <span>Сообщения</span>
          </div>
          </router-link>
        </li>
        <li>
          <router-link to="/customer-cabinet">
            <div class="menu_a" @click="favoritePageClick">
              <icon name="heart"></icon>
                <span>Избранное</span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/customer-order-list">
            <div class="menu_a" @click="cartPageClick">
              <icon name="cart-arrow-down"></icon>
              <span>Заказы</span>
                <span class="order_counter bg-color"
                    v-if="this.$store.state.cart.length"
                >{{ orderCounter }}</span>
            </div>
          </router-link>
        </li>
    </ul>
</template>

<script>
import Icon from 'vue-awesome/components/Icon'

    export default {
        name: "a-main-menu",
        components: {
          Icon
        },
        data() {
           return {
           }
        },
        computed: {
            orderCounter() {
                    return this.$store.state.cart.length;
            }
        },

        methods: {
            mainPageClick() {
                this.$store.dispatch('SET_HEADER_TEXT', 'Каталог поставщиков');
            },
            favoritePageClick() {
                this.$store.dispatch('SET_HEADER_TEXT', 'Мои избранные поставщики');
            },
            cartPageClick() {
                this.$store.dispatch('SET_HEADER_TEXT', 'Мои активные заказы');
            }
        },
    }
</script>

<style scoped>
    .a-main-menu {
        margin: 0 auto;
        max-width: 1200px;
        display: flex;
        width: 100%;
        justify-content: space-around;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 0 5px 3px 5px;
    }

    .a-main-menu li {
        position: relative;
        list-style: none;
        padding: 10px 10px;
        border-radius: 3px;
        transition: .2s;
        cursor: pointer;
    }

    .a-main-menu li:active {
        box-shadow: inset 0 1px 15px 2px #d2d2d2;
        color: #757575;
        transition: .2s;
    }

    .a-main-menu a {
        text-decoration: none;
        color: #797979;
    }

    .a-main-menu a svg {
        width: 30px;
        height: 30px;
        fill: #797979;
    }

    .menu_a {
        font-size: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .order_counter {
        position: absolute;
        top: 2px;
        right: 2px;
        padding: 4px 8px;
        border-radius: 50%;
        background: #5bd61e;
        color: #fff;
        font-size: 13px;
    }
</style>
