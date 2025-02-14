<template>
  <SpinnerComponent v-if="loading" :loading="loading" />
  <section id="list">
    <div class="container">
      <ul v-for="pricelist in priceslist" :key="pricelist.id" class="mt-5">
        <li>{{ pricelist.name }}: {{ pricelist.price }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { store } from "../store";
import SpinnerComponent from "@/components/SpinnerComponent.vue";

export default {
  name: "PricesListComponent",
  components: {
    SpinnerComponent,
  },
  data() {
    return {
      priceslist: [],
      loading: false,
    };
  },
  methods: {
    GetPriceslist() {
      this.loading = true;
      console.log(this.loading);
      axios
        .get(`${store.apiBaseUrl}/prislista`)
        .then((response) => {
          console.log("Api Response:", response.data);
          this.priceslist = response.data.results;
        })
        .catch((error) => {
          console.error("Error fetching prices list:", error);
        })
        .finally(() => {
          // Aggiunto `()` per `finally`
          setTimeout(() => {
            this.loading = false;
          }, 200);
        });
    },
  },
  mounted() {
    // Carica automaticamente i dipendenti quando il componente è montato
    this.GetPriceslist();
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

#list {
  background-color: $light_pink;
}
</style>
