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
        <div class="item_category">{{ sellers_data.category }}</div>
        <v-btn flat icon v-if="!sellers_data.favorite">
            <v-icon class="item_fav add"
                    @click="addToFavorite"
                    color="#797979"
            >favorite
            </v-icon>
        </v-btn>
        <v-btn flat icon v-if="sellers_data.favorite">
            <v-icon class="item_fav added"
                    @click="addToFavorite"
                    color="#4e70b1"
            >favorite
            </v-icon>
        </v-btn>
        <v-btn class="item_go-ro-catalog" @click="setSellerIndex" dark color="#4e70b1" to="/seller-catalog">
            Catalogue
        </v-btn>
    </div>
</template>

<script>
    import Icon from 'vue-awesome/components/Icon'
    import {mapActions} from 'vuex'

    export default {
        name: "a-sellers-item",
        components: {
            Icon
        },
        props: {
           sellers_data: {
               type: Object,
               default() {}
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
            ...mapActions([
                'SET_SELLER_INDEX',
                'SET_HEADER_TEXT'
            ]),
            addToFavorite() {
                let payload = this.sellers_data.id - 1;
                this.$emit('addToFavorite', payload);
            },

            setSellerIndex() {
                let index = this.sellers_data.id - 1;
                this.SET_SELLER_INDEX(index);
                this.SET_HEADER_TEXT('Providers catalogue');
            },
        },
    }
</script>

<style>
    .a-sellers-item {
        justify-content: space-around;
        align-items: center;
        display: flex;
        margin: 10px auto 20px auto;
    }

    .item_logo img {
        max-width: 70px;
    }

    .v-icon.item_fav {
        font-size: 30px;
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

    .a-sellers-item div.item_fav.add, .a-sellers-item div.item_fav.added {
      min-width: 20%;
    }
</style>
