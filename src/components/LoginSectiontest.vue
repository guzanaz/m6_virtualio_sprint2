<template>
<form @submit.prevent="login" @keydown="form.onKeydown($event)">
  <AlertError :form="form" />
  <!-- <AlertErrors :form="form" /> -->
  <!-- <AlertSuccess :form="form" message="Your changes have beend saved!" /> -->

  <div class="mb-3">
    <label for="username" class="form-label">username</label>
    <input id="username" v-model="form.username" type="text" name="username" class="form-control">
    <HasError :form="form" field="username" />
  </div>

  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input id="password" v-model="form.password" type="password" name="password" class="form-control">
    <HasError :form="form" field="password" />
  </div>

  <Button :form="form" class="btn btn-primary">
    Log In
  </Button>
</form>
</template>


<script>
import Form from "vform";

export default {
  name: "LoginSectiontest",
  data() {
    return {
      form: new Form({
        email: "",
        password: "",
      }),
    };
  },
  methods: {
    async login() {
      //const response = await this.form.post("/api/login");
      // ...
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
