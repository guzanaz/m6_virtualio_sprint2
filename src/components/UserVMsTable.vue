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
            :items="items"
            :filter="filter"
            :per-page="perPage"
            :current-page="currentPage"
            :fields="fields"
          >
            <template v-slot:cell(edit)="">
              <b-button id="show-btn" @click="showModal" variant="dark">
                <b-icon icon="gear-fill" aria-hidden="true"></b-icon>
              </b-button>
              <!-- modal pop up for editing virtual machine -->
              <b-modal
                ref="modal"
                hide-header
                hide-footer
                title="Editant màquina Virtual"
                size="lg"
                @show="resetModal"
                @hidden="resetModal"
                @ok="handleOk"
              >
                <!-- grupo para editar nombre de la máquina virtual -->
                <b-container fluid="sm">
                  <b-row>
                    <b-col cols="4"> </b-col>
                    <b-col cols="8">
                      <b-container fluid>
                        <b-row class="my-1" v-for="type in types" :key="type">
                          <label :for="`type-${type}`">Type {{ type }}:</label>
                          <b-form-input
                            :id="`type-${type}`"
                            :type="type"
                          ></b-form-input>
                        </b-row>
                      </b-container>
                    </b-col>
                  </b-row>
                </b-container>
              </b-modal>
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
    </b-card>
  </div>
</template>

<script>
import Vm from "../apis/Vm";
export default {
  mounted() {
    //API Call
    Vm.getAll().then((response) => {
      //pushing data
      this.Vm = response.data;
      console.log(response.data);
    });
  },
  data: () => ({
    return: {
      Vm: [],
      show: true,
    },
    items: [],
    fields: [
      {
        key: "vmid",
        label: "ID",
        sortable: true,
      },
      {
        key: "netout",
        label: "netout",
        sortable: true,
      },
      {
        key: "uptime",
        label: "uptime",
        sortable: false,
      },
      {
        key: "disk",
        label: "disk",
        sortable: false,
      },
      {
        key: "qmpstatus",
        label: "qmpstatus",
        sortable: false,
      },
      {
        key: "status",
        label: "status",
        sortable: false,
      },
      {
        key: "diskwrite",
        label: "diskwrite",
        sortable: false,
      },
      {
        key: "maxdisk",
        label: "maxdisk",
        sortable: true,
      },
      {
        key: "netin",
        label: "netin",
        sortable: true,
      },
      {
        key: "diskread",
        label: "diskread",
        sortable: false,
      },
      {
        key: "ha",
        label: "ha",
      },
      {
        key: "cpu",
        label: "cpu",
      },
      {
        key: "cpus",
        label: "cpus",
      },
      {
        key: "maxmem",
        label: "maxmem",
      },
      {
        key: "mem",
        label: "mem",
      },
      {
        key: "name",
        label: "name",
      },
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
    showModal() {
      this.$refs["modal"].show();
    },
    hideModal() {
      this.$refs["modal"].hide();
    },
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
  },
};
</script>
<style scooped>
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