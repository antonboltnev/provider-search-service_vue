<template>
    <div class='a-login-page'>
        <h1 v-if="!this.auth">Надобно авторизоваться....</h1>
        <div class="a-login-page-input_wrapper" v-if="!this.auth">
            <input type="text"
                   v-model="loginField"
                   placeholder="Email"
                   class="shadow-border"
            >
            <input type="text"
                   v-model="passwordField"
                   placeholder="Пароль"
                   class="shadow-border"
            >
            <div class="a-login-page_confirm">
                <p class="login-confirm-btn btn btn-big bg-color2" @click="confirmLogin">Войти</p>
                <br>
                <span>или </span><span>Зарегистрироваться</span>
            </div>
        </div>
        <transition name="bounce">
            <div v-if="this.auth" class="a-succes_auth-wrapper">
                <h1>Успешная авторизация!</h1>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "a-login-page",
        data() {
           return {
               loginField: '',
               passwordField: '',
           }
        },
        methods: {
            confirmLogin() {
                for ( let i = 0; i < this.$store.state.users.length; i++ ) {
                    if  ( (this.$store.state.users[i].login === this.loginField) && (this.$store.state.users[i].password === this.passwordField) ) {
                        let vm = this;
                        setTimeout(function () {
                            vm.$store.dispatch('SUCCESS_AUTH');
                            setTimeout(function () {
                                vm.$router.push('/home');
                            }, 1500);
                        }, 500);
                        break;
                    } else {
                        console.log('нет таких пользователей');
                    }
                }
              }
        },

        computed: {
            auth() {
                return this.$store.state.isAuth;
            },
        },

        mounted() {
            var self = this;
            window.addEventListener('keyup', function(event) {
                if (event.keyCode === 13) {
                    self.confirmLogin();
                }
            });
        }
    }
</script>

<style scoped>
    .a-login-page h1 {
        margin-top: 20px;
    }

    .a-login-page-input_wrapper, .a-succes_auth-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        top: 20%;
        right: 0;
        left: 0;
    }

    .a-login-page input {
        width: 70%;
        margin: 5px 0 20px 0;
        padding: 15px 0 15px 10px;
        border: 0;
        -webkit-appearance: none;
    }

    .a-login-page_confirm span:last-of-type {
        text-decoration: underline;
        cursor: pointer;
    }
</style>