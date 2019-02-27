<template>
    <div class="a-catalog-list">
        <div class="product_img">
            <img :src=productImage alt="">
        </div>
        <div class="product_title">
            {{ product_data.title }}
        </div>
        <div class="product_price">
            {{ product_data.price }} руб/{{ product_data.value }}
        </div>
        <div class="product_add-to-cart btn bg-color2"
            @click="addToCart"
        >{{ addToCartText }}
        </div>
        <!--<div class="product_add-to-cart btn bg-color"-->
             <!--v-else-->
        <!--&gt;{{ addedToCartText }}-->
        <!--</div>-->
    </div>
</template>

<script>
    export default {
        name: "a-catalog-list",
        props: {
            product_data: {
                type: Object,
                default: {}
            },
            sellers_data: {
                type: Object,
                default: {}
            }
        },

        data() {
           return {
               isThisAddedToCart: false,
               addToCartText: 'В корзину',
           }
        },

        computed: {
          productImage() {
              return require('../../public/img/' + this.product_data.img);
          }
        },

        methods: {
            addToCart() {
                let sellerIndex = this.sellers_data.id - 1;
                let productIndex = this.product_data.id -1;
                let products = this.product_data;
                this.isThisAddedToCart = !this.isThisAddedToCart;
                this.$store.dispatch('ADD_TO_CART', products);
                this.$store.dispatch('SET_ORDER_LIST', {productIndex, sellerIndex});
                // console.log(productIndex, sellerIndex)
            }
        },
    }
</script>

<style scoped>
    .product_title {
        margin: 10px 0;
    }

    .a-catalog-list {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .product_img img {
      max-width: 100px;
    }

    .product_add-to-cart {
        margin-top: 10px;
    }

    .product_add-to-cart:active {
        box-shadow: inset 0 0 10px 0 #525252;
    }

</style>
