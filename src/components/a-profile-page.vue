<template>
    <div class='a-profile-page'>
        <form action="" id="profile-form">
            <div class="profile-input-wrapper">
                <p class="input-title">Name:</p>
                <input type="text" :value="getUserData.name" disabled>
            </div>
            <div class="profile-input-wrapper">
                <p class="input-title">Email:</p>
                <input type="text" :value="getUserData.email" disabled>
            </div>
            <div class="profile-input-wrapper">
                <p class="input-title">Phone:</p>
                <input type="text" :value="getUserData.phone" disabled>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "a-profile-page",
        data() {
            return {
                userData: [],
            }
        },
        computed: {
           getUserData() {
               return this.$store.state.users[0];
           }
        },
        mounted() {
            this.$store.dispatch('SET_HEADER_TEXT', 'Profile');
        },
    }
</script>

<style scoped>
    form {
        margin: 100px auto 0 auto;
        max-width: 300px;
    }

    .profile-input-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px 0;
    }

    .profile-input-wrapper input {
        color: #797979;
        padding: 10px;
        background: transparent;
        border-radius: 3px;
        border: 0;
        font-size: 16px;
        box-shadow: inset 0 1px 7px 0 #d8d8d8;
    }

    .profile-input-wrapper input:disabled {
        background: transparent;
    }
</style>