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
a {
    font-size: .98em;
}


</style>
