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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gradient-bg {
  padding-bottom: 30px;
  background: rgb(255, 131, 100);
  background: -moz-linear-gradient(
    180deg,
    rgba(255, 131, 100, 1) 0%,
    rgba(255, 147, 80, 1) 28%,
    rgba(255, 184, 66, 1) 49%,
    rgba(255, 211, 51, 1) 77%,
    rgba(255, 184, 66, 1) 100%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(255, 131, 100, 1) 0%,
    rgba(255, 147, 80, 1) 28%,
    rgba(255, 184, 66, 1) 49%,
    rgba(255, 211, 51, 1) 77%,
    rgba(255, 184, 66, 1) 100%
  );
  background: linear-gradient(
    180deg,
    rgba(255, 131, 100, 1) 0%,
    rgba(255, 147, 80, 1) 28%,
    rgba(255, 184, 66, 1) 49%,
    rgba(255, 211, 51, 1) 77%,
    rgba(255, 184, 66, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff8364",endColorstr="#ffb842",GradientType=1);
}
</style>
