<template>
    <ul class="a-main-menu">
        <li>
          <router-link to="/">
            <div>
              <icon name="home"></icon>
            </div>
          </router-link>
        </li>
        <li><router-link to="/">
          <div>
            <icon name="envelope"></icon>
          </div>
          </router-link>
        </li>
        <li>
          <router-link to="/customer-cabinet">
            <div>
              <icon name="user"></icon>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <div>
              <icon name="cog"></icon>
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
        padding: 10px 5px 3px 5px;
        background: #4192e8;
    }

    .a-main-menu li {
        list-style: none;
        padding: 10px 20px;
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
</style>
