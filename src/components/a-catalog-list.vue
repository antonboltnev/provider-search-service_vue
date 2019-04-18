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
        <div class="product_add-to-cart btn bg-color"
             v-if="!this.product_data.ordered"
            @click="addToCart"
        >{{ addToCartText }}
        </div>
        <button class="product_add-to-cart btn bg-color2"
             v-if="this.product_data.ordered"
             :disabled="this.product_data.ordered"
        >{{ addedToCart }}<icon name="check"></icon>
        </button>
    </div>
</template>

<script>
    import Icon from 'vue-awesome/components/Icon'
    export default {
        name: "a-catalog-list",
        components: {
            Icon
        },
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
               addToCartText: 'В корзину',
               addedToCart: 'В корзине'
           }
        },

        computed: {
          productImage() {
              return require('../../public/img/' + this.product_data.img);
          }
        },

        methods: {
            addToCart() {
                this.$emit('add-to-cart');
            }
        },

        mounted() {
            this.$store.dispatch('SET_HEADER_TEXT', 'Каталог поставщика');
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
        flex: 0 0 40%;
        margin: 0 5px 50px 5px;
    }

    .product_img img {
      max-width: 100px;
    }

    .product_add-to-cart {
        margin-top: 10px;
    }

    .product_add-to-cart svg {
        position: relative;
        top: 2px;
        left: 10px;
    }

    .product_add-to-cart:active {
        box-shadow: inset 0 0 10px 0 #525252;
    }

    @media (min-width: 600px) {
        .a-catalog-list {
            flex: 0 0 30%;
        }
    }

</style>
