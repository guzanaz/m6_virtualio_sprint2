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
                @click="showModal(item)"
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
    <b-modal
      ref="edit_1"
      id="edit_1"
      body-class="p-0"
      no-stacking
      hide-header
      hide-footer
      title="Editant màquina Virtual"
      size="lg"
      v-model="modalShow"
    >
      <b-row>
        <b-col cols="4" class="bg-primary rounded-left py-3">
          <b-container>
            <b-row class="mt-3">
              <b-img
                center
                src="https://svgshare.com/i/emu.svg"
                alt="Center image"
              ></b-img>
            </b-row>
            <b-row align-h="center" class="row mt-4 mb-4 text-center">
              <h5>Editant la teva màquina</h5>
              <p class="font-weight-light">
                Aquí pots modificar la configuració inicial de la teva màquina
                virtual
              </p>
            </b-row>
          </b-container>
        </b-col>
        <b-col cols="8">
          <b-container fluid>
            <b-row align-h="start" class="mx-0 mt-5 mb-2">
              <h2>Editant la teva màquina</h2>
            </b-row>

            <b-form-group id="input-group-1" label="Nom" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="selectedVM.name"
                placeholder="El nom de la teva màquina"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-2"
              class="text-muted"
              label="Sistema Operatiu (no pots editar aquest camp)"
              label-for="input-2"
            >
              <b-form-select
                id="input-2"
                :disabled="true"
                :options="OS"
                v-model="selected"
                required
              ></b-form-select>
            </b-form-group>
            <b-form-group
              id="input-group-3"
              class="text-muted"
              label="Versió (no pots editar aquest camp)"
              label-for="input-3"
            >
              <b-form-select
                id="input-3"
                :disabled="true"
                :options="Version"
                required
                v-model="selected"
              ></b-form-select>
            </b-form-group>
            <b-row align-h="end" class="mx-0 mt-5 mb-4">
              <b-button v-b-modal.edit_2 class="px-4" variant="primary"
                >Continuar</b-button
              >
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-modal>
    <b-modal
      body-class="p-0"
      id="edit_2"
      ref="edit_2"
      no-stacking
      hide-header
      hide-footer
      size="lg"
    >
      <!-- grupo para editar capacidad de la máquina virtual -->
      <b-container fluid="sm">
        <b-row>
          <b-col cols="4" rounded="left" class="bg-primary py-3">
            <b-container>
              <b-row class="mt-3">
                <b-img
                  center
                  src="https://svgshare.com/i/esL.svg' title='modal_img2"
                  alt="Center image"
                ></b-img>
              </b-row>
              <b-row align-h="center" class="row mt-4 mb-4 text-center">
                <h5>Editant les memòries</h5>
                <p class="font-weight-light">
                  Pots editar tant la mida de la RAM a Gigabytes (GB) per a la
                  teva màquina com també la mida de disc dur virtual.
                </p>
              </b-row>
            </b-container>
          </b-col>
          <!-- -->
          <b-col cols="8">
            <b-container fluid>
              <b-row align-h="start" class="mx-0 mt-5 mb-2">
                <h2>Editant les memòries</h2>
              </b-row>
              <b-form @submit.prevent="update" v-if="show">
                <div class="pt-5">
                  <label for="ram_size"
                    >RAM ({{ selectedVM.maxmem }} Gigabytes)</label
                  >
                  <b-form-input
                    id="ram_size"
                    @input="toGBMaxMem(selectedVM.maxmem)"
                    v-model="selectedVM.maxmem"
                    type="range"
                    min="4"
                    max="16"
                  >
                  </b-form-input>
                </div>
                <div class="pt-5">
                  <label for="disk_capacity"
                    >Disc Dur Virtual ({{ selectedVM.maxdisk }} Gigabytes)
                  </label>
                  <b-form-input
                    id="disk_capacity"
                    @input="toGBMaxDisk(selectedVM.maxdisk)"
                    v-model="selectedVM.maxdisk"
                    type="range"
                    min="10"
                    max="50"
                  >
                  </b-form-input>
                </div>
                <b-row align-h="end" class="mx-0 mt-5 py-4">
                  <b-button @click="showFirstModal" variant="outline-secondary"
                    >Enrere</b-button
                  >
                  <b-button class="px-4" type="submit" variant="primary"
                    >Actualitzar</b-button
                  >
                </b-row>
              </b-form>
            </b-container>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
import Vm from "../apis/Vm";
export default {
  name: "UserVMsTable",
  components: {},
  mounted() {
    this.showVm();
  },
  data: () => ({
    selectedVM: {},
    newRam: "",
    newDisk: "",
    textName: "",
    total: "",
    modalShow: false,
    sortBy: "vmid",
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
    selected: null,
    form: {
      name: "",
      OS: "ubuntu",
      Version: "22.04",
      RamSize: "",
      DiskCapacity: "",
    },
    OS: [{ text: "ubuntu", value: null }, "ubuntu"],

    Version: [{ text: "22.04", value: null }, "22.04"],
  }),
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
    hideModal() {
      this.$refs["edit_2"].hide();
    },
    showModal(item) {
      console.log(item);
      this.selectedVM = item;
      console.log(item);
      this.$bvModal.hide("edit_2");
      this.$refs["edit_1"].show();
    },
    showFirstModal() {
      this.$bvModal.hide("edit_2");
      this.$refs["edit_1"].show();
    },
    refreshTable() {
      let _this = this;
      setTimeout(function () {
        _this.showVm();
      }, 5000);
    },
    async showVm() {
      console.log("hola desde dashboard");
      //API Call
      await Vm.getAll().then((response) => {
        //pushing data to  that will show inside table
        this.items = response.data.data;
        this.items.forEach((disk) => {
          disk.maxdisk = disk.maxdisk / 1073741824;
          disk.maxmem = disk.maxmem / 1073741824;
        });
      });
    },
    async deleteItem(item) {
      let id = item.vmid;
      console.log(item.vmid);
      await Vm.destroy(id).then((response) => {
        console.log(response);
        let index = this.items.findIndex((x) => x.vmid == id);
        this.items.splice(index, 1);
        this.refreshTable();
      });
    },

    async start(item) {
      let id = item.vmid;
      console.log(item.vmid);
      await Vm.start(id).then((response) => {
        console.log(response);
        this.refreshTable();
        window.open(
          "https://95.129.255.249:18006/?console=kvm&novnc=1&vmid=" +
            item.vmid +
            "&vmname=" +
            item.name +
            "&node=pvedaw&resize=off&cmd="
        );
      });
    },
    async stopVm(item) {
      let id = item.vmid;
      await Vm.stop(id).then((response) => {
        console.log(response);
        this.refreshTable();
      });
    },
    async update() {
      let id = this.selectedVM.vmid;
      var vm = {
        name: this.selectedVM.name,
        memory: this.selectedVM.maxmem * 1024,
        sata0: 'local-lvm:' + this.selectedVM.maxdisk,
      };

      await Vm.update(id, vm).then((response) => {
        console.log(response);
        this.hideModal();
        this.refreshTable();
      });
    },
    //2. form methods
    //divide
    toGBMaxMem(total) {
      this.selectedVM.maxmem = total;
    },
    toGBMaxDisk(total) {
      this.selectedVM.maxdisk = total;
    },
    newName(textName) {
      this.selectedVM.name = textName;
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

.btn-primary {
  color: #ffffff;
}
</style>