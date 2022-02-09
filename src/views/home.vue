<template>
  <div>
    <Navbar />
    <LoginSection />
    <SobreVirtualio />
    <GoogleMap/>
    <ContactForm />
  </div>
  
</template>

<script>
import Navbar from "../layout/Navbar.vue";
import LoginSection from "../components/LoginSection.vue";
import SobreVirtualio from "../components/SobreVirtualio.vue";
import GoogleMap from "../components/GoogleMap.vue";
import ContactForm from "../components/ContactForm.vue";

export default {
  name: "App",
  components: {
    Navbar,
    LoginSection,
    SobreVirtualio,
    GoogleMap,
    ContactForm
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
