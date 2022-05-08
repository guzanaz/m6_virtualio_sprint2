<template>
  <section id="googlemap">
    <div class="container-fluid px-0">
      <!--Google map-->
      <div
        id="map-container-google-1"
        class="map-container"
        frameborder="-40px"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      >
        <iframe
          title="googlemaps"
          src="https://maps.google.com/maps?width=101.5%25&amp;hl=es&amp;q=Carrer%20Madrid,%2035,%2049,%2043870%20Amposta,%20Tarragona+(Institut%20Montsi%C3%A0)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ><a href="https://www.gps.ie/car-satnav-gps/"></a>
        </iframe>
      </div>
      <!--Google Maps-->
    </div>
  </section>
</template>

<script>
export default {
  name: "Google_map",
};
</script>

<style scoped>
.map-container {
  position: relative;
  overflow: hidden;
}
iframe {
  height: 360px;
  left: 0;
  min-width: 100vw;
}
</style>