<template>
  <div class="content"></div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    axios.get("http://127.0.0.1:8000/").then((result) => {
      console.log(result.data);
    })
  }
};
</script>

<style scoped lang="scss">
</style>