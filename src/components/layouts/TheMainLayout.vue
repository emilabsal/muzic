<template>
  <div class="main-layout">
    <the-header />
    <main class="main-layout-content">
      <router-view></router-view>
    </main>
    <the-footer />
  </div>
</template>

<script>
import TheHeader from "@/components/layouts/TheHeader.vue";
import TheFooter from "@/components/layouts/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="sass" scoped>
.main-layout
  display: flex
  flex-direction: column
  min-height: 100vh
  &-content
    flex-grow: 1
</style>
