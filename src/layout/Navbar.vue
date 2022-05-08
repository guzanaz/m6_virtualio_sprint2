<template>
  <b-navbar
    fluid
    toggleable="md"
    type="light"
    variant="light"
    class="shadow-sm sticky-top py-3 m-0"
  >
    <b-container>
      <b-navbar-brand href="/home">
        <img
          src="https://wiki.ead.pucv.cl/images/b/b2/Virtualio_logo.svg"
          alt="Virtualio logo"
          width="220px"
          height="auto"
        />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" class="pt-4 pt-md-0" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="align-self-center" href="#">Home</b-nav-item>
          <b-nav-item class="align-self-center" href="#SobreVirtualio"
            >Sobre Virtualio</b-nav-item
          >
          <b-nav-item class="align-self-center" href="#contacte"
            >Contacte</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>


<script>
export default {
  name: "Navbar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
