<template>
    <option :value="category_data">{{ category_data }}</option>
</template>

<script>
    export default {
        name: "a-seller-catalog-select-option",
        props: {
            category_data: {
                type: String,
                default: '',
            }
        },
    }
</script>
