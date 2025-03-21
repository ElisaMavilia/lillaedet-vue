<template>
  <SpinnerComponent v-if="loading" :loading="loading" />
  <div id="about-us">
    <h2 id="title" class="text-center text-uppercase">Vilka vi är</h2>
    <section
      class="container d-flex align-content-center align-items-center justify-content-around"
      v-for="(employee, index) in employees"
      :key="employee.id"
      :class="{ 'reverse-layout': index % 2 !== 0 }"
    >
      <img
        :src="
          employee.image
            ? `${store.imgBasePath}${employee.image}`
            : placeholderImage
        "
        :alt="employee.name"
      />
      <div class="flex-direction-column text-container">
        <h2 id="name-text">{{ employee.name }} {{ employee.surname }}</h2>
        <p id="role-text">{{ employee.role }}</p>
        <p class="pb-5">
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
import placeholderImage from "@/assets/img/placeholder.jpg";

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
  background-color: $light_pink;
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
  border-left: 10px solid #5d1425;
}

.text-container,
img {
  margin-bottom: 100px;
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
}

.reverse-layout .text-container {
  border-right: 10px solid #5d1425;
  border-left: none;
}

@media screen and (max-width: 990px) {
  section {
    justify-content: center !important;
    flex-direction: column !important;
  }
  img {
    width: 300px;
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
    width: 250px;
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
