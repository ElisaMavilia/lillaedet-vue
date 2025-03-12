<template>
  <SpinnerComponent v-if="loading" :loading="loading" />
  <section id="list">
    <h2 class="text-center text-uppercase">Prislista</h2>
    <div class="table-container">
      <table class="modern-table">
        <thead>
          <tr>
            <th>Kategori</th>
            <th>Pris</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pricelist in priceslist" :key="pricelist.id">
            <td>{{ pricelist.name }}</td>
            <td>{{ pricelist.price }} kr</td>
          </tr>
        </tbody>
      </table>
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
    this.GetPriceslist();
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

#list {
  background-color: $light_pink;
  padding: 150px 0 150px 0;
}

h2 {
  margin-bottom: 50px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  font-weight: 400;
  color: $fadedFont;
  text-align: center;
}

.table-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.modern-table {
  width: 100%;
  max-width: 600px;
  border-collapse: collapse;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background: white;

  thead {
    background: $purple_basic;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
  }

  th,
  td {
    padding: 15px;
    text-align: left;
  }

  tbody tr:nth-child(even) {
    background: #f5eaf2;
  }

  tbody tr:hover {
    background: $purple_basic;
    color: white;
    transition: background 0.3s ease-in-out;
  }

  th,
  td,
  tbody {
    padding-left: 40px;
  }
}
@media screen and (max-width: 450px) {
  thead,
  th,
  td {
    font-size: 0.9rem;
  }
}
@media screen and (max-width: 390px) {
  thead,
  th,
  td {
    font-size: 0.8rem;
  }
}
</style>
