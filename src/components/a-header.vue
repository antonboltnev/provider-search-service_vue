<template>
    <header class="a-header-title" v-if="IS_HEADER_VISIBLE">
        <span class="title-text">{{ PAGE_TITLE }}</span>
    </header>
</template>

<script>
    import {mapActions,mapGetters} from 'vuex'
    export default {
        name: "a-header",
        data() {
            return {
            }
        },
        computed: {
            ...mapGetters([
                "IS_HEADER_VISIBLE",
                "PAGE_TITLE"
            ]),
        },
        methods: {
            ...mapActions([
                'HIDE_HEADER',
                'SHOW_HEADER'
            ]),
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