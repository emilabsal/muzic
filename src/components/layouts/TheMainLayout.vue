<template>
  <the-header />
  <main>
    <router-view></router-view>
  </main>
  <the-footer />
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
