<template>
  <SpinnerComponent v-if="loading" :loading="loading" />

  <section id="about-us">
    <section id="about-up">
      <div id="about-intro-container" class="container d-flex">
        <img
          src="../assets/img/about.jpg"
          alt="Tandläkare med patient under en bhandling"
        />
        <div id="about-intro">
          <h2 id="about-title" class="text-uppercase">Vilka vi är</h2>
          <div>
            Tänder, skratt och teamwork &ndash; det är vad vår vardag handlar
            om! Bakom varje leende finns vi: ett litet, men sammansvetsat team
            som brinner för att du ska känna dig trygg, sedd och le &ndash; på
            riktigt.
          </div>
        </div>
      </div>
    </section>

    <div class="wave wave-purple"></div>

    <section v-for="(employee, index) in employees" :key="employee.id">
      <div v-if="index % 2 !== 0" class="wave wave-white"></div>

      <section class="row-outer" :class="{ 'reverse-layout': index % 2 !== 0 }">
        <div class="row-inner">
          <img
            :src="
              employee.image
                ? `${store.imgBasePath}${employee.image}`
                : placeholderImage
            "
            :alt="employee.name"
          />
          <div class="text-container">
            <h2>{{ employee.name }} {{ employee.surname }}</h2>
            <p>{{ employee.role }}</p>
            <p>{{ employee.notes }}</p>
          </div>
        </div>
      </section>
      <div v-if="index % 2 !== 0" class="wave wave-reversed"></div>
    </section>
  </section>
</template>

<script>
import axios from "axios";
import { store } from "../store";
import SpinnerComponent from "@/components/SpinnerComponent.vue";
import placeholderImage from "@/assets/img/placeholder.png";

export default {
  name: "AboutUsComponent",
  components: {
    SpinnerComponent,
  },
  data() {
    return {
      employees: [],
      loading: false,
      store,
      placeholderImage,
    };
  },
  methods: {
    GetEmployees() {
      this.loading = true;
      axios;
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
  padding-top: 40px;
}

#about-us-reversed {
  background: $light_pink;
}

h2 {
  margin-bottom: 20px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  font-weight: 400;
  color: black;
}

#about-up {
  margin: 50px 0;
  padding-top: 10px;
  width: 100%;
  background-color: $shocking_purple;
}

#about-up img {
  width: 50%;
  height: auto;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
  align-self: center;
}

#about-intro-container {
  border-radius: 20px;
  padding: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

#about-intro {
  width: 45%;
  font-size: 1.2rem;
  color: $fadedFont;
  padding-bottom: 90px;
  padding-top: 60px;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#about-content {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.about-row {
  width: 100%;
  padding: 60px 0;
}

.about-row.reverse-layout {
  background-color: $shocking_purple;
  padding-top: 100px;
}

.row-outer {
  width: 100%;
  /*   padding: 60px 0; */
}

.row-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding: 40px 20px;

  img {
    width: 30%;
    border-radius: 20px;
    object-fit: cover;
  }

  .text-container {
    width: 45%;
    color: $fadedFont;
  }
}

.reverse-layout .row-inner {
  flex-direction: row-reverse;
  padding-top: 100px;
}

.reverse-layout .row-inner img {
  width: 25%;
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

/* Purple Wave */
.wave-purple {
  background: $shocking_purple;
  margin-top: -50px;
}

.wave-white {
  background: white;
  margin-bottom: -80px;
}

.wave-reversed {
  display: block;
  margin-top: -10px;
  background: $shocking_purple;
}

img {
  margin: 0 0 50px;
  width: 400px;
  height: auto;
}

.text-container {
  padding-left: 40px;
  padding-top: 40px;
  vertical-align: middle;
  color: $fadedFont;
}

.text-container,
img {
  margin-bottom: 40px;
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
  font-size: 1.2rem;
}

.reverse-layout {
  flex-direction: row-reverse;
  background: $shocking_purple;
  width: 100%;
}

.reverse-layout img {
  margin-left: 50px;
}

.even-layout {
  width: 100%;
}

@media screen and (max-width: 1050px) {
  #about-intro-container {
    flex-direction: column;
  }

  #about-intro {
    width: 80%;
    padding-left: 0;
  }

  #about-up img {
    width: 80%;
  }
}

@media screen and (max-width: 990px) {
  section {
    justify-content: center !important;
    flex-direction: column !important;
  }
  img {
    width: 450px;
  }

  #about-us {
    /*  background: $light_pink; */
    width: 100%;
    height: auto;
    padding-top: 30px;
    padding-bottom: 150px;
    background: $light_pink;
    /* margin-bottom: 150px; */
  }

  #about-up img,
  #about-intro {
    width: 100%;
  }

  #about-up {
    padding: 30px 15px;
  }

  #about-intro {
    font-size: 1rem;
    padding-top: 10px;
  }

  .text-container {
    margin-left: -70px;
  }

  #name-text,
  p {
    color: $fadedFont;
    padding-left: 0px;
  }

  #name-text {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }
}
@media screen and (max-width: 768px) {
  .text-container {
    border-left: none;
  }
  .reverse-layout .text-container {
    border-right: none;
    border-left: none;
  }
  img {
    width: 350px;
  }
  #name-text {
    font-size: 1.3rem;
  }

  p {
    font-size: 0.9rem;
  }
  #name-text,
  p {
    padding: 0 40px 0 40px;
  }
}
@media screen and (max-width: 567px) {
  .text-container {
    padding-left: 80px;
    padding-top: 0px;
  }
  img {
    width: 300px;
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

@media screen and (max-width: 450px) {
  #about-us {
    padding-top: 80px;
  }
  #about-intro {
    max-width: 380px;
    font-size: 0.9rem;
    padding-left: 0px;
  }
  #about-intro-container {
    padding: 0px 20px;
  }
  #about-up {
    margin: 0;
  }
  .wave {
    height: 95px;
  }

  .wave-purple {
    margin-top: -20px;
  }
}
</style>
