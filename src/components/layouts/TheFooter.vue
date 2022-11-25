<template>
  <footer class="footer">
    <div class="container footer-inner">
      <router-link to="/">
        <img src="@/assets/images/logo.svg" alt="logo" />
      </router-link>
      <p class="footer-policy">Политика конфиденциальности</p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.footer
  padding: 23px 0
  background-color: #fff
  +xs()
    padding: 20px 0
  &-inner
    display: flex
    align-items: center
    justify-content: space-between
    +xs()
      flex-direction: column
      justify-content: center
      gap: 20px
  &-policy
    font-size: 16px
    line-height: 160%
    letter-spacing: -4%
    +xs()
      font-size: 12px
</style>