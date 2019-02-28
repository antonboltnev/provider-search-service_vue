<template>
    <div class="a-order-item">
        <div class="item_img">
            <img :src="orderImg" alt="">
        </div>
        <div class="item_info">
            <div class="item_title"><span class="text-bold">{{ order_data.title }}</span></div>
            <div class="item_price">Цена: <span class="text-bold">{{ order_data.price }} руб/{{ order_data.value }}</span></div>
            <div class="item_qty_wrapper">
                <div class="item_change-qty" @click="plusQty">+</div>
                <div class="item_qty">{{ order_data.qty }}</div>
                <div class="item_change-qty"
                     @click="minusQty"
                     :class="{ 'disabled': order_data.qty <= 1}"
                >-
                </div>
            </div>
            <div class="item_total text-bold text-color1">Итого: {{ order_data.qty * order_data.price}} руб.</div>
        </div>
        <div class="item_remove" @click="removeItemFromCart">
            <icon name="times"></icon>
        </div>
    </div>
</template>

<script>
    import Icon from 'vue-awesome/components/Icon'

    export default {
        name: "a-order-item",
        components: {
            Icon
        },
        props: {
            order_data: {
                type: Object,
                default: {}
            }
        },
        computed: {
            orderImg() {
                return require('../../public/img/' + this.order_data.img);
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

<style scoped>
    .a-order-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: solid 1px #d6d6d6;
        border-radius: 6px;
        margin-bottom: 20px;
        padding: 10px 0;
        box-shadow: 0 1px 7px 0 #d8d8d8;
    }

    .item_img img {
        max-width: 120px;
    }

    .item_info {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
    }

    .item_price {
        margin: 5px 0;
    }

    .item_remove {
        flex: 0 0 20%;
    }

    .item_remove svg {
        width: 30px;
        height: 30px;
        fill: #4192e8;
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