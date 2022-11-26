<template>
  <header class="header">
    <div class="container header-inner">
      <router-link to="/">
        <img src="@/assets/images/logo.svg" alt="logo" />
      </router-link>
      <nav class="header-menu">
        <ul class="header-list">
          <li v-for="(link, index) in links" :key="index">
            <router-link class="header-link typography-link" :to="link.link">
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
        { link: "/", name: "Профиль", icon: "profile" },
        { link: "/", name: "Рецензии", icon: "review" },
        { link: "/", name: "Кошелек", icon: "wallet" },
        { link: "/", name: "Настройки", icon: "settings" },
        { link: "/", name: "Выйти", icon: "logout" },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
.header
  padding: 23px 0
  background-color: $light
  min-height: 75px
  +sm()
    padding: 0
    min-height: initial
  &-menu
    +sm()
      display: none
  &-inner
    +flex($jc: space-between)
  &-list
    gap: 30px
  &-link
    display: flex
    align-items: center
    gap: 10px
    font-weight: 500
  &-mobile-menu
    display: none
    position: relative
    right: -24px
    +sm()
      display: flex
</style>