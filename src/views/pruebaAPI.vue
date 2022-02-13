<template>
  <div v-if="result" class="content">
    <p>User ID: {{result.user_id}}</p>
    <p>Title: {{result.Name}}</p>
    <p>OS: {{result.OS}}</p>
    <p>Version: {{result.Version}}</p>
    <p>Ram size: {{result.Ram_size}}</p>
    <p>Disk capacity: {{result.Disk_capacity}}</p>
    <p>Description: {{result.Description}}</p>
    <p>Created at: {{result.created_at}}</p>
    <p>Updated at: {{result.updated_at}}</p>
    <p>Power on: {{result.Power_on}}</p>
    <br>
    <br>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    result: null
  }),
  created() {
    axios.get("http://127.0.0.1:8000/VirtualMachine/1").then((result) => {
      this.result = result.data;
    })
  }
};
</script>