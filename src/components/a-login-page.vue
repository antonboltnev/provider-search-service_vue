<template>
  <v-container class="a-login-page">
    <h1 class="main-title" v-if="!isRegistered && !auth">
      Easy way to find
      <span class="underlined">reliable</span> suppliers
    </h1>
    <div class="a-login-page-input_wrapper" v-if="!auth && loginTab">
      <h1 v-if="!auth">Sign In</h1>
      <v-form id="auth-form" action="#">
        <p class="input_error_msg" v-if="showError">{{ ERROR_MSGS.authError }}</p>
        <v-text-field type="email" v-model="authLogin" label="Email" required dark color="#fff"></v-text-field>
        <v-text-field
                type="password"
                v-model="authPass"
                label="Password"
                required
                dark
                color="#fff"
        ></v-text-field>
        <div class="a-login-page_confirm">
          <v-btn class="login-confirm-btn bg-color2" dark @click="confirmLogin">Confirm</v-btn>
          <br/>
          <span>
            or
            <span class="switch-tabs" @click="registrationTab">Sign Up</span>
          </span>
        </div>
      </v-form>
    </div>
    <div class="a-login-page-input_wrapper" v-if="!isRegistered && !loginTab">
      <h1 v-if="!auth">Sign Up</h1>
      <v-form id="reg-form" action="#">
        <p
                class="password-error"
                v-if="emptyFieldError"
        >{{ ERROR_MSGS.emptyFields }}</p>
        <v-text-field
                label="First name"
                v-model="nameField"
                required
                @keyup="clearErrorName"
                dark
                color="#fff"
        ></v-text-field>
        <v-text-field
                v-model="emailField"
                required
                label="Email*"
                @keyup="clearErrorName"
                dark
                color="#fff"
        ></v-text-field>
        <v-text-field v-model="phoneField" mask="(###) ###-##-##" label="Phone" dark color="#fff"></v-text-field>
        <span
                class="password-error"
                v-if="!passwordsOk"
        >{{ ERROR_MSGS.registerPassConfirm }}</span>
        <v-text-field
                type="password"
                v-model="passwordField"
                required
                label="Password*"
                @keyup="clearErrorPass"
                @keydown="clearErrorName"
                dark
                color="#fff"
        ></v-text-field>
        <v-text-field
                type="password"
                v-model="confirmPasswordField"
                required
                label="Confirm password*"
                @keyup="clearErrorPass"
                dark
                color="#fff"
        ></v-text-field>
        <div class="a-login-page_confirm">
          <v-btn class="login-confirm-btn bg-color2" dark @click="confirmRegistration">Confirm</v-btn>
          <br/>
          <span>
            or
            <span class="switch-tabs" @click="registrationTab">Sign In</span>
          </span>
        </div>
      </v-form>
    </div>
    <transition name="bounce">
      <div v-if="auth" class="a-succes_auth-wrapper">
        <h2>Success!</h2>
      </div>
    </transition>
    <transition name="bounce">
      <div v-if="isRegistered" class="a-succes_auth-wrapper">
        <h2>Success!</h2>
      </div>
    </transition>
  </v-container>
</template>

<script>
  import {usersRef} from "../firebaseDB";
  import {mapActions, mapGetters} from "vuex";

  export default {
    name: "a-login-page",
    firebase: {
      usersDb: usersRef
    },
    data() {
      return {
        authLogin: "",
        authPass: "",
        emailField: "",
        nameField: "",
        phoneField: "",
        passwordField: "",
        confirmPasswordField: "",
        showError: false,
        loginTab: true,
        passwordsOk: true,
        emptyFieldError: false
      };
    },
    methods: {
      ...mapActions([
        "REGISTRATION",
        "SUCCESS_AUTH",
        "SUCCESS_REGISTRATION"
      ]),
      registrationTab() {
        this.loginTab = !this.loginTab;
      },
      confirmLogin() {
        if (this.usersDb.length) {
          for (let user of this.usersDb) {
            if (
                user.email &&
                user.email === this.authLogin.toLocaleLowerCase() &&
                user.pass === this.authPass
            ) {
              this.SUCCESS_AUTH(user);
              this.showError = false;
              break;
            } else {
              this.showError = true;
            }
          }
        } else {
          this.showError = true;
        }
      },

      confirmRegistration() {
        let regData = {
          name: this.nameField,
          email: this.emailField,
          phone: this.phoneField,
          pass: this.passwordField
        };
        if (this.confirmPasswordField !== this.passwordField) {
          this.passwordsOk = false;
          return false;
        }
        if (
            !this.nameField.length ||
            !this.emailField.length ||
            !this.passwordField.length
        ) {
          this.emptyFieldError = true;
          return false;
        }
        this.passwordsOk = true;
        this.emptyFieldError = false;
        this.REGISTRATION(regData);
        usersRef.push(regData).then(() => {
          this.SUCCESS_REGISTRATION();
        });
      },

      clearErrorPass() {
        this.passwordsOk = true;
      },
      clearErrorName() {
        this.emptyFieldError = false;
      }
    },

    computed: {
      ...mapGetters([
        "ERROR_MSGS",
        "IS_REGISTERED",
        "IS_AUTH"
      ]),
      isRegistered() {
        return this.IS_REGISTERED;
      },
      auth() {
        return this.IS_AUTH;
      }
    },

    mounted() {
      let vm = this;
      window.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
          vm.confirmLogin();
        }
      });
    }
  };
</script>

<style>
  .a-login-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .a-login-page h1 {
    margin: 20px 0;
    color: #fff;
    font-size: 1.3em;
  }

  .a-login-page h1.main-title {
    font-size: 1.5em;
    text-transform: uppercase;
  }

  .underlined {
    background: #fdf966;
    font-size: 40px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .a-login-page h2 {
    color: #fff;
  }

  .a-login-page-input_wrapper,
  .a-succes_auth-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 400px;
  }

  .a-login-page-input_wrapper .v-text-field__slot label,
  .a-login-page-input_wrapper .v-text-field__slot input {
    padding-left: 10px;
  }

  .a-login-page_confirm {
    /*padding-bottom: 40px;*/
  }

  .a-login-page_confirm span {
    color: #fff;
  }

  .switch-tabs {
    text-decoration: underline;
    cursor: pointer;
  }

  #auth-form,
  #reg-form {
    position: relative;
  }

  .input_error_msg,
  .password-error {
    color: #ff5555;
    padding-bottom: 10px;
    position: absolute;
    top: -15px;
    right: 0;
    left: 0;
  }

  .password-error {
    color: #ff5555;
  }

  .v-input {
    width: 300px;
  }

  .a-login-page .theme--dark.v-label {
    color: #fff;
  }

  .login-confirm-btn {
    width: 70%;
    -webkit-appearance: none;
    border: 0;
    margin-bottom: 30px;
    box-shadow: none !important;
  }
</style>
