<template>
  <section id="CreateVM">
    <!-- debe estar config para que se  muestre sólo sí se crea una mv-->
    <b-card
      v-if="user"
      bg-variant="white"
      text-variant="dark"
      class="border-0 shadow my-5"
    >
      <h3>¡Bienvenid@ {{ user.name }}!</h3>
      <b-card-text> te has logueado desde {{ user.email }} </b-card-text>
      <b-button href="#" @click="showModal" variant="primary" class="ml-0">
        Crear Máquina Virtual
      </b-button>
    </b-card>
    <b-modal
      body-class="p-0"
      ref="modal"
      no-stacking
      hide-header
      hide-footer
      title="Editant màquina Virtual"
      size="lg"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <!-- grupo para crear nombre de la máquina virtual -->
      <b-container fluid="sm">
        <b-row>
          <b-col cols="4" class="bg-secondary py-3">
            <b-container>
              <b-row class="mt-3">
                <b-img
                  center
                  src="https://svgshare.com/i/emu.svg"
                  alt="Center image"
                ></b-img>
              </b-row>
              <b-row
                align-h="center"
                class="row mt-4 mb-4 text-light text-center"
              >
                <h5>Configuració Inicial</h5>
                <p class="font-weight-light">
                  És hora de posar un nom a la teva màquina, definir un sistema
                  operatiu i una versió del mateix.
                </p>
              </b-row>

              <b-row align-h="center" class="row mb-4 text-light text-center">
                <b-progress :value="value" class="w-100"></b-progress>
              </b-row>
            </b-container>
          </b-col>
          <b-col cols="8">
            <b-container fluid>
              <b-row align-h="start" class="mx-0 mt-5 mb-2">
                <h2>La teva màquina</h2>
              </b-row>

              <b-form-group id="input-group-1" label="Nom" label-for="input-1">
                <b-form-input
                  id="input-1"
                  v-model="form.name"
                  placeholder="El nom de la teva màquina"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-2"
                label="Sistema Operatiu"
                label-for="input-2"
              >
                <b-form-select
                  id="input-2"
                  v-model="form.OS"
                  :options="OS"
                  required
                ></b-form-select>
              </b-form-group>
              <b-form-group
                id="input-group-3"
                label="Versió"
                label-for="input-3"
              >
                <b-form-select
                  id="input-3"
                  v-model="form.Version"
                  :options="Version"
                  required
                ></b-form-select>
              </b-form-group>
              <b-row align-h="end" class="mx-0 mt-5 mb-4">
                <b-button
                  v-b-modal.modal-vm-capacity
                  class="px-4"
                  variant="primary"
                  >Continuar</b-button
                >
              </b-row>
            </b-container>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
    <b-modal
      body-class="p-0"
      id="modal-vm-capacity"
      ref="modal-vm-capacity"
      no-stacking
      hide-header
      hide-footer
      size="lg"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <!-- grupo para editar capacidad de la máquina virtual -->
      <b-container fluid="sm">
        <b-row>
          <b-col cols="4" class="bg-secondary py-3">
            <b-container>
              <b-row class="mt-3">
                <b-img
                  center
                  src="https://svgshare.com/i/esL.svg' title='modal_img2"
                  alt="Center image"
                ></b-img>
              </b-row>
              <b-row
                align-h="center"
                class="row mt-4 mb-4 text-light text-center"
              >
                <h5>Mida de les memòries</h5>
                <p class="font-weight-light">
                  Fixa la mida de la RAM en Gigabytes (GB) per a la teva màquina
                  y assigna la mida de disc dur virtual.
                </p>
              </b-row>
              <b-row align-h="center" class="row mb-4 text-light text-center">
                <b-progress :value="value" class="w-100"></b-progress>
              </b-row>
            </b-container>
          </b-col>
          <!-- -->
          <b-col cols="8">
            <b-container fluid>
              <b-row align-h="start" class="mx-0 mt-5 mb-2">
                <h2>Memòries</h2>
              </b-row>
              <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <div class="pt-5">
                  <label for="ram_size"
                    >RAM ({{ form.RamSize }} Gigabytes)</label
                  >
                  <b-form-input
                    id="ram_size"
                    v-model="form.RamSize"
                    type="range"
                    min="4"
                    max="16"
                  >
                  </b-form-input>
                </div>
                <div class="pt-5">
                  <label for="disk_capacity"
                    >Disc Dur Virtual ({{ form.DiskCapacity }} Gigabytes)</label
                  >
                  <b-form-input
                    id="disk_capacity"
                    v-model="form.DiskCapacity"
                    type="range"
                    min="10"
                    max="50"
                  >
                  </b-form-input>
                </div>
                <b-row align-h="end" class="mx-0 mt-5 py-4">
                  <b-button @click="showModal" variant="outline-secondary"
                    >Enrere</b-button
                  >
                  <b-button
                    @click="hideModal"
                    type="submit"
                    class="px-4"
                    variant="primary"
                    >Crear</b-button
                  >
                </b-row>
              </b-form>
            </b-container>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
  </section>
</template>

<script>
import User from "../apis/User";
import Vm from "../apis/Vm";
export default {
  name: "CreateVM",
  components: {},
  props: {
    hola: Function,
  },
  data() {
    return {
      user: "",
      value: 0,
      modalShow: false,
      form: {
        name: "",
        OS: null,
        Version: null,
        RamSize: 0,
        DiskCapacity: 0,
      },
      OS: [{ text: "Definir", value: null }, "ubuntu"],

      Version: [{ text: "Definir", value: null }, "22.04"],
      show: true,
    };
  },
  mounted() {
    //API Call
    User.auth().then((response) => {
      //pushing data
      this.user = response.data;
      console.log(response.data);
      console.log(this.$store);
      this.$store.commit("auth/SET_USER", this.user);
    });
  },
  methods: {
    //1. modal methods
    showModal() {
      this.$refs["modal"].show();
    },
    hideModal() {
      this.$refs["modal-vm-capacity"].hide();
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
    //2. form methods
    onSubmit(event) {
      event.preventDefault();
      var vm = {
        name: this.form.name,
        ide2:
          "local:iso/" +
          this.form.OS +
          "-" +
          this.form.Version +
          "-desktop-amd64.iso,media=cdrom",
        ostype: "l26",
        scsihw: "virtio-scsi-pci",
        sockets: 2,
        sata0: "local-lvm:" + this.form.DiskCapacity,
        cores: 2,
        memory: this.form.RamSize * 1024,
        net0: "virtio,bridge=vmbr0,firewall=1",
      };
      //método store
      Vm.store(vm).then((response) => {
        console.log(response.data.data);
      });
      this.hola();
      this.refreshTable();
      // alert(JSON.stringify(vm));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.name = "";
      this.form.OS = null;
      this.form.Version = null;
      this.form.RamSize = 0;
      this.form.DiskCapacity = 0;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style scoped>
.modal-body {
  padding: 0;
}

.btn-primary {
  color: #fff;
  background-color: #ff8364;
  border-color: #ff8364;
}
</style>

