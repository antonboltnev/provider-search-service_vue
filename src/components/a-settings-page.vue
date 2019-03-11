<template>
    <div class="a-settings-page">
        <div class="setting-types">
            <p>Открыть доступ поставщикам к моим данным</p>
            <div class="type-checkbox">
                <label class="switch">
                    <input type="checkbox" checked="checked">
                    <div class="checkbox"></div>
                </label>
            </div>
        </div>
        <div class="setting-types">
            <p>Получать уведомления</p>
            <div class="type-checkbox">
                <label class="switch">
                    <input type="checkbox" checked="checked">
                    <div class="checkbox"></div>
                </label>
            </div>
        </div>
        <div class="setting-types">
            <p>Следить за изменениями каталога поставщиков в избранном</p>
            <div class="type-checkbox">
                <label class="switch">
                    <input type="checkbox" checked="checked">
                    <div class="checkbox"></div>
                </label>
            </div>
        </div>
        <div class="setting-types">
            <p>Получать новости о ресурсе</p>
            <div class="type-checkbox">
                <label class="switch">
                    <input type="checkbox" checked="checked">
                    <div class="checkbox"></div>
                </label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "a-settings-page",
        data() {
           return {

           }
        },
    }
</script>

<style scoped>
    .a-settings-page {
        margin-top: 40px;
    }

    .setting-types {
        display: flex;
        justify-content: space-between;
        align-items: center;
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
        background: linear-gradient(45deg, #3edc83, #32beff);
    }
</style>