<template>
  <div class="a-customer-favorites">
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
        <p class="no-favorite">You do not have favorite suppliers</p>
          <v-btn :to="{ name: 'sellersList' }" class="add-fav bg-color2" dark @click="sellersPageClick">Add</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import aSellersItem from '@/components/sellers/a-sellers-item'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'a-customer-favorites',
  components: {
      aSellersItem
  },
  computed: {
    ...mapGetters([
       'SELLERS'
    ]),
    sellers() {
          return this.SELLERS.filter(function (e) {
              return ( e.favorite === true );
          });
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

      sellersPageClick() {
          this.SET_HEADER_TEXT('Suppliers');
      },
  },

  mounted() {
      this.SET_HEADER_TEXT('My favorite suppliers');
  },
}

</script>

<style>
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
