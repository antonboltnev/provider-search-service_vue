<template>
    <div class="a-main-page">
        <div class="a-main-page-nav-blocks">
            <router-link to="/sellers-list" class="text-color1 bg-color-fff">
                <div @click="sellersPageClick">
                    <icon name="cubes"></icon>
                    <div class="nav-block">Каталог поставщиков</div>
                </div>
            </router-link>
            <router-link to="/customer-cabinet" class="bg-color2 text-color3">
                <icon name="heart"></icon>
                <div class="nav-block">Мои избранные поставщики</div>
            </router-link>
            <router-link to="/customer-order-list" class="bg-color2 text-color3">
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
            <router-link to="/home" class="text-color1 bg-color-fff">
                <icon name="envelope"></icon>
                <div class="nav-block">Мои сообщения</div>
            </router-link>
            <router-link to="/settings" class="text-color1 bg-color-fff">
                <div @click="settingsPageClick">
                    <icon name="cogs"></icon>
                    <div class="nav-block">Настройки</div>
                </div>
            </router-link>
            <router-link to="/about" class="bg-color2 text-color3">
                <div @click="aboutPageClick">
                    <icon name="info-circle"></icon>
                    <div class="nav-block">О сервисе</div>
                </div>
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
            aboutPageClick() {
                this.$store.dispatch('SET_HEADER_TEXT', 'О ресурсе');
            },
            settingsPageClick() {
                this.$store.dispatch('SET_HEADER_TEXT', 'Настройки');
            }
        },
    }
</script>

<style scoped>
    .a-main-page {
        height: 100%;
        display: flex;
        background: url("../../public/img/bg_blur.jpg") no-repeat center;
        background-size: cover;
    }

    .a-main-page-nav-blocks {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin: 0 auto;
        width: 100%;
    }

    .a-main-page-nav-blocks a {
        width: 50%;
        height: 33.3%;
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

    .a-main-page-nav-blocks a:nth-child(2) svg, .a-main-page-nav-blocks a:nth-child(3) svg, .a-main-page-nav-blocks a:nth-child(6) svg {
        fill: #fff;
    }

    .a-main-page-nav-blocks a:nth-child(1) svg, .a-main-page-nav-blocks a:nth-child(4) svg, .a-main-page-nav-blocks a:nth-child(5) svg {
        fill: #8190b0;
    }

    .order_counter {
        right: 5%;
        top: -5px;
    }

    @media (min-width: 769px) {
        .a-main-page {
            position: absolute;
            left: 0;
            right: 0;
        }

        .a-main-page-nav-blocks a {
            width: 30%;
            border-radius: 5px;
        }
    }
</style>