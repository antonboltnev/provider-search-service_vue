<template>
    <div class="a-order-list">
        <p class="list_title">Мои активные заказы</p>
        <a-order-item
            :order_data="item"
            v-for="(item, index) in orders"
            :key="item.id"
            @remove_item="removeFromCart(index)"
        />
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
            }
        }
    }
</script>

<style scoped>
    .list_title {
        margin-bottom: 30px;
    }
</style>