<template>
    <v-layout class="a-order-item elevation-3">
        <div class="item_img">
            <img :src="orderImg" alt="">
        </div>
        <v-flex class="item_info">
            <div class="item_title"><span class="text-bold">{{ order_data.title }}</span></div>
            <div class="item_price">Price: <span class="text-bold">${{ order_data.price }} / {{ order_data.value }}</span></div>
            <div class="item_qty_wrapper">
                <div class="item_change-qty"
                     @click="minusQty"
                     :class="{ 'disabled': order_data.qty <= 1}"
                >-
                </div>
                <div class="item_qty">{{ order_data.qty }}</div>
                <div class="item_change-qty" @click="plusQty">+</div>
            </div>
            <div class="item_total text-bold text-color1">Total: ${{ order_data.qty * order_data.price}}</div>
        </v-flex>
        <v-btn flat icon class="item_remove" @click="removeItemFromCart">
            <v-icon class="item_fav add"
                    color="#797979"
            >delete
            </v-icon>
        </v-btn>
    </v-layout>
</template>

<script>

    export default {
        name: "a-order-item",
        props: {
            order_data: {
                type: Object,
                default() {}
            }
        },
        computed: {
            orderImg() {
                return require('../../../public/img/' + this.order_data.img);
            }
        },
        methods: {
            removeItemFromCart() {
                this.$emit('remove_item');
            },

            plusQty() {
                this.$emit('plus_qty');
            },

            minusQty() {
                this.$emit('minus_qty');
            },
        }
    }
</script>

<style>
    .a-order-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        padding: 10px;
    }

    .item_img img {
        max-width: 120px;
    }

    .item_info {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    .item_price {
        margin: 5px 0;
    }

    .item_remove {
        flex: 0 0 20%;
    }

    .item_remove svg {
        width: 20px;
        height: 20px;
        fill: #797979;
    }

    .item_qty_wrapper {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 15px 0;
        font-size: 20px;
    }

    .item_qty_wrapper .item_qty{
        padding: 0 24px;
    }

    .item_change-qty {
        cursor: pointer;
    }
    
    .item_change-qty.disabled {
        color: #d7d7d7;
        pointer-events: none;
    }
</style>