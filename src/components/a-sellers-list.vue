<template>
    <div>
        <div class="a-seller__list-header">
            <div class="a-category-select-input__wrapper">
                <label for="category-select">
                    <select name="" id="category-select" v-model="selectedCategory">
                        <option value="все" selected>Все категории</option>
                        <option value="Хлебная продукция">Хлебная продукция</option>
                        <option value="Молочная продукция">Молочная продукция</option>
                        <option value="Мясная продукция">Мясная продукция</option>
                    </select>
                </label>
            </div>
            <div class="a-sellers__list__title">
                <div class="title_items">Наименование поставщика:
                </div>
                <div class="title_items">Категория продукции:
                </div>
                <div class="title_items"> Контактный телефон:
                </div>
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
                <span>No results...</span>
            </div>
        </div>
    </div>
</template>

<script>
    import aSellersItem from '@/components/a-sellers-item'

    export default {
        name: "a-sellers-list",
        components: {
            aSellersItem
        },
        data() {
            return {
                selectedCategory: 'все',
                emptyFilterResults: {
                    type: Boolean,
                    default: false,
                },
            }
        },
        computed: {
           sellers() {
               let vm = this;
               let selectFiilter = this.selectedCategory;
               if ( selectFiilter === 'все' ) {
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
        }
    }
</script>

<style scoped>
    .a-category-select-input__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .a-seller__list-header {
        position: sticky;
        top: 0;
        background: #fff;
        padding: 0 10px;
    }

    .a-category-select-input__wrapper label {
        font-size: 20px;
        width: 100%;
    }

    .a-category-select-input__wrapper input, .a-category-select-input__wrapper select {
        width: 95%;
        padding: 10px;
        background: transparent;
        border: solid 1px #4192e8;
        border-radius: 3px;
        font-size: 16px;
        margin-top: 10px;
        color: #4192e8;
    }

    .a-category-select-input__wrapper select {
        width: 100%;
        margin-bottom: 10px;
    }

    .a-category-select-input__wrapper input::placeholder {
        color: #4192e8;
    }

    .a-sellers__list__title {
        display: flex;
        justify-content: space-around;
        padding: 20px;
        margin: 0 -10px 0 -10px;
        background: #ffb407;
    }

    .title_items {
        font-size: 12px;
        flex: 0 0 30%;
        text-transform: uppercase;
        font-weight: bold;
        color: #fff;
    }

    .a-sellers__list__empty {
        padding-top: 150px;
    }
</style>