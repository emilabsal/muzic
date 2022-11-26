<template>
  <footer class="footer">
    <div class="container footer-inner">
      <router-link to="/">
        <img src="@/assets/images/logo.svg" alt="logo" />
      </router-link>
      <p class="footer-policy typography-link">Политика конфиденциальности</p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.footer
  padding: 23px 0
  background-color: $light
  min-height: 114px
  +flex()
  +xs()
    padding: 20px 0
    min-height: initial
  &-inner
    +flex($jc: space-between)
    +xs()
      flex-direction: column
      justify-content: center
      gap: 20px
  &-policy
    color: $policy
</style>