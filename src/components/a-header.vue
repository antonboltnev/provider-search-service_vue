<template>
    <header class="a-header-title" v-if="toggleHeaderVisibility">
        <span class="title-text">{{ pageTitle }}</span>
    </header>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: "a-header",
        data() {
            return {
            }
        },
        computed: {
            ...mapActions([
                'HIDE_HEADER',
                'SHOW_HEADER'
            ]),
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
                    this.HIDE_HEADER;
                } else {
                    this.SHOW_HEADER;
                }
            },
        },

        created() {
            if ( this.$route.path === '/login' ) {
                this.HIDE_HEADER;
            } else {
                this.SHOW_HEADER;
            }
        }
    }
</script>

<style>
    .a-header-title {
        z-index: 2;
        font-size: 20px;
        margin: 0 auto;
        padding: 10px 0;
    }

    .title-text {
        font-size: 16px;
    }

</style>