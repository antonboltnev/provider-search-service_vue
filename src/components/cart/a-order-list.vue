<template>
    <div class="a-order-list">
        <a-order-item
            :order_data="item"
            v-for="(item, index) in orders"
            :key="item.id"
            @remove_item="removeFromCart(index)"
            @plus_qty="plusQty(index)"
            @minus_qty="minusQty(index)"
        />
        <v-layout class="order-total bg-color2 fixed-bottom elevation-3 justify-center" v-if="orders.length > 0">
            <v-flex class="total-sum" md2 xs6>
                <div>Total:</div>
                <span>${{ totalSum }}</span>
            </v-flex>
            <v-btn class="total-sum_confirm" @click="checkout">Checkout</v-btn>
        </v-layout>
        <div class="empty-order-list" v-if="orders.length < 1">
            <p class="empty-order-list-p">You do not have active orders</p>
            <router-link :to="{name: 'sellersList'}">
                <v-btn dark class="bg-color2" @click="sellersPageClick">Add</v-btn>
            </router-link>
        </div>
        <transition name="bounce">
            <div class="thankyou-popup" v-if="orderChecked">
            <p>Checkout Success!</p>
            <br>
            <span>Supplier's representative will contact you soon</span>
            <br>
            <br>
            <br>
                <v-btn class="ok bg-color2" dark  @click="closePopup">OK</v-btn>
        </div>
        </transition>
    </div>
</template>

<script>
    import aOrderItem from '@/components/cart/a-order-item'
    import {mapActions} from 'vuex'

    export default {
        name: "a-order-list",
        components: {
            aOrderItem
        },
        data() {
            return {
                orderChecked: false
            }
        },
        computed: {
            orders() {
                return this.$store.state.cart;
            },

            totalSum() {
                let totalSum = 0;
                for (let item of this.orders) {
                    totalSum += parseInt(item.total);
                }
                return totalSum;
            }
        },
        methods: {
            ...mapActions([
                    'SET_HEADER_TEXT',
                    'CHECKOUT',
                    'REMOVE_FROM_CART',
                    'INCREMENT_PRODUCT_QTY',
                    'DECREMENT_PRODUCT_QTY'
            ]),
            sellersPageClick() {
                this.SET_HEADER_TEXT('Suppliers');
            },

            checkout() {
               this.orderChecked = true;
               this.CHECKOUT(this.orders);
            },

            closePopup() {
                this.orderChecked = false;
            },

            removeFromCart(index) {
                this.REMOVE_FROM_CART(index);
            },

            plusQty(index) {
                this.INCREMENT_PRODUCT_QTY(index);
            },

            minusQty(index) {
                this.DECREMENT_PRODUCT_QTY(index);
            }
        },
        created() {
            this.orderChecked = false;
        },

        mounted() {
            this.SET_HEADER_TEXT('My orders');
        },
    }
</script>

<style>
    .a-order-list {
        max-width: 800px;
        margin: 50px auto 120px auto;
    }

    .empty-order-list-p {
        margin-bottom: 10px;
    }

    .empty-order-list a p {
        max-width: 100px;
        margin: 0 auto;
    }

    .order-total {
        bottom: 59px;
        font-size: 20px;
        padding: 10px 0;
        margin: 0 auto;
        font-weight: bold;
        align-items: center;
        justify-content: center;
    }

    .total-sum {
        display: flex;
    }

    .total-sum_confirm {
        margin-left: 30px;
        box-shadow: 0 0 5px 0 #404040;
    }
    .total-sum_confirm:active {
        box-shadow: inset 0 0 5px 0 #50753d;
    }

    .order-total span {
        margin-left: 10px;
    }

    .empty-order-list {
        padding-top: 35px;
    }

    .thankyou-popup {
        position: absolute;
        width: 100%;
        height: 200px;
        padding-top: 100px;
        top: 0;
        bottom: 0;
        left: 0;
        background: #fff;
        z-index: 2;
    }

    .ok {
        max-width: 150px;
        margin: 0 auto;
    }
</style>
