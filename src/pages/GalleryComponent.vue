<template>
  <SpinnerComponent v-if="loading" :loading="loading" />
  <section id="gallery">
    <h2 id="gallery-title" class="text-center text-uppercase">Galleri</h2>
    <div id="gallery-intro" class="p-4">
      Vår klinik är vackert belägen precis framför Göta Älv, i hjärtat av Lilla
      Edet, med en stor och alltid gratis parkering. Vi har utformat vårt
      väntrum med patientens välmående i fokus. Vi vet att väntan ibland kan
      skapa oro och stress, och därför har vi använt färgterapi för att skapa en
      lugnande atmosfär. Rosa är känt för sina avslappnande egenskaper och
      bidrar till en behaglig upplevelse innan din behandling. Dessutom har vi
      valt hållbara material som mikrocement och silkplaster för att skapa en
      miljövänlig och estetiskt tilltalande inredning. Här kan du känna dig
      trygg och avslappnad medan du väntar på din tandvård.
    </div>
    <div class="container d-flex flex-wrap justify-content-around">
      <GalleryCardComponent
        v-for="gallery in galleries"
        :key="gallery.id"
        :gallery="gallery"
      />
    </div>
  </section>
</template>

<script>
import { store } from "../store";
import axios from "axios";
import GalleryCardComponent from "../components/GalleryCardComponent.vue";
import SpinnerComponent from "../components/SpinnerComponent.vue"; // Nome corretto

export default {
  name: "GalleryComponent",
  components: {
    GalleryCardComponent,
    SpinnerComponent,
  },
  data() {
    return {
      store,
      galleries: [],
      loading: false,
    };
  },
  mounted() {
    this.fetchGalleries();
  },
  methods: {
    async fetchGalleries() {
      this.loading = true;
      console.log(this.loading);
      try {
        const response = await axios.get(`${store.apiBaseUrl}/galleri`);
        this.galleries = response.data.results;
      } catch (error) {
        console.error("Errore nel caricamento della galleria:", error);
      } finally {
        setTimeout(() => {
          this.loading = false;
        }, 500);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

#gallery {
  background: $light_pink;
  width: 100%;
  height: auto;
  padding-top: 150px;
  padding-bottom: 150px;
  /* margin-bottom: 150px; */
}

.card-container {
  width: calc((100% / 4) - 20px);
}

h2 {
  margin-bottom: 50px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  font-weight: 400;
  color: $fadedFont;
  text-align: center;
}

#gallery-intro {
  margin: 0 auto;
  width: 100%;
  max-width: 1400px;
  /* padding: 0 10px 20px 10px; */
  font-size: 1rem;
  color: $fadedFont;
}
@media screen and (max-width: 450px) {
  #gallery-intro {
    max-width: 380px;
    font-size: 0.9rem;
  }
}
/* @media screen and (max-width: 1399px) {
  .card-container {
    width: calc((100% / 3) - 20px);
  }
} */
</style>
