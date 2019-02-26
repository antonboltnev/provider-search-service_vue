<template>
    <div class="a-sellers-item">
        <div class="item_logo">
            <img :src="sellerImage" alt="">
        </div>
        <div class="item_title" @click="setSellerIndex">
            <router-link to="/seller-catalog">{{ sellers_data.name }}</router-link>
        </div>
        <div class="item_category">{{ sellers_data.category }}</div>
        <div class="item_phone">{{ sellers_data.phone }}</div>
        <div class="item_addToFav"
          v-if="!sellers_data.favorite"
          @click="addToFavorite"
         >В избранное
       </div>
        <div class="item_inFavorite"
            v-if="sellers_data.favorite"
          @click="addToFavorite"
       >Удалить
       </div>
    </div>
</template>

<script>
    export default {
        name: "a-sellers-item",
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
                return this.$store.dispatch('SET_SELLER_INDEX', payload);
            },
        },
    }
</script>

<style scoped>
    .a-sellers-item {
        justify-content: space-around;
        align-items: center;
        display: flex;
        margin: 20px auto;
        border-bottom: dotted 1px #d7d7d7;
    }

    .item_logo img {
        max-width: 30px;
    }

    .a-sellers-item a, .a-sellers-item div {
        padding: 10px 0;
        margin: 0 5px;
        flex: 0 2 20%;
    }

    .a-sellers-item a {
        border: 0;
    }

    .item_title {
        font-weight: bold;
        font-size: 14px;
        color: #757575;
    }

    .item_phone {
        font-size: 12px;
    }

    .item_category, .item_addToFav, .item_inFavorite {
        font-size: 10px;
    }

    .a-sellers-item div.item_addToFav, .a-sellers-item div.item_inFavorite {
      background: #4192e8;
        text-transform: uppercase;
      border-radius: 3px;
      color: #fff;
      padding: 15px 5px;
      min-width: 20%;
    }

    .a-sellers-item div.item_inFavorite {
      background: #f5b333;
    }
</style>
