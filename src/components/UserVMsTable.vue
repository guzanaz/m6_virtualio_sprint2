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
            :sort-by.sync="Vm"
            :items="Vm"
            :filter="filter"
            :per-page="perPage"
            :current-page="currentPage"
            :fields="fields"
          >
            <template  v-slot:cell(actions)="">
              <b-button
                variant="outline-primary"
                class="mr-1"
                pill
                @click="runVm(data.item.id)"
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
                variant="outline-secondary"
                class="mr-1"
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
                pill
                variant="outline-dark"
                class="mr-0"
                @click="stopVm(data.item.id)"
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
                pill
                class="ml-1"
                variant="outline-warning"
                @click="deleteItem(data.item.id)"
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
    <!--<create-vm :showModal="showModal"></create-vm>-->
  </div>
</template>

<script>
// import CreateVM from "../components/CreateVM.vue";
import Vm from "../apis/Vm";
export default {
  components: {
    // CreateVM,
  },
  mounted() {
    this.showVm();
  },
  data: () => ({
    show: true,
    Vm: [],
    fields: [
      { key: "name", label: "NAME", sortable: true },
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
      return this.Vm.length;
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
    showVm() {
      console.log("hola desde dashboard");
      //API Call
      Vm.getAll().then((response) => {
        //pushing data to  that will show inside table
        this.Vm = response.data.data;
        console.log(response.data.data);
        this.hola();
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