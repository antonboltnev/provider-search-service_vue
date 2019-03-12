<template>
    <div class="a-sellers-item shadow-border">
        <router-link to="/seller-catalog">
            <div class="item_logo" @click="setSellerIndex">
                <img :src="sellerImage" alt="">
            </div>
            <div class="item_title" @click="setSellerIndex">
                <router-link to="/seller-catalog">{{ sellers_data.name }}</router-link>
            </div>
        </router-link>
        <!--<div class="item_info">-->
            <!--<router-link to="/seller-catalog">-->
                <!--<icon name="info"></icon>-->
            <!--</router-link>-->
        <!--</div>-->
        <div class="item_category">{{ sellers_data.category }}</div>
        <div class="item_fav add"
             v-if="!sellers_data.favorite"
             @click="addToFavorite"
        ><icon name="heart"></icon>
        </div>
        <div class="item_fav added"
             v-if="sellers_data.favorite"
             @click="addToFavorite"
        ><icon name="heart" :class="{ 'fav_added': sellers_data.favorite}"></icon>
        </div>
        <div class="item_go-ro-catalog btn bg-color" @click="setSellerIndex">
            <router-link to="/seller-catalog">Каталог</router-link>
        </div>
    </div>
</template>

<script>
    import Icon from 'vue-awesome/components/Icon'

    export default {
        name: "a-sellers-item",
        components: {
            Icon
        },
        props: {
           sellers_data: {
               type: Object,
               default: {}
           },
        },
        data() {
            return {
            }
        },

        computed: {
            sellerImage() {
                return require('../../public/img/' + this.sellers_data.logo);
            }
        },

        methods: {
            addToFavorite() {
                let payload = this.sellers_data.id - 1;
                this.$emit('addToFavorite', payload);
            },

            setSellerIndex() {
                let payload = this.sellers_data.id - 1;
                this.$store.dispatch('SET_SELLER_INDEX', payload);
                this.$store.dispatch('SET_HEADER_TEXT', 'Продукция поставщика');
            },
        },
    }
</script>

<style scoped>
    .a-sellers-item {
        justify-content: space-around;
        align-items: center;
        display: flex;
        margin: 10px auto 20px auto;
    }

    .item_logo img {
        max-width: 70px;
    }

    .item_fav svg {
        width: 30px;
        height: 30px;
        fill: #fff;
        stroke: #000;
        stroke-width: 10px;
    }

    .item_fav.added svg {
        fill: #8190b0;
        stroke: #fff;
        stroke-width: 1px;
    }

    .a-sellers-item div {
        flex: 0 2 10%;
    }

    .a-sellers-item a {
        border: 0;
        max-width: 80px;
    }

    .item_title {
        font-weight: bold;
        font-size: 14px;
        color: #757575;
    }

    .item-btns-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .item_category, .item_fav.add, .item_fav.added {
        font-size: 10px;
    }

    .a-sellers-item div.item_fav.add, .a-sellers-item div.item_fav.added {
      min-width: 20%;
    }
</style>
