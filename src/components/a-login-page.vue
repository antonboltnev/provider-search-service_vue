<template>
    <div class='a-login-page'>
        <h1 class="main-title" v-if="!this.isRegistered && !this.auth">Easy way to find <span class="underlined">reliable</span> providers</h1>
        <div class="a-login-page-input_wrapper" v-if="!this.auth && this.loginTab">
            <h1 v-if="!this.auth">Sign In</h1>
            <form id="auth-form" action="#">
                <p class="input_error_msg" v-if="showError">{{ this.$store.state.errorMessages.authError }}</p>
                <input type="email"
                       v-model="authLogin"
                       placeholder="Email"
                       required
                >
                <input type="password"
                       v-model="authPass"
                       placeholder="Password"
                       required
                >
                <div class="a-login-page_confirm">
                    <button class="login-confirm-btn btn btn-big bg-color2" @click="confirmLogin">Confirm</button>
                    <br>
                    <span>or <span class="switch-tabs" @click="registrationTab">Sign Up</span></span>
                </div>
            </form>
        </div>
        <div class="a-registation-tab" v-if="!this.isRegistered && !this.loginTab">
                <h1 v-if="!this.auth">Sign Up</h1>
                <form id="reg-form" action="#">
                    <div class="a-login-page-input_wrapper">
                        <p class="password-error" v-if="emptyFieldError">{{ this.$store.state.errorMessages.emptyFields }}</p>
                        <input type="text"
                               v-model="nameField"
                               required
                               placeholder="First Name*"
                               @keyup="clearErrorName"
                        >
                        <input type="email"
                               v-model="emailField"
                               required
                               placeholder="Email*"
                               @keyup="clearErrorName"
                        >
                        <masked-input
                                type="tel"
                                v-model="phoneField"
                                mask="\+\7 (111) 111-11-11"
                                @input="rawVal = arguments[1]"
                                placeholder="Phone"
                        />
                        <span class="password-error" v-if="!passwordsOk">{{ this.$store.state.errorMessages.registerPassConfirm }}</span>
                        <input type="password"
                               v-model="passwordField"
                               required
                               placeholder="Password*"
                               @keyup="clearErrorPass"
                               @keydown="clearErrorName"
                        >
                        <input type="password"
                               v-model="confirmPasswordField"
                               required
                               placeholder="Confirm password*"
                               @keyup="clearErrorPass"
                        >
                        <div class="a-login-page_confirm">
                            <button class="login-confirm-btn btn btn-big bg-color2" @click="confirmRegistration">Confirm</button>
                            <br>
                            <span>or <span class="switch-tabs" @click="registrationTab">Sign In</span></span>
                        </div>
                    </div>
                </form>
            </div>
        <transition name="bounce">
            <div v-if="this.auth" class="a-succes_auth-wrapper">
                <h2>Success!</h2>
            </div>
        </transition>
        <transition name="bounce">
            <div v-if="this.isRegistered" class="a-succes_auth-wrapper">
                <h2>Success!</h2>
            </div>
        </transition>
    </div>
</template>

<script>

    import  MaskedInput from 'vue-masked-input'
    import {usersRef} from '../firebaseDB'

    export default {
        name: "a-login-page",
        components: {
            MaskedInput
        },
        firebase: {
           usersDb: usersRef
        },
        data() {
           return {
               authLogin: '',
               authPass: '',
               emailField: '',
               nameField: '',
               phoneField: '',
               passwordField: '',
               confirmPasswordField: '',
               showError: false,
               loginTab: true,
               passwordsOk: true,
               emptyFieldError: false,
           }
        },
        methods: {
            registrationTab() {
                this.loginTab = !this.loginTab;
            },
            confirmLogin() {
                if ( this.usersDb.length ) {
                for (let item of  this.usersDb) {
                    if ( (item.email) && (item.email === this.authLogin.toLocaleLowerCase()) && (item.pass === this.authPass)) {
                        let vm = this;
                        vm.$store.dispatch('SUCCESS_AUTH', item);
                        this.showError = false;
                        break;
                    } else {
                        this.showError = true;
                    }
                }
            }
                else {
                    this.showError = true;
                }
              },

            confirmRegistration() {
                let payload = {
                    name: this.nameField,
                    email: this.emailField,
                    phone: this.phoneField,
                    pass: this.passwordField,
                };
                if ( this.confirmPasswordField !== this.passwordField ) {
                    this.passwordsOk = false;
                    return false;
                }
                if ( !this.nameField.length || !this.emailField.length || !this.passwordField.length ) {
                    this.emptyFieldError = true;
                    return false;
                }
                    this.passwordsOk = true;
                    this.emptyFieldError = false;
                    this.$store.dispatch('REGISTRATION', payload);
                    usersRef.push(payload).then(() => {
                        this.$store.dispatch('SUCCESS_REGISTRATION');
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
            isRegistered() {
               return this.$store.state.isRegistered;
            },
            auth() {
                return this.$store.state.isAuth;
            },
        },

        mounted() {
            let vm = this;
            window.addEventListener('keyup', function(event) {
                if (event.keyCode === 13) {
                    vm.confirmLogin();
                }
            });
        }
    }
</script>

<style>
    .a-login-page {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }

    .a-login-page h1 {
        margin: 20px 0;
        color: #fff;
        font-size: 1.3em;
    }

    .a-login-page h1.main-title {
        font-size: 1.8em;
        text-transform: uppercase;
    }

    .underlined {
        background: linear-gradient(135deg, #00f791 20%, #00b6bc 70%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .a-login-page h2 {
        color: #fff;
    }

    .a-login-page-input_wrapper, .a-succes_auth-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .a-login-page_confirm {
        width: 100%;
        padding-bottom: 20px;
    }

    .a-login-page input {
        width: 70%;
        margin: 5px 0 10px 0;
        padding: 15px 0 15px 10px;
        border: 0;
        -webkit-appearance: none;
        border-bottom: solid 1px #fff;
        background: transparent;
        color: #fff;
    }

    .a-login-page input::placeholder {
        color: #fff;
    }

    .a-login-page_confirm span {
        color: #fff;
    }

    .switch-tabs {
        text-decoration: underline;
        cursor: pointer;
    }

    #auth-form, #reg-form {
        position: relative;
    }

    .input_error_msg, .password-error {
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

    .login-confirm-btn {
        -webkit-appearance: none;
        border: 0;
        margin-bottom: 30px;
        box-shadow: none !important;
    }
</style>
