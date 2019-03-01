<template>
  <div class="a-customer-cabinet">
    <div class="cabinet__favorites">
      <div class="favorites-title fixed-top bg-color2">
        Мои избранные поставщики:
      </div>
      <a-sellers-item
          v-for="item in sellers"
          :key="item.id"
          :sellers_data="item"
          @addToFavorite="addToFavorite"
      />
      <div class="asd"
           v-if="sellers.length < 1"
      >
        <p class="no-favorite">У вас нет избранных поставщиков</p>
        <router-link to="/">
          <p class="add-fav btn bg-color">Добавить</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import aSellersItem from '@/components/a-sellers-item'

export default {
  name: 'a-customer-cabinet',
  components: {
      aSellersItem
  },
  data() {
    return {
    }
  },

  computed: {
    sellers() {
          return this.$store.state.sellers.filter(function (e) {
              return ( e.favorite === true );
          });
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
  .cabinet__favorites {
    margin-top: 35px;
  }

  .no-favorite {
    padding-top: 50px;
  }

  .favorites-title {
    color: #797979;
    padding: 10px 0;
    font-size: 25px;
  }
  
  .add-fav {
    margin: 10px auto 0 auto;
    max-width: 100px;
  }

</style>
