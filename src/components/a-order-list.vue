<template>
    <div class="a-order-list">
        <p class="list_title">Мои активные заказы</p>
        <a-order-item
            :order_data="item"
            v-for="(item, index) in orders"
            :key="item.id"
            @remove_item="removeFromCart(index)"
            @plus_qty="plusQty(index)"
            @minus_qty="minusQty(index)"
        />
        <p v-if="orders.length = 0">У вас нет активных заказов</p>
        <router-link to="/">
            <span class="btn bg-color">Добавить</span>
        </router-link>
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
    .list_title {
        margin-bottom: 30px;
    }
</style>