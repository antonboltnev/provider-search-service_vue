<template>
          <div class="a-sellers-page__wrapper">
              <a-sellers-list />
          </div>
</template>

<script>
    import aSellersList from '@/components/sellers/a-sellers-list'

    export default {
        name: "a-sellers-page",
        components: {
            aSellersList
        },
    }
</script>