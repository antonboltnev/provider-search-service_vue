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
  import {mapActions} from 'vuex'

  export default {
    name: "a-category-select-input",
    data() {
      return {
        category: '',
      }
    },
    methods: {
      ...mapActions([
        "FILTER_SELLERS"
      ]),
      filterSellers() {
        this.FILTER_SELLERS(this.category);
      },
    },
  }
</script>

<style>

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