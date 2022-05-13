<template>
  <div class="gradient-bg">
    <UserNavbarSprint3 />
    <div>
      <b-container>
        <CreateVM/>
        <UserVMsTable ref="UserVMsTable" />
      </b-container>
    </div>
  </div>
</template>

<script>
import UserNavbarSprint3 from "../layout/UserNavbarSprint3.vue";
import CreateVM from "../components/CreateVM.vue";
import UserVMsTable from "../components/UserVMsTable.vue";

export default {
  name: "dashboard",
  components: {
    UserNavbarSprint3,
    CreateVM,
    UserVMsTable,
  },
  data: function () {
    return {
      bg: {},
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gradient-bg {
  padding-bottom: 30px;
  background: url(https://i.ibb.co/PFYnM1f/bg.png) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>

