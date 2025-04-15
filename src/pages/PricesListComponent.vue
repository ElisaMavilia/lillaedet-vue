<template>
  <SpinnerComponent v-if="loading" :loading="loading" />
  <section id="list">
    <h2 class="text-center text-uppercase">Prislista</h2>
    <div class="d-flex flex-direction-column p-4">
      <div id="prislista-intro">
        När vi fastställer priser i vår offert prioriterar vi alltid
        förebyggande vård och långsiktigt hållbara resultat. Vi lägger stor vikt
        vid säkerhet, kvalitet och tandhälsa som är hållbar över tid. Vår
        prislista speglar detta synsätt – den är utformad för att erbjuda
        transparenta och rättvisa priser som återspeglar den höga kvaliteten på
        våra behandlingar. Genom att investera i förebyggande vård och
        långsiktiga lösningar hjälper vi dig att undvika onödiga kostnader i
        framtiden, samtidigt som vi säkerställer en trygg och hållbar tandvård
        och munhälsa.

        <!-- Contenitore per l'input e il label -->
        <div class="input-container">
          <label for="search">Sök efter en behandling</label>
          <input
            id="search"
            type="text"
            v-model="searchText"
            placeholder="Sök"
            :class="{ active: searchText.length > 0 }"
          />
        </div>
      </div>
    </div>

    <div class="table-container">
      <table class="modern-table">
        <thead>
          <tr>
            <th>Kategori</th>
            <th>Pris</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pricelist in getFilteredName" :key="pricelist.id">
            <td>{{ pricelist.name }}</td>
            <td>{{ pricelist.price_formatted }} kr</td>
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
      searchText: "",
      isActive: false,
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
  computed: {
    getFilteredName() {
      return this.priceslist.filter((pricelist) =>
        pricelist.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    },
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

#prislista-intro {
  margin: 0 auto;
  max-width: 900px;
  width: 100%;
  font-size: 1rem;
  color: $fadedFont;
  display: flex;
  flex-direction: column;
}

.input-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}

label {
  font-weight: 400;
  font-size: 0.9rem;
  margin: 0;
}

input {
  border-radius: 10px;
  padding: 8px;
  font-size: 0.9rem;
  border: 1px solid #ccc;

  &::placeholder {
    padding: 5px;
    font-size: 0.9rem;
  }

  &:focus {
    border-color: $pink;
    outline: none;
  }

  &.active {
    border-color: $pink;
  }
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
  #prislista-intro {
    max-width: 350px;
    font-size: 0.9rem;
  }
  thead,
  th,
  td {
    font-size: 0.9rem;
  }
  label {
    font-size: 0.8rem;
  }
}
@media screen and (max-width: 390px) {
  thead,
  th,
  td {
    font-size: 0.8rem;
  }
  label {
    font-size: 0.69rem;
  }
}
</style>
