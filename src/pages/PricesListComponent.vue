<template>
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

export default {
  name: "PricesListComponent",
  data() {
    return {
      priceslist: [],
    };
  },
  methods: {
    GetPriceslist() {
      axios
        .get(`${store.apiBaseUrl}/prislista`)
        .then((response) => {
          console.log("Api Response:", response.data);
          this.priceslist = response.data.results;
        })
        .catch((error) => {
          console.error("Error fetching prices list:", error);
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
