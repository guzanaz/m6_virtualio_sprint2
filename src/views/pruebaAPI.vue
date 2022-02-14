<template>

  <div>
    <div v-for="(item, index) in result" :key="index">{{ index }}. {{ item }}</div>
  </div>

</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    result: null
  }),
  created() {
    axios.get("http://127.0.0.1:8000/api/VirtualMachine").then((result) => {
      this.result = result.data;
    })
  }
};
</script>