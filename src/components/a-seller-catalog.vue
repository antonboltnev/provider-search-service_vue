<template>
    <div class="a-seller-catalog">
        <div class="a-seller-info">
            <div class="a-seller-cert" @click="showAdvancedInfo">
                <p class="cert-title">Сертификаты</p>
            </div>
            <div class="a-seller-about" @click="showAboutText">О поставщике</div>
            <div class="a-seller-chat">Написать</div>
        </div>
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
        <div class="a-seller-advanced-info about" v-if="isAboutTextVisible">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea in itaque laudantium quisquam voluptate. Corporis cum dolorum ea eum, ex harum iste minus quis quod saepe, sit sunt voluptatem voluptates!
        </div>
        <h2>Каталог поставщика</h2>
        <div class="a-seller-catalog-wrapper">
            <a-catalog-list
                    v-for="item in products"
                    :key="item.id"
                    :product_data="item"
            />
        </div>
    </div>
</template>

<script>
    import aCatalogList from '@/components/a-catalog-list'

    export default {
        name: "a-seller-catalog",
        components: {
            aCatalogList
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
            }
        },

        methods: {
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
        background: #f5b333;
        border-radius: 3px;
        padding: 15px 10px;
        color: #fff;
        font-size: 14px;
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