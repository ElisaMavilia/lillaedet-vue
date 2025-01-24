<template>
  <!--  {{ employees }} -->
  <div id="about-us">
    <h1 class="text-center text-uppercase text-general">Om oss</h1>
    <section class="container d-flex justify-content-around align-items-center">
      <img src="../assets/img/nima.png" alt="Nimas bild" />
      <div class="text-container flex-direction-column">
        <h2>Nima Farasati</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
          consectetur. Eligendi, voluptas a laboriosam cum ratione vitae minima
          architecto fugiat amet quisquam corporis, similique impedit quasi at
          tenetur cumque, ab perspiciatis quibusdam voluptatibus ex qui
          molestias sequi sint obcaecati? Molestias quod reprehenderit sint qui
          consequatur? Ipsa debitis quos explicabo quod dolore ad voluptate
        </p>
      </div>
    </section>
    <section class="container d-flex justify-content-around align-items-center">
      <div class="text-container flex-direction-column">
        <h2>Shadi</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
          consectetur. Eligendi, voluptas a laboriosam cum ratione vitae minima
          architecto fugiat amet quisquam corporis, similique impedit quasi at
          tenetur cumque, ab perspiciatis quibusdam voluptatibus ex qui
          molestias sequi sint obcaecati? Molestias quod reprehenderit sint qui
          consequatur? Ipsa debitis quos explicabo quod dolore ad voluptate
        </p>
      </div>
      <img src="../assets/img/nima.png" alt="Nimas bild" />
    </section>
    <section class="container d-flex justify-content-around align-items-center">
      <img src="../assets/img/elisa.png" alt="Nimas bild" />
      <div class="text-container flex-direction-column">
        <h2>Elisa Mavilia</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
          consectetur. Eligendi, voluptas a laboriosam cum ratione vitae minima
          architecto fugiat amet quisquam corporis, similique impedit quasi at
          tenetur cumque, ab perspiciatis quibusdam voluptatibus ex qui
          molestias sequi sint obcaecati? Molestias quod reprehenderit sint qui
          consequatur? Ipsa debitis quos explicabo quod dolore ad voluptate
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import { store } from "../store";

export default {
  name: "AboutUsComponent",
  data() {
    return {
      employees: [], // Array per memorizzare i dipendenti
    };
  },
  methods: {
    GetEmployees() {
      axios
        .get(`${store.apiBaseUrl}/om-oss`)
        .then((response) => {
          console.log("Api Response:", response.data);
          this.employees = response.data.results; // Salva i dati ottenuti nella proprietà employees
        })
        .catch((error) => {
          console.error("Error fetching employees:", error);
        });
    },
  },
  mounted() {
    // Carica automaticamente i dipendenti quando il componente è montato
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

section {
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    inset -7px -7px 10px 0px rgba(0, 0, 0, 0.1),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  margin-top: 100px;
  margin-bottom: 180px;
}

img {
  margin: 0 0 50px;
  width: 400px;
  height: auto;
}

.text-container {
  margin-left: -70px;
}

h1 {
  padding-top: 150px;
}

h2,
p {
  color: $fadedFont;
  padding-left: 140px;
}

h2 {
  padding-top: 100px;
}

p {
  font-size: 1.1rem;
}
</style>
