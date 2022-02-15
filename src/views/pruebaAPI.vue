<template>

  <div>
  <div id="app">
    <b-navbar toggleable >
      <b-navbar-brand href="#">brand</b-navbar-brand>
      <b-navbar-toggle target="navbar-toggle-collapse">
        <template v-slot:default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>
      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">foo</b-nav-item>
          <b-nav-item href="#">bar</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
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