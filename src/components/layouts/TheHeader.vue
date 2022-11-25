<template>
  <header class="header">
    <div class="container header-inner">
      <router-link to="/">
        <img src="@/assets/images/logo.svg" alt="logo" />
      </router-link>
      <nav class="header-menu">
        <ul class="header-list">
          <li v-for="(link, index) in links" :key="index">
            <router-link class="header-link" to="/">
              <base-icon :name="link.icon" />
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </nav>
      <button class="header-mobile-menu">
        <base-icon name="burger" />
      </button>
    </div>
  </header>
</template>

<script>
import BaseIcon from "@/components/base/BaseIcon.vue";

export default {
  components: {
    BaseIcon,
  },
  data() {
    return {
      links: [
        { name: "Профиль", icon: "profile" },
        { name: "Рецензии", icon: "review" },
        { name: "Кошелек", icon: "wallet" },
        { name: "Настройки", icon: "settings" },
        { name: "Выйти", icon: "logout" },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
.header
  padding: 23px 0
  background-color: #fff
  +sm()
    padding: 0
  &-menu
    +sm()
      display: none
  &-inner
    display: flex
    align-items: center
    justify-content: space-between
  &-list
    gap: 30px
  &-link
    display: flex
    align-items: center
    gap: 10px
    font-size: 16px
    line-height: 19px
    letter-spacing: -4%
  &-mobile-menu
    display: none
    position: relative
    right: -24px
    +sm()
      display: flex
</style>