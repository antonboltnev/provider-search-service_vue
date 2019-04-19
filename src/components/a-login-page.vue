<template>
    <div class='a-login-page'>
        <h1 class="main-title">Easy way to find <span class="underlined">reliable</span> providers</h1>
        <div class="a-login-page-input_wrapper" v-if="!this.auth && this.loginTab">
            <h1 v-if="!this.auth">Sign In</h1>
            <form id="auth-form" action="#">
                <span class="input_error_msg" v-if="showError">{{ this.$store.state.errorMessages.authError }}</span>
                <input type="text"
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
                    <button type="submit" class="login-confirm-btn btn btn-big bg-color2" @click="confirmLogin">Confirm</button>
                    <br>
                    <span>or <span class="switch-tabs" @click="registrationTab">Sign Up</span></span>
                </div>
            </form>
        </div>
        <div class="a-registation-tab" v-if="!this.isRegistered && !this.loginTab">
                <h1 v-if="!this.auth">Sign Up</h1>
                <form id="reg-form" action="#">
                    <div class="a-login-page-input_wrapper">
                        <span class="password-error" v-if="emptyFieldError">{{ this.$store.state.errorMessages.emptyFields }}</span>
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
                        >
                        <masked-input
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
                        >
                        <input type="password"
                               v-model="confirmPasswordField"
                               required
                               placeholder="Confirm password*"
                        >
                        <div class="a-login-page_confirm">
                            <button type="submit" class="login-confirm-btn btn btn-big bg-color2" @click="confirmRegistration">Confirm</button>
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

    export default {
        name: "a-login-page",
        components: {
            MaskedInput
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
                if ( this.$store.state.users.length ) {
                for (let i = 0; i < this.$store.state.users.length; i++) {
                    if ( (this.$store.state.users[i].email.length) && (this.$store.state.users[i].email === this.authLogin) && (this.$store.state.users[i].pass === this.authPass)) {
                        let vm = this;
                        setTimeout(function () {
                            vm.$store.dispatch('SUCCESS_AUTH');
                            setTimeout(function () {
                                vm.$router.push('/home');
                            }, 1500);
                        }, 500);
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
                let vm = this;
                var payload = {
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
                    localStorage.setItem('user', JSON.stringify(payload));
                    this.$store.dispatch('REGISTRATION', JSON.parse(localStorage.getItem("user")));
                    this.$store.dispatch('SUCCESS_REGISTRATION');
                    setTimeout(function () {
                        vm.$router.push('/home');
                    }, 1500);
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
            var vm = this;
            window.addEventListener('keyup', function(event) {
                if (event.keyCode === 13) {
                    vm.confirmLogin();
                }
            });
        }
    }
</script>

<style scoped>
    .a-login-page {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        background: url(../../public/img/groccery-bg.jpg) no-repeat center;
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
        margin: 5px 0 20px 0;
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

    .input_error_msg {
        color: red;
        padding-bottom: 10px;
    }

    .password-error {
        color: red;
    }

    .login-confirm-btn {
        -webkit-appearance: none;
        border: 0;
        margin-bottom: 30px;
        box-shadow: none !important;
    }
</style>