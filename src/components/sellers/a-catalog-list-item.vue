<template>
    <div class="a-catalog-list-item">
        <div class="a-catalog-list_img">
            <img :src="productImage" alt="">
        </div>
        <div class="a-catalog-list_title">
            {{ product_data.title }}
        </div>
        <div class="a-catalog-list_price">
            ${{ product_data.price }} / {{ product_data.value }}
        </div>
        <v-btn class="a-catalog-list_add-to-cart bg-color2"
             v-if="!this.product_data.ordered"
            @click="addToCart"
               dark
        >{{ addToCartText }}
        </v-btn>
        <transition name="bounce">
            <v-btn class="a-catalog-list_add-to-cart btn bg-color2"
                    v-if="this.product_data.ordered"
                    :disabled="this.product_data.ordered"
            >{{ addedToCart }}<icon name="check"></icon>
            </v-btn>
        </transition>
    </div>
</template>

<script>

    import Icon from 'vue-awesome/components/Icon'
    export default {
        name: "a-catalog-list-item",
        components: {
            Icon
        },
        props: {
            product_data: {
                type: Object,
                default() {}
            },
            sellers_data: {
                type: Object,
                default() {}
            }
        },

        data() {
           return {
               addToCartText: 'Add to cart',
               addedToCart: 'In cart'
           }
        },

        computed: {
          productImage() {
              return require('../../../public/img/' + this.product_data.img);
          }
        },

        methods: {
            addToCart() {
                this.$emit('add-to-cart');
            }
        },

        mounted() {
            this.$store.dispatch('SET_HEADER_TEXT', 'Suppliers catalogue');
        },
    }
</script>

<style>
    .a-catalog-list_title {
        margin: 10px 0;
    }

    .a-catalog-list-item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 0 0 40%;
        margin: 0 5px 50px 5px;
    }

    .a-catalog-list_img img {
      max-width: 100px;
    }

    .a-catalog-list_add-to-cart {
        margin-top: 10px;
    }

    .a-catalog-list_add-to-cart svg {
        position: relative;
        top: -2px;
        left: 10px;
    }

    .a-catalog-list_add-to-cart:active {
        box-shadow: inset 0 0 10px 0 #525252;
    }

    @media (min-width: 600px) {
        .a-catalog-list-item {
            flex: 0 0 30%;
        }
    }

</style>
