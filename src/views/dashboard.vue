<template>
  <div class="hello">
  <UserNavbar/>
  <UserVMsTable/>
  </div>
</template>

<script>
import UserNavbar from "../layout/UserNavbar.vue";
import UserVMsTable from "../components/UserVMsTable.vue"

export default {
  name: "dashboard",
  components:{
    UserNavbar,
    UserVMsTable,

  },  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
