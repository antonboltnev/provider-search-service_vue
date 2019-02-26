<template>
  <div class="a-castomer-cabinet">
    <div class="cabinet__favorites">
      <div class="" v-if="sellers.length > 0">
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
          <p class="add-fav">Добавить</p>
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
  .no-favorite {
    padding-top: 50px;
  }
  
  .add-fav {
    margin: 10px auto 0 auto;
    background: #ffb407;
    border-radius: 3px;
    padding: 15px 10px;
    color: #fff;
    max-width: 100px;
  }

</style>
