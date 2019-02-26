<template>
    <div class="a-catalog-list">
        <div class="product_img">
            <img :src=productImage alt="">
        </div>
        <div class="product_title">
            {{ product_data.title }}
        </div>
        <div class="product_price">
            {{ product_data.price }} руб/{{ product_data.value }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "a-catalog-list",
        props: {
            product_data: {
                type: Object,
                default: {}
            }
        },

        computed: {
          productImage() {
              return require('../../public/img/' + this.product_data.img);
          }
        },
    }
</script>

<style scoped>
    .product_title {
        margin: 10px 0;
    }

    .product_img img {
      max-width: 100px;
    }

</style>
