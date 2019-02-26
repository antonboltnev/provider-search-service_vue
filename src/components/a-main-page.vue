<template>
          <div class="a-main-page__wrapper">
              <a-sellers-list />
          </div>
</template>

<script>
    import aCategorySelectInput from '@/components/a-category-select-input'
    import aSellersList from '@/components/a-sellers-list'

    export default {
        name: "a-main-page",
        components: {
            aCategorySelectInput,
            aSellersList
        },
        data() {
            return {

            }
        },
        methods: {
        }
    }
</script>

<style scoped>

</style>