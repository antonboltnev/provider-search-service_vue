<template>
    <ul class="a-main-menu">
        <li>
          <router-link to="/">
            <div class="menu_a">
              <icon name="home"></icon>
                <span>Главная</span>
            </div>
          </router-link>
        </li>
        <li><router-link to="/">
          <div class="menu_a">
            <icon name="envelope"></icon>
              <span>Сообщения</span>
          </div>
          </router-link>
        </li>
        <li>
          <router-link to="/customer-cabinet">
            <div class="menu_a">
              <icon name="user"></icon>
                <span>Кабинет</span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <div class="menu_a">
              <icon name="cart-arrow-down"></icon>
                <span>Заказы</span>
            </div>
          </router-link>
        </li>
    </ul>
</template>

<script>
import Icon from 'vue-awesome/components/Icon'

    export default {
        name: "a-main-menu",
        components: {
          Icon
        }
    }
</script>

<style scoped>
    .a-main-menu {
        display: flex;
        width: 100%;
        justify-content: space-around;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 0 5px 3px 5px;
        background: #4192e8;
        border-top: solid 1px #fff;
    }

    .a-main-menu li {
        list-style: none;
        padding: 10px 10px;
        border-radius: 3px;
        transition: .2s;
        cursor: pointer;
        flex: 0 0 10%;
    }

    .a-main-menu li:active {
        box-shadow: inset 0 1px 15px 2px #c58c09;
        color: #757575;
        transition: .2s;
    }

    .a-main-menu a {
        text-decoration: none;
        color: #fff;
    }

    .a-main-menu a svg {
        width: 30px;
        height: 30px;
    }

    .menu_a {
        font-size: 12px;
    }
</style>
