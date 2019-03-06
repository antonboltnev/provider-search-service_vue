<template>
    <div class="a-header-title" v-if="toggleHeaderVisibility">
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
            },

            toggleHeaderVisibility() {
                return this.$store.state.isHeaderVisible
            }
        },

        watch: {
            $route() {
                if ( this.$route.path === '/home' ) {
                    this.$store.dispatch('HIDE_HEADER');
                } else {
                    this.$store.dispatch('SHOW_HEADER');
                }
            },
        },

        created() {
            if ( this.$route.path === '/home' ) {
                this.$store.dispatch('HIDE_HEADER');
            } else {
                this.$store.dispatch('SHOW_HEADER');
            }
        }
    }
</script>

<style scoped>
    .a-header-title {
        z-index: 2;
        font-size: 20px;
        max-width: 890px;
        margin: 0 auto;
    }

</style>