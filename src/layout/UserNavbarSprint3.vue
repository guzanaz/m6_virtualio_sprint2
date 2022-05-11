<template>
  <b-navbar 
  fluid
    toggleable="md"
    type="light"
    variant="light"
    class="shadow-sm sticky-top py-3 m-0">
    <b-container>
      <b-navbar-brand href="/home">
        <img
          src="https://wiki.ead.pucv.cl/images/b/b2/Virtualio_logo.svg"
          alt="Virtualio logo"
          width="200"
          height="auto"
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
              {{user.name}} {{user.lastname}}
            </template>
            <b-dropdown-item @click.prevent="logout">Sortir</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
import User from '../apis/User.js';

export default {
  name: "UserNavbarSprint3",

  data() {
    return {
      user:'',
    };
  },
   mounted() {
    //API Call
   User.auth().then(response =>{
     //pushing data
      this.user = response.data;
      console.log(response.data);
      console.log(this.$store);
      this.$store.commit('auth/SET_USER', this.user);
    })  
  },
  methods:{
    //logout
    logout() {
      User.logout().then(() => {
        localStorage.removeItem("auth");
        this.$router.push({name:"home"});
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
