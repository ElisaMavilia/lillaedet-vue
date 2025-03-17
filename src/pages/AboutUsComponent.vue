<template>
  <SpinnerComponent v-if="loading" :loading="loading" />
  <!--  {{ employees }} -->
  <div id="about-us">
    <h2 id="title" class="text-center text-uppercase">Vilka vi är</h2>
    <section
      class="container d-flex justify-content-around align-items-center align-content-center"
      v-for="(employee, index) in employees"
      :key="employee.id"
      :class="{ 'reverse-layout': index % 2 !== 0 }"
    >
      <img src="../assets/img/nima.png" alt="Nimas bild" />
      <div class="text-container flex-direction-column">
        <h2 id="name-text">{{ employee.name }} {{ employee.surname }}</h2>
        <p id="role-text">{{ employee.role }}</p>
        <p>
          {{ employee.notes }}
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import { store } from "../store";
import SpinnerComponent from "@/components/SpinnerComponent.vue";

export default {
  name: "AboutUsComponent",
  components: {
    SpinnerComponent,
  },
  data() {
    return {
      employees: [],
      loading: false,
    };
  },
  methods: {
    GetEmployees() {
      this.loading = true;
      axios
        .get(`${store.apiBaseUrl}/om-oss`)
        .then((response) => {
          console.log("Api Response:", response.data);
          this.employees = response.data.results;
        })
        .catch((error) => {
          console.error("Error fetching employees:", error);
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
    this.GetEmployees();
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

#about-us {
  width: 100%;
  background-color: $light_pink;
}

/* section {
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    inset -7px -7px 10px 0px rgba(0, 0, 0, 0.1),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  margin-top: 100px;
  margin-bottom: 180px;
} */

img {
  margin: 0 0 50px;
  width: 400px;
  height: auto;
}

.text-container {
  padding-left: 40px;
  color: $fadedFont;
}

#title {
  margin-bottom: 50px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  font-weight: 400;
  color: $fadedFont;
  text-align: center;
  padding-top: 150px;
}

#name-text p {
  color: $fadedFont;
  padding-left: 140px;
}

#name-text h2 {
  padding-top: 100px;
}

p {
  font-size: 1.1rem;
}

.reverse-layout {
  flex-direction: row-reverse; /* Image on the right, Text on the left */
}

@media screen and (max-width: 900px) {
  img {
    width: 300px;
  }

  .text-container {
    margin-left: -70px;
  }

  #name-text,
  p {
    color: $fadedFont;
    padding-left: 140px;
  }

  #name-text {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }
}
@media screen and (max-width: 767px) {
  img {
    width: 250px;
  }
  #name-text {
    font-size: 1.3rem;
  }

  p {
    font-size: 0.9rem;
  }
}
@media screen and (max-width: 567px) {
  section {
    justify-content: center !important;
    flex-direction: column !important;
  }
  .text-container {
    padding-left: 80px;
  }
  img {
    width: 230px;
  }
  #name-text {
    font-size: 1rem;
    text-align: center;
  }

  #role-text {
    text-align: center;
  }

  p {
    font-size: 0.8rem;
  }
  #name-text,
  p {
    padding: 0 20px 0 15px;
  }
}
</style>
