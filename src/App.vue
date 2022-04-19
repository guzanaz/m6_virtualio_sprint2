<template>
  <div id="app">
    <router-view />
    <Footer />
  </div>
</template>

<script>


import Footer from "./layout/Footer.vue";

export default {
  name: "App",
  components: {
    Footer
  },
};
</script>

<style lang="scss" src="./assets/custom.scss">
@import "/assets/custom.scss";

</style>
