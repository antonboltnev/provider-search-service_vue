<template>
    <v-layout class="a-catalog-list-item">
        <div class="a-catalog-list_img">
            <img :src="productImage" alt="">
        </div>
        <div class="a-catalog-list_title">
            {{ product_data.title }}
        </div>
        <div class="a-catalog-list_price">
            ${{ product_data.price }} / {{ product_data.value }}
        </div>
            <v-btn
                    color="#fff"
                    @click.stop="dialog = true"
            >
                Information
            </v-btn>
            <v-dialog
                    v-model="dialog"
                    max-width="290"
            >
                <v-card>
                    <v-card-title class="headline">{{product_data.title}}</v-card-title>

                    <v-card-text>
                        <ul class="product-info">
                            <li>
                                <p class="info-text">Calories</p>
                                <p class="info-value">{{product_data.calories}}</p>
                            </li>
                            <li>
                                <p class="info-text">Carbs</p>
                                <p class="info-value">{{product_data.carbs}}</p>
                            </li>
                            <li>
                                <p class="info-text">Iron</p>
                                <p class="info-value">{{product_data.iron}}</p>
                            </li>
                            <li>
                                <p class="info-text">Protein</p>
                                <p class="info-value">{{product_data.protein}}</p>
                            </li>
                            <li>
                                <p class="info-text">Fat</p>
                                <p class="info-value">{{product_data.fat}}</p>
                            </li>
                            <li>
                                <p class="info-text text-green">Min order value</p>
                                <p class="info-value">{{product_data.minvalue}}kg</p>
                            </li>
                            <li>
                                <p class="info-text text-green">Delivery time</p>
                                <p class="info-value">{{product_data.delivery}} day</p>
                            </li>

                        </ul>

                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                                color="green darken-1"
                                flat="flat"
                                @click="dialog = false"
                        >
                            Close
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
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
    </v-layout>
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
               addedToCart: 'In cart',
               dialog: false
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

    .product-info {
        list-style: none;
        padding-left: 0;
    }

    .product-info li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: url(../../../public/img/dotted_line.svg) no-repeat 2px 10px;
    }

    .product-info li p {
        background: #fff;
        padding: 0 5px;
    }
    
    .text-green {
        color: #41b883;
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
