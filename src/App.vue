<template>
  <div>
    <the-header />
    <view-wallet />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from "@/components/layouts/TheHeader.vue";
import TheFooter from "@/components/layouts/TheFooter.vue";
import ViewWallet from "@/views/ViewWallet.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    ViewWallet,
  },
};
</script>


<style lang="sass">
</style>
