<template>
  <section id="CreateVM">
    <!-- debe estar config para que se  muestre sólo sí se crea una mv-->
    <b-card
      v-if="user"
      bg-variant="white"
      text-variant="dark"
      class="border-0 shadow my-5"
    >
      <h3>¡Enhorabona {{ user.name }}!</h3>
      <b-card-text> Has iniciat sessió correctament des de {{ user.email }} </b-card-text>
      <b-button href="#" @click="showModal" variant="primary" class="ml-0">
        Crear Máquina Virtual
      </b-button>
    </b-card>
    <b-modal
      body-class="p-0"
      ref="create_1"
      id="create_1"
      no-stacking
      hide-header
      hide-footer
      title="Editant màquina Virtual"
      size="lg"
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
                  v-model="Vm.name"
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
                  v-model="Vm.OS"
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
                  v-model="Vm.Version"
                  :options="Version"
                  required
                ></b-form-select>
              </b-form-group>
              <b-row align-h="end" class="mx-0 mt-5 mb-4">
                <b-button
                  v-b-modal.create_2
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
      id="create_2"
      ref="create_2"
      no-stacking
      hide-header
      hide-footer
      size="lg"
    >
      <!-- grupo para editar capacidad de la máquina virtual -->
      <b-container fluid="sm">
        <b-row>
          <b-col cols="4" class="bg-secondary rounded-left py-3">
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
            </b-container>
          </b-col>
          <!-- -->
          <b-col cols="8">
            <b-container fluid>
              <b-row align-h="start" class="mx-0 mt-5 mb-2">
                <h2>Memòries</h2>
              </b-row>
              <b-form @submit.prevent="create" v-if="show">
                <div class="pt-5">
                  <label for="ram_size"
                    >RAM ({{ Vm.RamSize }} Gigabytes)</label
                  >
                  <b-form-input
                    id="ram_size"
                    v-model="Vm.RamSize"
                    type="range"
                    min="4"
                    max="16"
                  >
                  </b-form-input>
                </div>
                <div class="pt-5">
                  <label for="disk_capacity"
                    >Disc Dur Virtual ({{ Vm.DiskCapacity }} Gigabytes)</label
                  >
                  <b-form-input
                    id="disk_capacity"
                    v-model="Vm.DiskCapacity"
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
  data() {
    return {
      user: "",
      modalShow: false,
      Vm: {
        name: "",
        OS: null,
        Version: null,
        RamSize: 4,
        DiskCapacity: 4,
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
      this.$refs["create_1"].show();
    },
    hideModal() {
      this.$refs["create_2"].hide();
    },
    //2. form methods
    create() {
      console.log(this.Vm);
      var vm = {
        name: this.Vm.name,
        ide2:
          "local:iso/" +
          this.Vm.OS +
          "-" +
          this.Vm.Version +
          "-desktop-amd64.iso,media=cdrom",
        ostype: "l26",
        scsihw: "virtio-scsi-pci",
        sockets: 2,
        sata0: "local-lvm:" + this.Vm.DiskCapacity,
        cores: 2,
        memory: this.Vm.RamSize * 1024,
        net0: "virtio,bridge=vmbr0,firewall=1",
      };
      console.log(vm);
      //método store
      Vm.store(vm).then((response) => {
        console.log(response.data.data);
        this.onReset();
        this.hideModal();
        window.location.reload();
      });
    },
    onReset() {
      // Reset our form values
      this.Vm.name = "";
      this.Vm.OS = null;
      this.Vm.Version = null;
      this.Vm.RamSize = 0;
      this.Vm.DiskCapacity = 0;
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
  background-color: #fd8e72;
  border-color: #fd8e72;
}

.btn-primary:hover{
  background-color:#f74a2d ;
  border-color:#f86b50;
}
</style>

