<template>
    <div>
        <div class="a-seller__list-header">
            <v-flex class="a-category-select-input__wrapper" sm12 d-flex>
                <v-select name="" id="category-select" v-model="selectedCategory"
                          :items="showProductCategories"
                          solo
                >
                </v-select>
            </v-flex>
        </div>
        <v-flex class="a-sellers__list">
            <a-sellers-item
                    v-for="item in sellers"
                    :key="item.id"
                    :sellers_data="item"
                    @addToFavorite="addToFavorite"
            />
            <div class="a-sellers__list__empty" v-if="emptyFilterResults">
                <span>Oops, we're afraid, but we could not find anything...</span>
            </div>
        </v-flex>
    </div>
</template>

<script>
    import aSellersItem from '@/components/sellers/a-sellers-item'
    import {mapActions} from 'vuex'

    export default {
        name: "a-sellers-list",
        components: {
            aSellersItem,
        },
        data() {
            return {
                selectedCategory: 'ALL',
                emptyFilterResults: {
                    type: Boolean,
                    default: false,
                },
            }
        },
        computed: {
            showProductCategories() {
                let productArr = [];
                for ( let item of this.$store.state.productCategories) {
                    productArr.push(item.name);
                }
                return productArr;
            },

            sellers() {
                let vm = this;
                let selectFiilter = this.selectedCategory;
                if (selectFiilter === 'ALL') {
                    vm.emptyFilterResults = false;
                    return this.$store.state.sellers;
                }

                for (let item of this.$store.state.sellers) {
                    if (selectFiilter !== item.category) {
                        vm.emptyFilterResults = true;
                    } else {
                        return this.$store.state.sellers.filter(function (e) {
                            vm.emptyFilterResults = false;
                            return e.category.indexOf(selectFiilter) > -1;
                        });
                    }
                }
            }
        },

        methods: {
            ...mapActions([
                'SET_SELLER_TO_FAV',
                'SET_HEADER_TEXT'
            ]),
            addToFavorite(item) {
                this.SET_SELLER_TO_FAV(item);
            },
        },

        mounted() {
           this.SET_HEADER_TEXT('Suppliers');
        },
    }
</script>

<style>

    .a-category-select-input__wrapper .v-input__slot {
        margin-top: 10px;
    }

    .a-seller__list-header {
        z-index: 1;
        position: sticky;
        top: 33px;
        margin: 0 -9px;
    }

    .a-sellers__list {
        margin-top: 30px;
    }

    .a-sellers__list__empty {
        padding-top: 150px;
    }

    @media screen and (min-width: 767px) {
        .a-seller__list-header {

            top: 53px;
            margin: 0;
        }
    }
</style>
