<template>
    <div class="a-order-item">
        <div class="item_img">
            <img :src="orderImg" alt="">
        </div>
        <div class="item_title">{{ order_data.title }}</div>
        <div class="item_price">{{ order_data.price }} руб/{{ order_data.value }}</div>
        <div class="item_remove" @click="removeItemFromCart"><icon name="trash"></icon></div>
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
            }
        }
    }
</script>

<style scoped>
    .a-order-item {
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: solid 1px #d6d6d6;
    }

    .item_img img {
        max-width: 100px;
    }
</style>