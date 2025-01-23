<template>
  <div class="container mt-4">
    <!-- Controllo se il trattamento è presente -->
    <div class="card" v-if="treatment">
      <!-- Nome del trattamento -->
      <h1>{{ treatment.name }}</h1>
      <!-- Immagine del trattamento -->
      <img
        v-if="treatment.image"
        :src="store.imgBasePath + treatment.image"
        :alt="treatment.name"
      />
      <!-- Descrizione del trattamento -->
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
      treatment: null, // Variabile per il singolo trattamento
    };
  },
  methods: {
    getSingleTreatment() {
      axios
        .get(`${this.store.apiBaseUrl}/treatments/${this.$route.params.slug}`)
        .then((res) => {
          console.log("Dettaglio trattamento:", res.data);
          this.treatment = res.data.results; // Assicurati che sia un oggetto singolo
        })
        .catch((err) => {
          console.error("Errore nel caricamento del trattamento:", err);
          if (err.response) {
            console.error("Risposta dell'errore:", err.response);
          } else if (err.request) {
            console.error("Richiesta senza risposta:", err.request);
          } else {
            console.error(
              "Errore nella configurazione della richiesta:",
              err.message
            );
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
