<template>
  <section id="WelcomeUser">
    <!-- debe estar config para que se  muestre sólo sí se crea una mv-->
    <b-card
      v-if="user"
      bg-variant="white"
      text-variant="dark"
      class="border-0 shadow my-5"
    >
      <h3>¡Bienvenid@ {{ user.name }}!</h3>
      <b-card-text>
        {{ user.email }}
      </b-card-text>
      <CreateVM />
      <b-button href="#" @click="showModal" variant="primary" class="ml-0">
        Crear Máquina Virtual
      </b-button>
    </b-card>
  </section>
</template>

<script>
import User from "../apis/User";
import CreateVM from "./CreateVM.vue";


export default {
  name: "WelcomeUser",
  components: {
    CreateVM,
  },
  data: function () {
    return {
      user: null,
    };
  },
  mounted() {
    User.auth.then((response) => {
      this.user = response.data;
    });
  },
};
</script>

<style scoped>
</style>

