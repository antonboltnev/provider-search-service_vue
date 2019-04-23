<template>
    <div class="a-category-select-input__wrapper">
        <label>Choose product category:
            <input
                    type="text"
                    placeholder='Ex: "bread" '
                    v-model.trim="category"
                    @keyup="filterSellers"
            />
        </label>
        <div class="filter-sellers" @click="filterSellers">Search</div>
    </div>
</template>

<script>
    export default {
        name: "a-category-select-input",
        data() {
           return {
               category: '',
           }
        },
        methods: {
            filterSellers() {
              this.$store.dispatch('FILTER_SELLERS', this.category);
            },
        },
    }
</script>

<style scoped>
    .a-category-select-input__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .a-category-select-input__wrapper input {
        width: 95%;
        padding: 10px;
        border: solid 1px #d7d7d7;
        font-size: 16px;
    }

    .filter-sellers {
        margin-left: 10px;
        padding: 10px;
        border: solid 1px #d7d7d7;
        cursor: pointer;
    }
</style>