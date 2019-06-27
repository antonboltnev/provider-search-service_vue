<template>
    <v-container class="a-seller-catalog">
        <v-layout class="a-seller-info justify-space-between wrap"  v-if="products">
            <v-flex xs12 sm3>
                <v-btn class="a-seller-cert bg-color2" dark @click="showAdvancedInfo">Certificates</v-btn>
            </v-flex>
            <v-flex xs12 sm3>
                <v-btn class="a-seller-about bg-color2" dark @click="showAboutText">Information</v-btn>
            </v-flex>
            <v-flex xs12 sm3>
                <v-btn class="a-seller-chat bg-color2" dark >Message</v-btn>
            </v-flex>
        </v-layout>
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
        <v-flex class="a-category-select-input__wrapper" sm12 d-flex v-if="products">
                <v-select id="category-select" v-model="selectedCategory"
                          :items="showProductCategories"
                          solo
                >
                </v-select>
        </v-flex>
        <v-layout class="a-seller-catalog-wrapper wrap">
            <a-catalog-list-item
                    v-for="(item, index) in products"
                    :key="item.id"
                    :product_data="item"
                    :sellers_data="sellers_data"
                    @add-to-cart="addToCart(index)"
            />
            <v-flex class="a-seller-empty-catalog" v-if="!products">Supplier did not add any products to catalogue...
                <div class="back-to-main">
                        <v-btn dark class="btn bg-color2" :to="{name: 'sellersList'}">To suppliers list</v-btn>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import aCatalogListItem from '@/components/sellers/a-catalog-list-item'
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "a-seller-catalog",
        components: {
            aCatalogListItem,
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
            showProductCategories() {
                let vm = this;
                vm.sellerSelectedIndex = this.$store.state.selectedSeller;
                let index = this.sellerSelectedIndex;
                let categoryArr = ['ALL'];
                for ( let item of this.SELLERS[index].products) {
                    categoryArr.push(item.category);
                }
                return Object.values(categoryArr.reduce((acc, cur) =>
                        Object.assign(acc,{[cur]:cur}),{} ));
            },

            products() {
                let vm = this;
                let selectFiilter = this.selectedCategory;
                vm.sellerSelectedIndex = this.$store.state.selectedSeller;
                let index = this.sellerSelectedIndex;

                if ( selectFiilter === 'ALL' ) {
                    return this.SELLERS[index].products;
                } else {
                    return this.SELLERS[index].products.filter(function (item) {
                        vm.emptyFilterResults = false;
                        return item.category.match(selectFiilter);
                    });
                }
            },

            sellerDocuments() {
                let vm = this;
                vm.sellerSelectedIndex = this.$store.state.selectedSeller;
                let index = this.sellerSelectedIndex;
                return require('../../../public/img/' + this.SELLERS[index].docs);
            },

            sellers_data() {
                let vm = this;
                vm.sellerSelectedIndex = this.$store.state.selectedSeller;
                let index = this.sellerSelectedIndex;
                return this.SELLERS[index];
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
        margin: 20px auto 50px auto !important;
    }

    .a-seller-catalog-wrapper {
        max-width: 800px;
        margin: 20px auto 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .a-category-select-input__wrapper {
        position: sticky;
        top: 33px;
        z-index: 1;
    }

    .a-seller-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .a-seller-info button {
        width: 100%;
        margin: 6px 0;
    }

    .a-seller-advanced-info {
        display: flex;
        justify-content: space-around;
        margin: 15px 0;
    }

    .cert-docs img {
        max-width: 100px;
    }

    .a-seller-empty-catalog {
        max-width: 300px;
    }

</style>
