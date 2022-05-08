<template>
  <section id="contacte" class="py-5">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="text-center">
          <h1 class="fs-3 fs-sm-4 mb-3">Contacta’ns!</h1>
          <p>
            Si tens cap dubte o problema, si us plau escriu-nos!
            <br />T’ajudarem tan aviat com sigue possible.
          </p>
        </div>
      </div>
      <form class="container justify-content-center">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-12 col-md-5">
            <label
              for="inputName"
              class="d-flex align-items-start form-label"
            ></label>
            <input
              type="text"
              class="form-control"
              placeholder="Nom"
              aria-label="Nom"
            />
          </div>
          <div class="col-12 col-sm-12 col-md-5">
            <label
              for="inputEmail4"
              class="d-flex align-items-start form-label"
            ></label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="Correu"
            />
          </div>
          <div class="col-12 col-sm-12 col-md-10 mb-3 mt-0 mt-md-4">
            <label
              for="exampleFormControlTextarea1"
              class="d-flex align-items-start form-label"
            ></label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="6"
              placeholder="Missatge"
            ></textarea>
          </div>
          <div class="col-12 d-flex justify-content-center">
            <button type="submit" class="btn btn-primary">Enviar</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactForm",
};
</script>


