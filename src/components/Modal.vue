<template>
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
    <form ref="form" @submit.stop.prevent="handleSubmit">
      <b-container fluid="sm">
        <b-row>
          <b-col cols="4"> </b-col>
          <b-col cols="8">
            <b-container fluid>
              <b-row class="mb-1">
                <b-form-group
                  label="Nom"
                  label-for="name-input"
                  invalid-feedback="Name is required"
                  :state="nameState"
                >
                  <b-form-input
                    id="name-input"
                    type="text"
                    v-model="Name"
                    :state="nameState"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-row>
              <b-row class="mb-1">
                <b-form-select
                  v-model="selected"
                  :state="isValid"
                  :options="options"
                ></b-form-select>
              </b-row>
            </b-container>
            <b-container align-v="end" class="botones-modal">
              <b-button variant="secondary" @click="hideModal"
                >Cancel·lar</b-button
              >
              <b-button type="submit" variant="primary" @click="hideModal"
                >Actualizar Màquina</b-button
              >
            </b-container>
          </b-col>
        </b-row>
      </b-container>
    </form>
  </b-modal>
</template>


<script>
export default {
  name: "Modal",
  
};
</script>

<style>
</style>