<template>
  <SpinnerComponent v-if="loading" :loading="loading" />
  <section id="treatment-detail-wrapper">
    <div class="container">
      <!-- Checking if treatment is loaded -->
      <div class="card" v-if="treatment">
        <!-- Treatment name -->
        <h2 class="text-uppercase pt-5 treatment-name">{{ treatment.name }}</h2>

        <!-- Treatment image -->
        <div class="treatment-image-wrapper">
          <img
            :src="store.imgBasePath + treatment.detail_image"
            class="treatment-image"
            :alt="treatment.name"
          />
        </div>

        <!-- Treatment description -->
        <div class="treatment-description">
          <p>{{ treatment.description }}</p>
        </div>
        <!-- Button -->
        <div class="frame">
          <a href="/#behandlingar" id="treatments-btn" class="btn btn2 me-4">
            Tillbaka till Behandlingar
          </a>
          <a
            href="https://www.muntra.com/lilla-edet-tandlakarcenter/c/5840?language=sv"
            class="btn btn1"
          >
            <span class="full-text">Boka Tid Online</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SpinnerComponent from "../components/SpinnerComponent.vue";
import { store } from "../store";
import axios from "axios";

export default {
  name: "TreatmentsDetailComponent",
  components: {
    SpinnerComponent,
  },
  data() {
    return {
      store,
      treatment: null,
      loading: false,
      isScrolled: false,
    };
  },
  methods: {
    getSingleTreatment() {
      this.loading = true;
      axios
        .get(`${this.store.apiBaseUrl}/behandlingar/${this.$route.params.slug}`)
        .then((res) => {
          console.log("Treatment-detail:", res.data);
          console.log("Detail image path:", res.data.results.detail_image);
          this.treatment = res.data.results;
        })
        .catch((err) => {
          console.error("Error fetching treatment:", err);
          if (err.response) {
            console.error("Server response:", err.response);
          } else if (err.request) {
            console.error("Request without response:", err.request);
          } else {
            console.error("Error configuring request:", err.message);
          }
        })
        .finally(() => {
          setTimeout(() => {
            this.loading = false;
          }, 500);
        });
    },
  },
  mounted() {
    // Retrieve treatment details when the component is mounted
    this.getSingleTreatment();
    const { slug } = this.$route.params;
    if (!slug || slug.length < 3) {
      //Check if slug is valid

      this.$router.push({ name: "not-found" }); // Redirect to NotFoundComponent
    }
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

#treatment-detail-wrapper {
  background: $light_pink;
}

.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  padding: 150px;
}

.card {
  max-width: 800px;
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 18px;
  margin: 30px auto;
  background-color: #f5eaf2;
}

.treatment-name {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

.treatment-image-wrapper {
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
  max-width: 350px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.treatment-image {
  width: 320px;
  height: 320px;
  max-width: 320px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  display: block;
  margin-top: 5px;
}

.treatment-description {
  font-size: 1rem;
  color: $fadedFont;
  line-height: 1.8;
  padding: 30px 0 10px 30px;
}

h2 {
  color: $fadedFont;
  text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
}

/* Button */
.frame {
  margin: 0 0 10px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.btn {
  position: relative;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    inset -7px -7px 10px 0px rgba(0, 0, 0, 0.1),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  text-shadow: 0px 0px 6px rgba(255, 255, 255, 0.3),
    -4px -4px 6px rgba(116, 125, 136, 0.2);
  border-radius: 50px;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  text-decoration: none;
}

/* Button Boka Tid Online */
.btn1 {
  background-color: #e8d1ff;
  color: #ce9eff;
}

.btn:hover {
  color: #fff;
}

.btn:active {
  box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.3),
    -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
    inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
    inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2);
}
/* Button Ring Oss */
.btn2 {
  background-color: #d3b1f5;
  color: #f0e9f7;
}

@media screen and (max-width: 890px) {
  .container {
    padding: 150px 50px;
  }
  .card {
    max-width: 800px;
  }

  .treatment-name {
    font-size: 1.9rem;
  }

  .treatment-image-wrapper {
    max-width: 350px;
    height: 350px;
  }

  .treatment-image {
    width: 300px;
    height: 300px;
    max-width: 300px;
  }

  .btn {
    font-size: 18px;
  }
}
@media screen and (max-width: 760px) {
  .card {
    max-width: 760px;
  }
  .treatment-name {
    font-size: 1.5rem;
  }
  .treatment-image {
    width: 260px;
    height: 260px;
    max-width: 300px;
  }
  .treatment-description {
    font-size: 0.9rem;
    padding: 10px 20px 30px 20px;
  }

  .btn {
    font-size: 18px;
  }
}

@media screen and (max-width: 450px) {
  .container {
    padding: 150px 20px;
  }
  .card {
    max-width: 90%;
    width: auto;
    padding: 10px;
    margin: 15px auto;
  }

  .treatment-name {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  .treatment-image-wrapper {
    max-width: 250px;
    height: 250px;
  }

  .treatment-image {
    width: 220px;
    height: 220px;
    max-width: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  .treatment-description {
    font-size: 0.85rem;
    padding: 10px;
    line-height: 1.4;
  }

  .btn {
    font-size: 0.7rem;
    padding: 8px 5px;
    text-align: center;
    width: auto;
  }
  #treatments-btn {
    margin-right: 5px !important;
  }
}
</style>
