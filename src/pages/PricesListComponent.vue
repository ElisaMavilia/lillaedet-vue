<template>
  <SpinnerComponent v-if="loading" :loading="loading" />
  <section id="list">
    <section id="prislista-up">
      <div id="prislista-intro-container" class="container d-flex">
        <img src="../assets/img/desk.jpg" alt="Working desk with stationery" />

        <div id="prislista-intro">
          <h2 id="prislista-title" class="text-uppercase">Prislista</h2>
          När vi fastställer priser i vår offert prioriterar vi alltid
          <strong>förebyggande vård och långsiktigt hållbara resultat.</strong>
          Vi lägger stor vikt vid
          <strong
            >säkerhet, kvalitet och tandhälsa som är hållbar över tid.</strong
          >
          Vår prislista speglar detta synsätt – den är utformad för att erbjuda
          transparenta och rättvisa priser som återspeglar den höga kvaliteten
          på våra behandlingar. Genom att investera i förebyggande vård och
          långsiktiga lösningar hjälper vi dig att undvika
          <strong
            >onödiga kostnader i framtiden, samtidigt som vi säkerställer en
            trygg och hållbar tandvård och munhälsa i fokus.</strong
          >.
        </div>
      </div>
    </section>
    <div class="wave wave-purple"></div>

    <!-- input field -->
    <section>
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

      <div class="table-container">
        <table class="modern-table">
          <thead>
            <tr>
              <th>Behandling</th>
              <th>Pris</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="getFilteredName.length > 0">
              <tr v-for="pricelist in getFilteredName" :key="pricelist.id">
                <td>{{ pricelist.name }}</td>
                <td>{{ pricelist.price_formatted }}</td>
              </tr>
            </template>
            <tr v-else>
              <td class="ps5" colspan="2">Tyvärr, inga resultat hittades</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
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
  width: 100%;
  height: auto;
  padding-top: 40px;
  padding-bottom: 150px;
}

/* h2 {
  margin-bottom: 50px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  font-weight: 400;
  color: $fadedFont;
  text-align: center;
} */

h2 {
  margin-bottom: 20px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  font-weight: 400;
  color: black;
}
#prislista-intro {
  width: 45%;
  font-size: 1rem;
  color: $fadedFont;
  padding-bottom: 90px;
  padding-top: 60px;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#prislista-up {
  margin: 50px 0;
  padding-top: 10px;
  width: 100%;
  background-color: $shocking_purple;
}

/* h2 {
  margin-bottom: 20px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  font-weight: 400;
  color: black;
} */

/* .img-wrapper {
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
} */
#prislista-up img {
  width: 50%;
  border-radius: 20px;
  height: auto;
  object-fit: cover;
  object-position: center;
  align-self: center;
}

#prislista-intro-container {
  border-radius: 20px;
  padding: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.wave {
  width: 100%;
  height: 90px;
  clip-path: polygon(
    100% 0%,
    0% 0%,
    0% 75.64%,
    1.43% 76.93%,
    2.86% 78.09%,
    4.29% 79.11%,
    5.71% 79.96%,
    7.14% 80.66%,
    8.57% 81.17%,
    10% 81.5%,
    11.43% 81.64%,
    12.86% 81.58%,
    14.29% 81.34%,
    15.71% 80.91%,
    17.14% 80.3%,
    18.57% 79.51%,
    20% 78.57%,
    21.43% 77.47%,
    22.86% 76.24%,
    24.29% 74.89%,
    25.71% 73.44%,
    27.14% 71.92%,
    28.57% 70.33%,
    30% 68.71%,
    31.43% 67.07%,
    32.86% 65.43%,
    34.29% 63.83%,
    35.71% 62.28%,
    37.14% 60.8%,
    38.57% 59.41%,
    40% 58.13%,
    41.43% 56.98%,
    42.86% 55.98%,
    44.29% 55.13%,
    45.71% 54.45%,
    47.14% 53.96%,
    48.57% 53.64%,
    50% 53.52%,
    51.43% 53.58%,
    52.86% 53.84%,
    54.29% 54.29%,
    55.71% 54.91%,
    57.14% 55.71%,
    58.57% 56.67%,
    60% 57.77%,
    61.43% 59.01%,
    62.86% 60.37%,
    64.29% 61.83%,
    65.71% 63.36%,
    67.14% 64.95%,
    68.57% 66.58%,
    70% 68.22%,
    71.43% 69.85%,
    72.86% 71.45%,
    74.29% 73%,
    75.71% 74.47%,
    77.14% 75.85%,
    78.57% 77.12%,
    80% 78.26%,
    81.43% 79.25%,
    82.86% 80.08%,
    84.29% 80.75%,
    85.71% 81.23%,
    87.14% 81.53%,
    88.57% 81.64%,
    90% 81.56%,
    91.43% 81.29%,
    92.86% 80.83%,
    94.29% 80.19%,
    95.71% 79.38%,
    97.14% 78.41%,
    98.57% 77.29%,
    100% 76.04%
  );
  position: relative;
  z-index: 0;
}
.wave-purple {
  background: $shocking_purple;
  margin-top: -90px;
}
.input-container {
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
  margin: 40px;
}

label {
  font-weight: 500;
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
  max-width: 800px;
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

@media screen and (max-width: 1050px) {
  #prislista-intro-container {
    flex-direction: column;
  }

  #prislista-intro {
    width: 80%;
    padding-left: 0;
  }

  #prislista-up img {
    width: 80%;
  }
}

@media screen and (max-width: 990px) {
  #list {
    /*  background: $light_pink; */
    width: 100%;
    height: auto;
    padding-top: 30px;
    padding-bottom: 150px;
    background: $light_pink;
    /* margin-bottom: 150px; */
  }

  #prislista-up img,
  .prislista-intro {
    width: 100%;
  }

  #prislista-up {
    padding: 30px 15px;
  }

  .prislista-intro {
    font-size: 1rem;
  }
}

@media screen and (max-width: 450px) {
  #list {
    padding-top: 70px;
  }
  #prislista-intro {
    max-width: 380px;
    font-size: 0.9rem;
    padding-left: 0px;
  }
  #prislista-intro-container {
    padding: 0px;
  }
  #prislista-up {
    margin: 0;
  }
  .wave {
    height: 95px;
  }
  thead,
  th,
  td {
    font-size: 0.9rem;
  }
  label {
    font-size: 0.79rem;
  }
}
@media screen and (max-width: 390px) {
  thead,
  th,
  td {
    font-size: 0.8rem;
  }
  label {
    font-size: 0.68rem;
  }
}
</style>
