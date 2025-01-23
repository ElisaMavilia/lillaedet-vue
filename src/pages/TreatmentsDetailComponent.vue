<template>
  <div class="container mt-4">
    <!-- Checking if treatment is loaded -->
    <div class="card" v-if="treatment">
      <!-- Treatment name -->
      <h1>{{ treatment.name }}</h1>
      <!-- Treatment image -->
      <img
        v-if="treatment.image"
        :src="store.imgBasePath + treatment.image"
        :alt="treatment.name"
      />
      <!-- Treatment description -->
      <p>{{ treatment.description }}</p>
    </div>
    <!-- Messaggio di caricamento -->
    <div v-else>
      <p>Caricamento in corso...</p>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
import axios from "axios";

export default {
  name: "TreatmentsDetailComponent",
  data() {
    return {
      store,
      treatment: null,
    };
  },
  methods: {
    getSingleTreatment() {
      axios
        .get(`${this.store.apiBaseUrl}/behandlingar/${this.$route.params.slug}`)
        .then((res) => {
          console.log("Treatment-detail:", res.data);
          this.treatment = res.data.results;
        })
        .catch((err) => {
          console.error("Error fetching treatment:", err);
          if (err.response) {
            console.error("Server response:", err.response);
          } else if (err.request) {
            console.error("Request without response:", err.request);
          } else {
            console.error("Error configuring request:", err.message);
          }
        });
    },
  },

  mounted() {
    // Recupero i dettagli del trattamento al montaggio del componente
    this.getSingleTreatment();
  },
};
</script>

<style lang="scss" scoped></style>
