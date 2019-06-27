<template>
    <div class="a-settings-page">
        <div class="setting-types">
            <p>Show my profile data to suppliers</p>
            <div class="type-checkbox">
                <label class="switch">
                    <input id="profile-data" type="checkbox" :checked="isProfileChecked" @click="clickInput">
                    <div class="checkbox"></div>
                </label>
            </div>
        </div>
        <div class="setting-types">
            <p>Receive notifications</p>
            <div class="type-checkbox">
                <label class="switch">
                    <input id="notifications" type="checkbox" :checked="isNotifsChecked" @click="clickInput">
                    <div class="checkbox"></div>
                </label>
            </div>
        </div>
        <div class="setting-types">
            <p>Track the updates in supplier's catalogues</p>
            <div class="type-checkbox">
                <label class="switch">
                    <input id="updates" type="checkbox" :checked="isUpdatesChecked" @click="clickInput">
                    <div class="checkbox"></div>
                </label>
            </div>
        </div>
        <div class="setting-types">
            <p>Receive service news</p>
            <div class="type-checkbox">
                <label class="switch">
                    <input id="news" type="checkbox" :checked="isNewsChecked" @click="clickInput">
                    <div class="checkbox"></div>
                </label>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: "a-settings-page",
        data() {
           return {
               isProfileChecked: this.$store.state.preferencesCheckboxes[0].value,
               isNotifsChecked: this.$store.state.preferencesCheckboxes[1].value,
               isUpdatesChecked: this.$store.state.preferencesCheckboxes[2].value,
               isNewsChecked: this.$store.state.preferencesCheckboxes[3].value
           }
        },

        methods: {
            ...mapActions([
                'SET_PREFERENCES_CHECKBOXES'
            ]),
            clickInput(item) {
                for (let checkbox of this.$store.state.preferencesCheckboxes) {
                    if (item.target.id === checkbox.id) {
                        this.SET_PREFERENCES_CHECKBOXES(item.target.id);
                    }
                }
            }
        },
    }
</script>

<style>
    .a-settings-page {
        margin-top: 40px;
    }

    .setting-types {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        text-align: left;
        margin-bottom: 20px;
    }

    .setting-types p {
        max-width: 80%;
    }

    .switch {
        display: inline-block;
        vertical-align: middle;
        width: 52px;
        border-radius: 16px;
        box-sizing: border-box;
        height: 32px;
        cursor: pointer;
        -ms-flex-item-align: center;
        -webkit-align-self: center;
        align-self: center;
        position: relative;
        -webkit-tap-highlight-color: transparent;
    }

    .switch input {
        display: none;
    }

    .switch:after {
        content: " ";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        border: 1px solid #e5e5e5;
        border-radius: 16px;
        transform-origin: 0 0;
        z-index: 0;
        box-sizing: border-box;
    }

    .checkbox {
        width: 52px;
        border-radius: 16px;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        height: 32px;
        z-index: 1;
        margin: 0;
        padding: 0;
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        appearance: none;
        border: none;
        cursor: pointer;
        position: relative;
        transition: .3s;
        -webkit-backface-visibility: hidden;
    }

    .checkbox:before {
        content: " ";
        position: absolute;
        left: 2px;
        top: 2px;
        width: 48px;
        border-radius: 16px;
        box-sizing: border-box;
        height: 28px;
        background: #fff;
        z-index: 1;
        transition: .3s;
        transform: scale(1);
    }

    .checkbox:after {
        content: " ";
        height: 28px;
        width: 28px;
        border-radius: 28px;
        background: #fff;
        position: absolute;
        z-index: 2;
        top: 2px;
        left: 2px;
        box-shadow: 0 2px 5px rgba(0,0,0,.4);
        transform: translateZ(0);
        transition: .3s;
    }

    .switch input[type=checkbox]:checked+.checkbox:before {
        transform: scale(0);
    }

    .switch input[type=checkbox]:checked+.checkbox:after {
        transform: translate3d(20px,0,0);
    }

    .switch input[type=checkbox]:checked+.checkbox {
        background: #41b883;
    }
</style>
