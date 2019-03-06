<template>
    <div class="a-main-page">
        <div class="a-main-page-nav-blocks">
            <router-link to="/sellers-list">
                <div @click="sellersPageClick">
                    <icon name="cubes"></icon>
                    <div class="nav-block">Каталог поставщиков</div>
                </div>
            </router-link>
            <router-link to="/customer-cabinet">
                <icon name="heart"></icon>
                <div class="nav-block">Мои избранные поставщики</div>
            </router-link>
            <router-link to="/customer-order-list">
                <div class="svg_wrapper">
                    <icon name="cart-arrow-down"></icon>
                    <div class="nav-block">Мои заказы
                        <span class="order_counter bg-color"
                              v-if="this.$store.state.cart.length"
                        >{{ orderCounter }}
                    </span>
                    </div>
                </div>
            </router-link>
            <router-link to="/home">
                <icon name="envelope"></icon>
                <div class="nav-block">Мои сообщения</div>
            </router-link>
            <router-link to="/home">
                <icon name="cogs"></icon>
                <div class="nav-block">Настройки</div>
            </router-link>
            <router-link to="/home">
                <icon name="info-circle"></icon>
                <div class="nav-block">О сервисе</div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import Icon from 'vue-awesome/components/Icon'

    export default {
        name: "a-main-page",
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
            },
        },

        methods: {
            sellersPageClick() {
                this.$store.dispatch('SET_HEADER_TEXT', 'Поставщики');
            },
        },
    }
</script>

<style scoped>
    .a-main-page {
        height: 100%;
        display: flex;
    }

    .a-main-page-nav-blocks {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .a-main-page-nav-blocks a {
        width: 50%;
        height: 33%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .svg_wrapper {
        position: relative;
    }

    .a-main-page-nav-blocks a svg {
        width: 50px;
        height: 50px;
        fill: #b3b3b3;
        margin-bottom: 20px;
    }

    .a-main-page-nav-blocks a:nth-child(2n+1) {
        box-shadow: 1px 0 0 0 #eeeeee;
        border-bottom: solid 1px #eeeeee;
    }

    .a-main-page-nav-blocks a:nth-child(2n) {
        border-bottom: solid 1px #eeeeee;
    }

    .a-main-page-nav-blocks a:last-of-type {
        border-bottom: 0;
    }

    .a-main-page-nav-blocks a:nth-child(5) {
        border-bottom: 0;
    }

    .order_counter {
        right: 5%;
        top: -5px;
    }
</style>