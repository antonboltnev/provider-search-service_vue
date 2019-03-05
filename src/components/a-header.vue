<template>
    <div class="a-header-title">
        <p class="title-text">{{ pageTitle }}</p>
    </div>
</template>

<script>
    export default {
        name: "a-header",
        data() {
            return {
            }
        },
        computed: {
            pageTitle() {
                return this.$store.state.pageName;
            }
        },
    }
</script>

<style scoped>
    .a-header-title {
        z-index: 2;
        font-size: 20px;
    }

</style>