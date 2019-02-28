<template>
    <div class="a-order-list">
        <p class="list_title fixed-top bg-color2" v-if="orders.length > 0">Мои активные заказы</p>
        <a-order-item
            :order_data="item"
            v-for="(item, index) in orders"
            :key="item.id"
            @remove_item="removeFromCart(index)"
            @plus_qty="plusQty(index)"
            @minus_qty="minusQty(index)"
        />
        <div class="order-total bg-color fixed-bottom" v-if="orders.length > 0">
            <div class="total-sum">
                <div>Итого:</div>
                <span>{{ totalSum }} руб.</span>
            </div>
            <p class="total-sum_confirm btn bg-color2">Оформить заказ</p>
        </div>
        <div class="empty-order-list" v-if="orders.length < 1">
            <p class="empty-order-list-p">У вас нет активных заказов</p>
            <router-link to="/">
                <p class="btn bg-color">Добавить</p>
            </router-link>
        </div>
    </div>
</template>

<script>
    import aOrderItem from '@/components/a-order-item'

    export default {
        name: "a-order-list",
        components: {
            aOrderItem
        },
        computed: {
            orders() {
                return this.$store.state.cart;
            },

            totalSum() {
                let totalSum = 0;
                for (let i = 0; i< this.orders.length; i++) {
                    totalSum += parseInt(this.orders[i].total);
                }
                return totalSum;
            }
        },
        methods: {
            removeFromCart(index) {
                this.$store.dispatch('REMOVE_FROM_CART', index);
            },

            plusQty(index) {
                this.$store.dispatch('INCREMENT_PRODUCT_QTY', index);
            },

            minusQty(index) {
                this.$store.dispatch('DECREMENT_PRODUCT_QTY', index);
            }
        }
    }
</script>

<style scoped>
    .a-order-list {
        margin: 50px 0;
    }

    .list_title {
        margin: 0 -10px 30px -10px;
        color: #fff;
        padding: 10px 0;
        font-size: 25px;
        box-shadow: 0 1px 7px 0 #a2a2a2;
    }

    .empty-order-list-p {
        margin-bottom: 10px;
    }

    .empty-order-list a p {
        max-width: 100px;
        margin: 0 auto;
    }
    
    .order-total {
        bottom: 67px;
        font-size: 20px;
        padding: 10px 0;
        margin: 0 -10px;
        color: #fff;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .total-sum {
        display: flex;
    }

    .total-sum_confirm {
        margin-left: 30px;
        box-shadow: 0 0 6px 0 #616161;
        background: #ffc02e;
    }

    .order-total span {
        margin-left: 10px;
    }
</style>