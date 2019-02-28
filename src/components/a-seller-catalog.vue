<template>
    <div class="a-seller-catalog">
        <div class="a-seller-info">
            <div class="a-seller-cert btn bg-color" @click="showAdvancedInfo">
                <p class="cert-title">Сертификаты</p>
            </div>
            <div class="a-seller-about btn bg-color" @click="showAboutText">Информация</div>
            <div class="a-seller-chat btn bg-color">Написать
            </div>
        </div>
        <transition name="fade">
            <div class="a-seller-advanced-info certs" v-if="isAdvancesInfoVisible">
            <div class="cert-docs">
                <img :src="sellerDocuments" alt="">
            </div>
            <div class="cert-docs">
                <img :src="sellerDocuments" alt="">
            </div>
            <div class="cert-docs">
                <img :src="sellerDocuments" alt="">
            </div>
        </div>
        </transition>
        <transition name="fade">
             <div class="a-seller-advanced-info about" v-if="isAboutTextVisible">
                 <p>Телефон: {{ sellers_data.phone }}</p>
        </div>
        </transition>
        <h2>Каталог поставщика</h2>
        <div class="a-seller-catalog-wrapper">
            <a-catalog-list
                    v-for="(item, index) in products"
                    :key="item.id"
                    :product_data="item"
                    :sellers_data="sellers_data"
                    @add-to-cart="addToCart(index)"
            />
        </div>
    </div>
</template>

<script>
    import aCatalogList from '@/components/a-catalog-list'
    import Icon from 'vue-awesome/components/Icon'

    export default {
        name: "a-seller-catalog",
        components: {
            aCatalogList,
            Icon
        },
        props: {
            sellerIndex: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                sellerSelectedIndex: this.sellerIndex,
                isAdvancesInfoVisible: false,
                isAboutTextVisible: false,
            }
        },
        computed: {
            sellerInfo(e) {
                let vm = this;
                vm.sellerSelectedIndex = this.$store.state.selectedSeller;
                e = this.sellerSelectedIndex;
                return  this.$store.state.sellers[e].about;
            },

            sellerDocuments(e) {
                let vm = this;
                vm.sellerSelectedIndex = this.$store.state.selectedSeller;
                e = this.sellerSelectedIndex;
                return  require('../../public/img/' +  this.$store.state.sellers[e].docs);
            },

            products(e) {
                let vm = this;
                vm.sellerSelectedIndex = this.$store.state.selectedSeller;
                e = this.sellerSelectedIndex;
                return this.$store.state.sellers[e].products;
            },
            sellers_data(e) {
                let vm = this;
                vm.sellerSelectedIndex = this.$store.state.selectedSeller;
                e = this.sellerSelectedIndex;
                return this.$store.state.sellers[e];
            }
        },

        methods: {
            addToCart(index) {
                let product = this.products[index];
                let sellerIndex = this.sellers_data.id - 1;
                let productIndex = this.products.indexOf(product);
                this.$store.dispatch('ADD_TO_CART', product);
                this.$store.dispatch('SET_ORDER_LIST', {productIndex, sellerIndex});
            },

            showAdvancedInfo() {
                this.isAdvancesInfoVisible = !this.isAdvancesInfoVisible;
                this.isAboutTextVisible = false;
            },

            showAboutText() {
                this.isAboutTextVisible = !this.isAboutTextVisible;
                this.isAdvancesInfoVisible = false;
            }
        },

        mounted: function () {
            return this.$store.state.sellers.products;
        },
    }
</script>

<style scoped>

    .a-seller-catalog-wrapper {
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
    }

    .a-seller-info {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 30px;
    }
    
    .a-seller-cert, .a-seller-about, .a-seller-chat{
        margin: 0 2px;
        flex: 0 0 25%;
    }

    .a-seller-advanced-info {
        display: flex;
        justify-content: space-around;
        margin-bottom: 30px;
    }

    .cert-docs img {
        max-width: 100px;
    }

</style>
<style>
</style>