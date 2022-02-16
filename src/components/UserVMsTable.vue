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
            <template v-slot:cell(edit)="data">
              <b-button variant="dark"
              :to="{
                name:'editVm',
                params:{VirtualMachineid: data.item.id}
              }"
              tag="button"
              >
              <b-icon icon="gear-fill" aria-hidden="true"></b-icon>
              </b-button>
            </template>
            <template v-slot:cell(delete)="data">
              <b-button variant="danger" @click="deleteItem(data.item.id)">
              <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
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
        label: "Nom",
        sortable: false
      },
      {
        key: "OS",
        label: "SO",
        sortable: false
      },
      {
        key: "Version",
        label: "Versió",
        sortable: false
      },
      {
        key: "Ram_size",
        label: "Mida Ram",
        sortable: false
      },
      {
        key: "Disk_capacity",
        label: "Mida Disc dur",
        sortable: false
      },
      {
        key: "Description",
        label: "Descripció",
        sortable: false
      },
      {
        key: "created_at",
        label: "Data creació",
        sortable: false
      },
      {
        key: "updated_at",
        label: "Data actualització",
        sortable: false
      },
      {
        key: "Power_on",
        label: "Encès",
        sortable: false
      },
      {
        key: "edit",
        label: "Editar",
      },
      {
        key: "delete",
        label: "Esborrar",
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
          axios.delete("http://127.0.0.1:8000/api/VirtualMachine/"+id)
                    .then((res) => {
                        console.log(res);
                        const index = this.items.map(data => data.id).indexOf(id);
                        this.items.splice(index, 1);
                    });
    },


}

    // //API Call
    // axios.delete("http://127.0.0.1:8000/api/VirtualMachine{virtualMachine}"),params: {
    //   //pushing data to items that will show inside table
    //   this.items = res.data;
    // });

    // deleteItem(id) {
    //   const index = this.items.findIndex((x) => x.id === id);
    //   this.items.splice(index, 1);
    // },


};
</script>

<style scooped>

.table > thead{
 vertical-align: middle;
}

th {
font-size:0.8rem;
}

tr{
  font-size: 0.8rem;
}


.sr-only{display:none !important}
</style>