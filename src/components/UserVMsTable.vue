<template>
  <div>
    <b-card bg-variant="white" text-variant="dark" class="border-0 shadow my-5">
      <h4>Las mevas màquines</h4>
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
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            :items="items"
            :filter="filter"
            :per-page="perPage"
            :current-page="currentPage"
            :fields="fields"
          >
            <template #cell(actions)="{ item }">
              <b-button
                v-b-tooltip.hover.left="'Arrancar'"
                variant="outline-primary"
                class="mr-1 mb-1 mb-sm-1 mb-md-0"
                pill
                @click="start(item)"
              >
                <b-icon
                  style="vertical-align: unset"
                  width="13px"
                  height="auto"
                  icon="play-fill"
                  aria-hidden="true"
                ></b-icon>
              </b-button>

              <b-button
                v-b-tooltip.hover.top="'Editar'"
                variant="outline-secondary"
                class="mr-1 mb-1 mb-sm-1 mb-lg-0"
                pill
                @click="showModal"
              >
                <b-icon
                  style="vertical-align: unset"
                  width="12px"
                  height="auto"
                  icon="gear-fill"
                  aria-hidden="true"
                >
                </b-icon>
              </b-button>

              <b-button
                v-b-tooltip.hover.top="'Parar'"
                pill
                variant="outline-dark"
                class="mr-1 mb-1 mb-sm-1 mb-lg-0"
                @click="stopVm(item)"
              >
                <b-icon
                  style="vertical-align: unset"
                  width="12px"
                  height="auto"
                  icon="stop-fill"
                  aria-hidden="true"
                ></b-icon>
              </b-button>

              <b-button
                v-b-tooltip.hover.right="'Esborrar'"
                pill
                class="ml-0"
                variant="outline-warning"
                @click="deleteItem(item)"
              >
                <b-icon
                  style="vertical-align: unset"
                  width="12px"
                  height="auto"
                  icon="trash-fill"
                  aria-hidden="true"
                ></b-icon>
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
    </b-card>
   
  </div>
</template>

<script>

import Vm from "../apis/Vm";
export default {
  components: {},
  mounted() {
    this.showVm();
  },
  data: () => ({
    sortBy: 'vmid',
    sortDesc: true,
    show: true,
    items: [],
    fields: [
      { key: "name", label: "NOM", sortable: true },
      { key: "vmid", label: "VMID", sortable: true },
      { key: "status", label: "STATUS", sortable: true },
      { key: "maxdisk", label: "CAPACITAT HD" },
      { key: "maxmem", label: "RAM", sortable: true },
      { key: "actions", label: "ACCIONS" },
    ],
    filter: "",
    perPage: 6,
    currentPage: 1,
  }),
  modalShow: false,
  types: [
    "text",
    "number",
    "email",
    "password",
    "search",
    "url",
    "tel",
    "date",
    "time",
    "range",
    "color",
  ],
  computed: {
    //validación nombre virtual Machine
    validateName() {
      return this.Name.length > 5;
    },

    rows() {
      return this.items.length;
    },
  },
  methods: {
    async showVm() {
      console.log("hola desde dashboard");
      //API Call
      await Vm.getAll().then((response) => {
        //pushing data to  that will show inside table
        this.items = response.data.data;
        console.log(response.data.data);
        // this.hola();
      });
      this.refreshTable();
    },
    async deleteItem(item) {
      let id = item.vmid;
      console.log(item.vmid);
      await Vm.destroy(id).then((response) => {
        console.log(response);
        let index = this.items.findIndex((x) => x.vmid == id);
        console.log(index);
        this.items.splice(index, 1);
      });
    },

    async start(item) {
      let id = item.vmid;
      console.log(item.vmid);
      await Vm.start(id).then((response) => {
        let proxmox = response.data.object.data;
        console.log("Machine", proxmox);
        console.log(response);
        let index = this.items.findIndex((x) => x.vmid == id);
        console.log(index);
        this.items.splice(index, 1, proxmox);
      });
      this.refreshTable();
      window.open(
        "https://95.129.255.249:18006/?console=kvm&novnc=1&vmid=" +
          item.vmid +
          "&vmname=" +
          item.name +
          "&node=pvedaw&resize=off&cmd="
      );
    },
    async stopVm(item) {
      let id = item.vmid;
      console.log(item.vmid);
      await Vm.stop(id).then((response) => {
        let proxmox = response.data.object.data;
        console.log("Machine", proxmox);
        console.log(response);
        let index = this.items.findIndex((x) => x.vmid == id);
        console.log(index);
        this.items.splice(index, 1, proxmox);
        console.log(this.items);
      });
      this.refreshTable();
    },
    refreshTable() {
      let _this = this;
      setTimeout(function () {
        _this.showVm();
      }, 1000);
    },
  },
};
</script>
<style lang="scss" scooped>
.table > thead {
  vertical-align: middle;
}

th {
  font-size: 0.8rem;
}

tr {
  font-size: 0.8rem;
}

.sr-only {
  display: none !important;
}
.btn:last-of-type {
  margin-left: 0.8rem;
}
.botones-modal {
  margin-top: 0.8rem;
  text-align: right;
}
</style>