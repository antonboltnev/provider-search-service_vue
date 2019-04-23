<template>
  <div class="a-customer-cabinet">
    <div class="cabinet__favorites">
      <a-sellers-item
          v-for="item in sellers"
          :key="item.id"
          :sellers_data="item"
          @addToFavorite="addToFavorite"
      />
      <div class="asd"
           v-if="sellers.length < 1"
      >
        <p class="no-favorite">You do not have favorite providers</p>
        <router-link :to="{ name: 'sellersList' }">
          <p class="add-fav btn bg-color" @click="sellersPageClick">Add</p>
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

      sellersPageClick() {
          this.$store.dispatch('SET_HEADER_TEXT', 'Providers');
      },
  },

  mounted() {
      this.$store.dispatch('SET_HEADER_TEXT', 'My favorite providers');
  },
}

</script>

<style scoped>
  .cabinet__favorites {
    margin-top: 35px;
  }

  .no-favorite {
    padding-top: 50px;
  }
  
  .add-fav {
    margin: 10px auto 0 auto;
    max-width: 100px;
  }

</style>
