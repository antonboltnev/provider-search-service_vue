<template>
    <header class="a-header-title" v-if="toggleHeaderVisibility">
        <h1 class="title-text">{{ pageTitle }}</h1>
    </header>
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
                if ( this.$route.path === '/login' ) {
                    this.$store.dispatch('HIDE_HEADER');
                } else {
                    this.$store.dispatch('SHOW_HEADER');
                }
            },
        },

        created() {
            if ( this.$route.path === '/login' ) {
                this.$store.dispatch('HIDE_HEADER');
            } else {
                this.$store.dispatch('SHOW_HEADER');
            }
        }
    }
</script>

<style>
    .a-header-title {
        z-index: 2;
        font-size: 20px;
        margin: 0 auto;
    }

    .title-text {
        font-size: 16px;
    }

</style>