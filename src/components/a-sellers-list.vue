<template>
    <div>
        <div class="a-seller__list-header">
            <div class="a-category-select-input__wrapper">
                <label for="category-select">
                    <select name="" id="category-select" v-model="selectedCategory">
                        <a-seller-catalog-select-option
                                v-for="item in showProductCategories"
                                :key="item.id"
                                :category_data="item"
                        />
                    </select>
                    <icon name="chevron-down"></icon>
                </label>
            </div>
        </div>
        <div class="a-sellers__list">
            <a-sellers-item
                    v-for="item in sellers"
                    :key="item.id"
                    :sellers_data="item"
                    @addToFavorite="addToFavorite"
            />
            <div class="a-sellers__list__empty" v-if="emptyFilterResults">
                <span>Oops, we're afraid, but we could not find anything...</span>
            </div>
        </div>
    </div>
</template>

<script>
    import aSellersItem from '@/components/a-sellers-item'
    import aSellerCatalogSelectOption from '@/components/a-seller-catalog-select-option'
    import Icon from 'vue-awesome/components/Icon'

    export default {
        name: "a-sellers-list",
        components: {
            aSellersItem,
            aSellerCatalogSelectOption,
            Icon
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
                for ( let item in this.$store.state.productCategories) {
                    productArr.push(this.$store.state.productCategories[item].name);
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

                for (let item = 0; item < this.$store.state.sellers.length; item++) {
                    if (selectFiilter !== this.$store.state.sellers[item].category) {
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
            addToFavorite(item) {
                this.$store.dispatch('SET_SELLER_TO_FAV', item);
            },
        },

        mounted() {
           this.$store.dispatch('SET_HEADER_TEXT', 'Providers');
        },
    }
</script>

<style scoped>

    .a-seller__list-header {
        z-index: 1;
        position: sticky;
        top: 38px;
        background: #fff;
        padding: 0 10px;
    }

    .a-sellers__list {
        margin-top: 30px;
    }

    .a-sellers__list__empty {
        padding-top: 150px;
    }
</style>
