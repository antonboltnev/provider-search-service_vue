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
        <div class="a-category-select-input__wrapper " v-if="products">
            <label for="category-select">
                <select name="" id="category-select" v-model="selectedCategory">
                    <option value="ALL">Все категории</option>
                    <a-seller-catalog-select-option
                            v-for="item in showProductCategories"
                            :key="item.id"
                            :category_data="item"
                    />
                </select>
            </label>
        </div>
        <div class="a-seller-catalog-wrapper">
            <a-catalog-list
                    v-for="(item, index) in products"
                    :key="item.id"
                    :product_data="item"
                    :sellers_data="sellers_data"
                    @add-to-cart="addToCart(index)"
            />
            <div class="a-seller-empty-catalog" v-if="!products">Поставщик пока не добавил товары в каталог...
                <div class="back-to-main">
                    <router-link to="/sellers-list">
                        <div class="btn bg-color">К списку поставщиков</div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import aCatalogList from '@/components/a-catalog-list'
    import aSellerCatalogSelectOption from '@/components/a-seller-catalog-select-option'
    import Icon from 'vue-awesome/components/Icon'

    export default {
        name: "a-seller-catalog",
        components: {
            aCatalogList,
            Icon,
            aSellerCatalogSelectOption
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
                selectedCategory: 'ALL',
            }
        },
        computed: {
            showProductCategories(e) {
                let vm = this;
                vm.sellerSelectedIndex = this.$store.state.selectedSeller;
                e = this.sellerSelectedIndex;
                let categoryArr = [];
                for ( let item in this.$store.state.sellers[e].products) {
                    categoryArr.push(this.$store.state.sellers[e].products[item].category);
                }
                return Object.values(categoryArr.reduce((acc, cur) => Object.assign(acc,{[cur]:cur}),{} ));
            },

            products(e) {
                let vm = this;
                let selectFiilter = this.selectedCategory;
                vm.sellerSelectedIndex = this.$store.state.selectedSeller;
                e = this.sellerSelectedIndex;

                if ( selectFiilter === 'ALL' ) {
                    return this.$store.state.sellers[e].products;
                } else {
                    return this.$store.state.sellers[e].products.filter(function (item) {
                        vm.emptyFilterResults = false;
                        return item.category.indexOf(selectFiilter) > -1;
                    });
                }
            },

            sellerDocuments(e) {
                let vm = this;
                vm.sellerSelectedIndex = this.$store.state.selectedSeller;
                e = this.sellerSelectedIndex;
                return require('../../public/img/' + this.$store.state.sellers[e].docs);
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
    .a-seller-catalog {
        margin: 38px auto 50px auto;
    }

    .a-category-select-input__wrapper {
        margin: 0;
    }

    #category-select {
        margin-top: 0;
    }

    .a-seller-catalog-wrapper {
        max-width: 800px;
        margin: 20px auto 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .a-seller-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
    }

    .a-seller-cert, .a-seller-about, .a-seller-chat {
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

    .a-seller-empty-catalog {
        max-width: 300px;
    }

    .a-seller-empty-catalog .back-to-main {
        max-width: 150px;
        margin: 20px auto;
    }

</style>
<style>
</style>
