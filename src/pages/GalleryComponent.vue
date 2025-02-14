<template>
  <SpinnerComponent v-if="loading" :loading="loading" />
  <section id="gallery">
    <h2 id="gallery-title" class="text-uppercase text-center">Galleri</h2>
    <div class="container d-flex justify-content-around flex-wrap">
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
      console.log(this.loading); // Mostra il loader
      try {
        const response = await axios.get(`${store.apiBaseUrl}/galleri`);
        this.galleries = response.data.results;
      } catch (error) {
        console.error("Errore nel caricamento della galleria:", error);
      } finally {
        setTimeout(() => {
          this.loading = false;
        }, 200);
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
  padding-bottom: 150px;
}

.card-container {
  width: calc((100% / 4) - 20px);
}

h2 {
  padding: 150px 0 80px 0;
  color: $fadedFont;
  text-shadow: 3px 4px 5px rgba(0, 0, 0, 0.3);
}
</style>
