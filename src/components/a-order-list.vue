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
        <div class="order-total bg-color2 fixed-bottom" v-if="orders.length > 0">
            <div class="total-sum">
                <div>Итого:</div>
                <span>{{ totalSum }} руб.</span>
            </div>
            <p class="total-sum_confirm btn" @click="checkout">Оформить заказ</p>
        </div>
        <div class="empty-order-list" v-if="orders.length < 1">
            <p class="empty-order-list-p">У вас нет активных заказов</p>
            <router-link to="/sellers-list">
                <p class="btn bg-color" @click="sellersPageClick">Добавить</p>
            </router-link>
        </div>
        <transition name="bounce">
            <div class="thankyou-popup" v-if="orderChecked">
            <p>Ваш заказ оформлен!</p>
            <br>
            <span>Представитель поставщика свяжется с вами в ближайшее время.</span>
            <br>
            <br>
            <br>
                <div class="ok btn bg-color" @click="closePopup">OK</div>
        </div>
        </transition>
    </div>
</template>

<script>
    import aOrderItem from '@/components/a-order-item'

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
                for (let i = 0; i< this.orders.length; i++) {
                    totalSum += parseInt(this.orders[i].total);
                }
                return totalSum;
            }
        },
        methods: {
            sellersPageClick() {
                this.$store.dispatch('SET_HEADER_TEXT', 'Поставщики');
            },

            checkout() {
               this.orderChecked = true;
               this.$store.dispatch('CHECKOUT', this.orders);
            },

            closePopup() {
                this.orderChecked = false;
            },

            removeFromCart(index) {
                this.$store.dispatch('REMOVE_FROM_CART', index);
            },

            plusQty(index) {
                this.$store.dispatch('INCREMENT_PRODUCT_QTY', index);
            },

            minusQty(index) {
                this.$store.dispatch('DECREMENT_PRODUCT_QTY', index);
            }
        },
        created() {
            this.orderChecked = false;
        },

        mounted() {
            this.$store.dispatch('SET_HEADER_TEXT', 'Мои заказы');
        },
    }
</script>

<style scoped>
    .a-order-list {
        max-width: 800px;
        margin: 50px auto;
    }

    .list_title {
        margin: 0 -10px 30px -10px;
        padding: 10px 0;
        font-size: 25px;
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
        margin: 0 auto;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: solid 1px #fff;
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