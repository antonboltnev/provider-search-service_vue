<template>
    <div class="a-seller-catalog">
        <div class="a-seller-info">
            <v-btn class="a-seller-cert" dark color="#4e70b1" @click="showAdvancedInfo">
                <p class="cert-title">Certificates</p>
            </v-btn>
            <v-btn class="a-seller-about btn bg-color" dark color="#4e70b1" @click="showAboutText">Information</v-btn>
            <v-btn class="a-seller-chat btn bg-color" dark color="#4e70b1">Message</v-btn>
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
                <p>Contact phone: {{ sellers_data.phone }}</p>
            </div>
        </transition>
        <div class="a-category-select-input__wrapper " v-if="products">
            <label for="category-select">
                <select name="" id="category-select" v-model="selectedCategory">
                    <option value="ALL">ALL</option>
                    <a-seller-catalog-select-option
                            v-for="item in showProductCategories"
                            :key="item.id"
                            :category_data="item"
                    />
                </select>
                <icon name="chevron-down"></icon>
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
            <div class="a-seller-empty-catalog" v-if="!products">Provider did not add any products to catalogue...
                <div class="back-to-main">
                    <router-link to="/sellers-list">
                        <div class="btn bg-color">To providers list</div>
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
    import {mapGetters, mapActions} from 'vuex'

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
            ...mapGetters([
                'SELLERS'
            ]),
            showProductCategories(e) {
                let vm = this;
                vm.sellerSelectedIndex = this.$store.state.selectedSeller;
                e = this.sellerSelectedIndex;
                let categoryArr = [];
                for ( let item of this.SELLERS[e].products) {
                    categoryArr.push(item.category);
                }
                return Object.values(categoryArr.reduce((acc, cur) =>
                        Object.assign(acc,{[cur]:cur}),{} ));
            },

            products(e) {
                let vm = this;
                let selectFiilter = this.selectedCategory;
                vm.sellerSelectedIndex = this.$store.state.selectedSeller;
                e = this.sellerSelectedIndex;

                if ( selectFiilter === 'ALL' ) {
                    return this.SELLERS[e].products;
                } else {
                    return this.SELLERS[e].products.filter(function (item) {
                        vm.emptyFilterResults = false;
                        return item.category.match(selectFiilter);
                    });
                }
            },

            sellerDocuments(e) {
                let vm = this;
                vm.sellerSelectedIndex = this.$store.state.selectedSeller;
                e = this.sellerSelectedIndex;
                return require('../../public/img/' + this.SELLERS[e].docs);
            },

            sellers_data(e) {
                let vm = this;
                vm.sellerSelectedIndex = this.$store.state.selectedSeller;
                e = this.sellerSelectedIndex;
                return this.SELLERS[e];
            }
        },

        methods: {
            ...mapActions([
                'SET_ORDER_LIST',
                'ADD_TO_CART'
            ]),
            addToCart(e) {
                let product_index;
                let product = this.products[e];
                let sellerIndex = this.sellers_data.id - 1;
                let updateProducts = this.sellers_data.products;
                for (let i = 0; i < updateProducts.length; i++) {
                  if (updateProducts[i].title === product.title) {
                      product_index = i;
                  }
                }
                this.SET_ORDER_LIST({product_index, sellerIndex});
                this.ADD_TO_CART(product);
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
    }
</script>

<style>
    .a-seller-catalog {
        margin: 38px auto 50px auto;
    }

    .a-category-select-input__wrapper {
        margin: 0;
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
        flex: 0 0 30%;
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
