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
             v-if="!isThisAddedToCart"
            @click="addToCart"
        >{{ addToCartText }}
        </div>
        <div class="product_add-to-cart btn bg-color"
             v-else
        >{{ addedToCartText }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "a-catalog-list",
        props: {
            product_data: {
                type: Object,
                default: {}
            }
        },

        data() {
           return {
               isThisAddedToCart: false,
               addToCartText: 'В корзину',
               addedToCartText: 'Добавлено'
           }
        },

        computed: {
          productImage() {
              return require('../../public/img/' + this.product_data.img);
          }
        },

        methods: {
            addToCart() {
                this.isThisAddedToCart = !this.isThisAddedToCart;
                this.$store.dispatch('ADD_PRODUCT_TO_CART', this.product_data);
                console.log(this.$store.state.cart);
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

</style>
