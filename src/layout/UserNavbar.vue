<template>
  <div>
    <!--TOPfixednavbar Start-->
    <nav
      aria-label="user-navbar"
      class="navbar sticky-top navbar-expand-md navbar-light bg-light"
    >
      <div class="container">
        <div class="col-sm-1 col-md-1 col-lg-1 .col-xl-1 col-1">
          <b-button v-b-toggle.sidebar-no-header class="rounded-circle px-2">
            <b-icon icon="three-dots-vertical" aria-label="sidebar"></b-icon>
          </b-button>
        </div>
        <div class="col-sm-2 col-md-2 col-lg-2 .col-xl-2 col-2">
          <a class="navbar-brand" href="#">
            <img
              src="https://wiki.ead.pucv.cl/images/b/b2/Virtualio_logo.svg"
              alt=""
              width="162"
              height="43.31"
            />
          </a>
        </div>
        <button
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          class="navbar-toggler"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <b-avatar
                src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29uYXxlbnwwfHwwfHw%3D&w=1000&q=80"
              ></b-avatar>
              User Name
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </div>
      </div>
    </nav>
    <!--TOPfixednavbar End-->

    
    <b-sidebar
      id="sidebar-no-header"
      aria-labelledby="sidebar-no-header-title"
      aria-label="virtualio side-bar"
      no-header
      shadow
      :backdrop-variant="variant"
      backdrop
    >
      <template #default="{ hide }">
        <div class="p-3">
          <b-container fluid class="text-light text-center">
            <b-row class="mb-3">
              <b-col
                id="sidebar-no-header-title"
                cols="auto"
                class="mr-auto p-3"
              >
                <a class="navbar-brand" href="#">
                  <img
                    src="https://wiki.ead.pucv.cl/images/b/b2/Virtualio_logo.svg"
                    alt=""
                    width="162"
                    height="43.31"
                  />
                </a>
              </b-col>
              <b-col cols="auto" class="pl-3 py-3 pl-0">
                <b-button block @click="hide" class="rounded-circle px-2">
                  <b-icon icon="x" aria-label="close menu"></b-icon>
                </b-button>
              </b-col>
            </b-row>
          </b-container>
          <nav class="mb-3 mt-5" aria-label="sidebar options">
            <b-nav vertical>
              <b-nav-item href="">
                <b-icon
                  class="mx-1"
                  icon="person-circle"
                  aria-label="virtual machines"
                ></b-icon>
                El meu perfil
              </b-nav-item>
              <b-nav-item href="">
                <b-icon
                  class="mx-1"
                  icon="laptop"
                  aria-label="virtual machines"
                ></b-icon>
                Las meves màquines
              </b-nav-item>
            </b-nav>
          </nav>
          <router-link :to="{ name: createVm }">
            <b-button variant="outline-primary" block class="mb-2 py-3 px-5">
              Crear màquina virtual
              <b-icon icon="plus-circle-fill" aria-hidden="true"></b-icon>
            </b-button>
          </router-link>
        </div>



      </template>
    </b-sidebar>
  </div>



</template>

<script>
export default {
  name: "UserNavbar",
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
.dropdown-header {
  visibility: hidden;
}

hr .b-dropdown-divider {
  color: #0d6efd;
  opacity: 100%;
}
</style>
