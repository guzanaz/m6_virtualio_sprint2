<template>
  <div>
    <!--TOPfixednavbar Start-->
    <nav class="navbar sticky-top navbar-expand-md navbar-light bg-light">
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
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav text-center">
            <li class="nav-item">
              <a class="nav-link" href="#contacte">Contacte</a>
            </li>
          </ul>
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
    >
      <template #default="{ hide }">
        <div class="p-3">
          <b-container fluid class="text-light text-center">
            <b-row class="mb-3">

              <b-col id="sidebar-no-header-title" cols="auto" class="mr-auto p-3">
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
                <b-button block @click="hide" class="rounded-circle px-2" >
                  <b-icon
                    icon="x"
                    aria-label="close menu"
                  ></b-icon>
                </b-button>
              </b-col>
            </b-row>
          </b-container>
          <nav class="mb-3 mt-5" aria-label="sidebar options">
            <b-nav vertical>
              <b-nav-item href="#link-1">El meu perfil</b-nav-item>
              <b-nav-item v-b-toggle.collapse-3 href="#link-2">
                <b-icon
                    class="mx-1"
                    icon="laptop"
                    aria-label="virtual machines"
                  ></b-icon>
                  Las meves màquines
                  <b-icon
                    class="mx-1"
                    icon="caret-down-fill"
                    aria-label="virtual machines"
                  ></b-icon>
                  </b-nav-item>
                  
              <b-collapse visible id="collapse-3">
                <hr>
                  <b-nav-item>I should start open!</b-nav-item>
              </b-collapse>
            </b-nav>
          </nav>

          <b-button variant="outline-primary" block class="mb-2 px-5">
           Crear màquina virtual <b-icon icon="plus-circle-fill" aria-hidden="true"></b-icon>
          </b-button>
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
</style>
