<template>
  <b-navbar fluid toggleable="lg" type="light" variant="light" class="m-0">
    <b-container>
      <b-navbar-brand href="#">
        <img
          src="https://wiki.ead.pucv.cl/images/b/b2/Virtualio_logo.svg"
          alt=""
          width="162"
          height="43.31"
        />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content> 
              <b-avatar
                src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29uYXxlbnwwfHwwfHw%3D&w=1000&q=80"
                class="mr-2"
                size="36px"
              >
              </b-avatar>
              User Name 
            </template>
            <b-dropdown-item href="#">El meu perfil</b-dropdown-item>
            <b-dropdown-item href="#">Sortir</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: "UserNavbarSprint3",
  data() {
    return {
      variant: "dark",
      variants: [
        "transparent",
        "white",
        "light",
        "dark",
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
