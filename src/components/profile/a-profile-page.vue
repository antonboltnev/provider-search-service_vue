<template>
  <div class='a-profile-page'>
    <form action="" id="profile-form">
      <div class="profile-input-wrapper">
        <p class="input-title">Name:</p>
        <input
                type="text"
                v-model="getUserData.name"
                :disabled="canEditProfileInfo">
      </div>
      <div class="profile-input-wrapper">
        <p class="input-title">Email:</p>
        <input
                type="email"
                v-model="getUserData.email"
                :disabled="true">
      </div>
      <div class="profile-input-wrapper">
        <p class="input-title">Phone:</p>
        <masked-input
                type="tel"
                v-model="getUserData.phone"
                :disabled="canEditProfileInfo"
                mask="\+\7 (111) 111-11-11"
                @input="rawVal = arguments[1]"
                placeholder="Phone"
        />
      </div>
      <v-btn dark class="edit-profile-info bg-color2" v-if="canEditProfileInfo" @click="editInfo">Edit</v-btn>
      <v-btn dark class="edit-profile-info bg-color2" v-if="!canEditProfileInfo" @click="saveInfo">Save</v-btn>
    </form>
  </div>
</template>

<script>
  import MaskedInput from 'vue-masked-input'
  import {usersRef} from '../../firebaseDB'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: "a-profile-page",
    components: {
      MaskedInput
    },
    firebase: {
      usersDb: usersRef
    },
    data() {
      return {
        canEditProfileInfo: true,
      }
    },
    computed: {
      ...mapGetters([
        'USERS'
      ]),
      getUserData() {
        return this.USERS[0]
      }
    },
    methods: {
      ...mapActions([
        'EDIT_PROFILE',
        'SET_HEADER_TEXT'
      ]),
      editInfo() {
        this.canEditProfileInfo = !this.canEditProfileInfo;
      },
      saveInfo() {
        this.canEditProfileInfo = !this.canEditProfileInfo;
        let user;
        let userIndex;
        for (user of this.usersDb) {
          userIndex = this.usersDb.indexOf(user);
        }
        this.usersDb[userIndex].name = this.getUserData.name;
        this.usersDb[userIndex].phone = this.getUserData.phone;
        this.EDIT_PROFILE(this.getUserData);
      }
    },
    mounted() {
      this.SET_HEADER_TEXT('Profile');
    },
  }
</script>

<style>
  .a-profile-page form {
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
    -webkit-box-shadow: inset 0 1px 7px 0 #d8d8d8;
  }

  .profile-input-wrapper input:disabled {
    background: #e6e6e6;
    color: #aeaeae !important;
  }

  .edit-profile-info {
    width: 100%;
  }
</style>