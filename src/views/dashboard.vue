<template>
  <div class="gradient-bg">
    <UserNavbarSprint3 />
    <div>
      <b-container>
        <b-card
          bg-variant="white"
          text-variant="dark"
          class="border-0 shadow my-5"
        >
          <h3>¡Bienvenid@ Usuario!</h3>
          <b-card-text>
            With supporting text below as a natural lead-in to additional
            content.
          </b-card-text>
          <b-button href="#" variant="primary" class="ml-0"
            >Go somewhere</b-button
          >
        </b-card>
        <UserVMsTable />
      </b-container>
    </div>
  </div>
</template>

<script>
import UserNavbarSprint3 from "../layout/UserNavbarSprint3.vue";
import UserVMsTable from "../components/UserVMsTable.vue";


export default {
  name: "dashboard",
  components: {
    UserNavbarSprint3,
    UserVMsTable,
  },
  data: function(){
  return {
    bg:{  }
  }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gradient-bg {
  padding-bottom: 30px;
  background: url(https://i.ibb.co/PFYnM1f/bg.png)  no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>

