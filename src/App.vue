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

  // Import Bootstrap and BootstrapVue source SCSS files
@import "/../m6_virtualio_sprint2/node_modules/bootstrap/scss/bootstrap.scss";
@import "/../m6_virtualio_sprint2/node_modules/bootstrap-vue/src/index.scss";


</style>
