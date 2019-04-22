<template>
    <div class='a-profile-page'>
        <form action="" id="profile-form">
            <div class="profile-input-wrapper">
                <p class="input-title">Name:</p>
                <input type="text" :value="getUserData.name" :disabled="this.editProfileInfo">
            </div>
            <div class="profile-input-wrapper">
                <p class="input-title">Email:</p>
                <input type="text" :value="getUserData.email" :disabled="this.editProfileInfo">
            </div>
            <div class="profile-input-wrapper">
                <p class="input-title">Phone:</p>
                <input type="text" :value="getUserData.phone" :disabled="this.editProfileInfo">
            </div>
            <div class="edit-profile-info btn bg-color2" v-if="editProfileInfo" @click="editInfo">Edit</div>
            <div class="edit-profile-info btn bg-color2" v-if="!editProfileInfo" @click="saveInfo">Save</div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "a-profile-page",
        data() {
            return {
                editProfileInfo: true,
            }
        },
        computed: {
           getUserData() {
               return this.$store.state.users[0];
           }
        },
        methods: {
            editInfo() {
                this.editProfileInfo = !this.editProfileInfo;
            },
            saveInfo() {
                this.editProfileInfo = !this.editProfileInfo;
                this.$store.dispatch('EDIT_PROFILE', this.getUserData);
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
    
    .input-title {
        color: #797979;
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
        background: #e6e6e6;
        color: #aeaeae;
    }
</style>