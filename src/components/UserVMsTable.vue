<template>
  <div>
    <b-container class="container my-5 pt-3 pb-5">
      <h2>Las Mevas Màquines</h2>
      <!-- bootstrap-vue table -->

      <b-row align-h="end">
        <b-col md="3" class="pb-3">
          <b-form-input
            v-model="filter"
            type="search"
            placeholder="Cerca"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-table
            responsive
            outlined
            striped
            :items="items"
            :filter="filter"
            :per-page="perPage"
            :current-page="currentPage"
            :fields="fields"
          >
            <template v-slot:cell(actions)="data">
              <b-button variant="danger" @click="deleteItem(data.item.id)">
                Delete
              </b-button>
            </template>
          </b-table>
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
          ></b-pagination>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    //API Call
    axios.get("http://127.0.0.1:8000/api/VirtualMachine").then((res) => {
      //pushing data to items that will show inside table
      this.items = res.data;
    });
  },
  data: () => ({
    items: "",
    fields: [
      {
        key: "user_id",
        label: "User ID",
        sortable: true
      },
      {
        key: "Name",
        label: "Name",
        sortable: true
      },
      {
        key: "OS",
        label: "OS",
        sortable: true
      },
      {
        key: "Version",
        label: "Version",
        sortable: true
      },
      {
        key: "Ram_size",
        label: "Ram",
        sortable: true
      },
      {
        key: "Disk_capacity",
        label: "SSD",
        sortable: true
      },
      {
        key: "Description",
        label: "Descripción",
        sortable: true
      },
      {
        key: "created_at",
        label: "Created at",
        sortable: true
      },
      {
        key: "updated_at",
        label: "updated at",
        sortable: true
      },
      {
        key: "Power_on",
        label: "Power on",
        sortable: true
      },
      {
        key: "actions",
        label: "Actions",
      },
    ],
    filter: "",
    perPage: 2,
    currentPage: 1,
  }),
  computed: {
    rows() {
      return this.items.length;
    },
  },
  methods: {
    deleteItem(id) {
      const index = this.items.findIndex((x) => x.id === id);
      this.items.splice(index, 1);
    },
  }

};
</script>

<style scooped>

th{
font-size:0.9rem;
}
.sr-only span {
font-size:0.7rem;
color: lightslategray;
}
</style>