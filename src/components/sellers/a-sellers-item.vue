<template>
    <v-layout class="a-sellers-item elevation-3 justify-space-between">
        <v-flex>
            <router-link :to="{name: 'catalog'}">
                <div class="item_logo" @click="setSellerIndex">
                    <img :src="sellerImage" alt="">
                </div>
                <div class="item_title" @click="setSellerIndex">
                    <router-link :to="{name: 'catalog'}">{{ sellers_data.name }}</router-link>
                </div>
            </router-link>
        </v-flex>
        <v-flex class="item_category">{{ sellers_data.category }}</v-flex>
        <v-flex>
            <v-btn icon v-if="!sellers_data.favorite">
                <v-icon class="item_fav add"
                        @click="addToFavorite"
                        color="#cecece"
                >favorite
                </v-icon>
            </v-btn>
            <v-btn icon v-if="sellers_data.favorite">
                <v-icon class="item_fav added"
                        @click="addToFavorite"
                        color="#41b883"
                >favorite
                </v-icon>
            </v-btn>
        </v-flex>
        <v-flex @click="setSellerIndex">
            <v-btn class="item_go-ro-catalog bg-color2" dark :to="{name: 'catalog'}">Catalogue</v-btn>
        </v-flex>
    </v-layout>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "a-sellers-item",
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
                return require('../../../public/img/' + this.sellers_data.logo);
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
                this.$store.dispatch('SET_SELLER_INDEX', index);
                this.SET_HEADER_TEXT('Suppliers catalogue');
            },
        },
    }
</script>

<style>
    .a-sellers-item {
        justify-content: space-around;
        align-items: center;
        margin: 10px auto 20px auto;
        padding: 10px 0;
    }

    .item_logo img {
        max-width: 50px;
    }

    .v-icon.item_fav {
        font-size: 30px;
    }

    .a-sellers-item div {
        flex: 0 2 100%;
    }

    .a-sellers-item a {
        border: 0;
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
