<template>
  <SpinnerComponent v-if="loading" :loading="loading" />
  <!-- Statement Section -->
  <section>
    <HeroComponent />
  </section>
  <section id="general-content" class="container d-flex flex-wrap">
    <div class="image-container">
      <img
        id="statement-image"
        src="../assets/img/treatment.jpg"
        alt="Dental care Treatment"
      />
    </div>
    <div class="general-text-content">
      <p id="concept-statement">
        Vi erbjuder högkvalitativ tandvård med stort fokus på patientens
        välmående. I en lugn och intim miljö skapar vi en avslappnad atmosfär
        där du kan känna dig trygg och omhändertagen genom hela besöket.
        <br />
        Din munhälsa och komfort är alltid i centrum.
      </p>
    </div>
  </section>
  <div class="wave wave-white"></div>
  <!-- Treatments Section -->
  <section id="behandlingar">
    <h2 id="treatments-title" class="text-uppercase">Våra Behandlingar</h2>
    <div
      id="treatments-container"
      class="container d-flex flex-wrap justify-content-around"
    >
      <CardComponent
        v-if="treatments.length"
        v-for="treatment in treatments"
        :key="treatment.id"
        :treatment="treatment"
      />
    </div>
  </section>
  <!-- Purple Wave -->
  <div class="wave wave-purple"></div>
  <!-- Languages Section -->
  <section class="container text-center" id="spoken-languages">
    <h2
      id="spoken-languages-title"
      class="text-center text-uppercase pt-5 pb-4"
    >
      Språk vi talar på kliniken
    </h2>
    <h6 class="pt-3 text-uppercase">
      Il tuo dentista in italiano, vicino Gothenburg
    </h6>
    <h6 class="pt-3">دندانپزشک ایرانی شما نزدیک گوتنبرگ</h6>
    <h6 class="pt-3">هنا يمكنك التحدث باللغة العربية</h6>

    <ScrollingCardComponent />
  </section>
  <!-- White Wave -->
  <div class="wave wave-white"></div>
  <!-- Faq Section -->
  <section id="faq" class="d-flex flex-column">
    <h2 id="faq-title" class="text-center text-uppercase w-100">
      Tandläkaren svarar
    </h2>
    <div class="d-flex justify-content-center faq-content pt-5">
      <img id="faq-image" src="../assets/img/nima.png" alt="FAQ Image" />
      <FaqComponent />
    </div>
    <div id="faq-down" class="d-none">
      <img
        class="d-none"
        id="faq-image-down"
        src="../assets/img/nima.png"
        alt="FAQ Image"
      />
    </div>
  </section>
  <!-- Purple Wave -->
  <div class="wave wave-purple"></div>
  <!-- Galleri -->
  <section id="gallery">
    <div id="before-after" class="container">
      <p id="before-after-title">Vi skapar leenden</p>
      <BeforeAfterComponent />
    </div>
  </section>
  <!-- Footer -->
</template>

<script>
import HeroComponent from "@/components/HeroComponent.vue";
import BeforeAfterComponent from "../components/BeforeAfterComponent.vue";
import CardComponent from "../components/CardComponent.vue";
import FaqComponent from "../components/FaqComponent.vue";
import ScrollingCardComponent from "../components/ScrollingCardComponent.vue";
import WaveComponent from "../components/WaveComponent.vue";
import SpinnerComponent from "../components/SpinnerComponent.vue";
import axios from "axios";
import { store } from "../store";
import FeedbackComponent from "@/components/FeedbackComponent.vue";

export default {
  name: "MainComponent",
  components: {
    HeroComponent,
    CardComponent,
    ScrollingCardComponent,
    FaqComponent,
    WaveComponent,
    BeforeAfterComponent,
    SpinnerComponent,
    FeedbackComponent,
  },
  data() {
    return {
      store,
      treatments: [],
      loading: false,
    };
  },
  methods: {
    GetTreatments() {
      this.loading = true;
      axios
        .get(`${store.apiBaseUrl}/treatments`)
        .then((response) => {
          console.log("Api Response:", response.data);
          if (Array.isArray(response.data.results)) {
            this.treatments = response.data.results;
          } else {
            console.error("treatments is not an array");
          }
        })
        .catch((error) => {
          console.error("Error fetching treatments:", error);
        })
        .finally(() => {
          setTimeout(() => {
            this.loading = false;
          }, 200);
        });
    },
  },
  mounted() {
    // Caricare automaticamente i trattamenti quando il componente è montato
    this.GetTreatments();
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

/* Debug */
/* * {
  outline: 1px solid red;
}
 */

/* Font Family */
#general-content,
#concept-statement,
#behandlingar,
#spoken-languages,
#before-after-title {
  font-family: $secondaryfont;
}

/* Gradient-Background */
#behandlingar,
#faq {
  background: $shocking_purple;
  width: 100%;
  height: auto;
  padding-bottom: 70px;
}

/* General content statement section */
#general-content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /*  padding: 20px; */
  margin-top: 40px;
  z-index: 0;
  width: 100%;
  height: auto;
}

.image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-left: 180px; */
}

#statement-image {
  max-width: 100%;
  width: 500px;
  height: auto;
  margin: 100px 0px 50px 0px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
}
// Text
.general-text-content {
  flex: 1; // Proportional text width
  padding: 80px 80px 0 50px;
  text-align: left;
}

h2 {
  text-align: center;
  text-shadow: 5px 5px 8px rgba(0, 0, 0, 0.3);
  font-weight: 400;
}

#concept-statement {
  font-size: 1.5rem;
  font-weight: 200;
  color: #333;
  text-shadow: 4px 5px 7px rgba(0, 0, 0, 0.3);
}

/* Treatments Section with Cards */
.card-container {
  width: calc((100% / 6) - 20px);
}

#treatments-title {
  padding: 150px 0 80px 0;
}

/* Spoken Languages Section */
#spoken-languages {
  width: 100%;
  height: auto;
}

#spoken-languages img {
  width: 30%;
}

#language-info-container {
  width: 80%;
  height: auto;
  margin: 0 auto;
  margin-top: 50px;
  padding: 20px;
}

/* FAQ Section */
#faq {
  width: 100%;
  background-color: $shocking_purple;
}

//FAQ Content Layout
.faq-content {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  padding: 20px;
  min-height: 500px;
}

#faq-title {
  padding-top: 200px;
}

//FAQ Image
#faq-image {
  width: 450px;
  height: auto;
  flex-shrink: 0;
  transform: translateY(120px);
}

//FAQ Component Styles
.faq-content FaqComponent {
  flex: 1;
  overflow: auto;
}

/* Galleri Section */
#before-after {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 50px;
  margin-bottom: 80px;
}

#before-after-title {
  font-size: 2rem;
  text-align: center;
  text-shadow: 3px 4px 5px rgba(0, 0, 0, 0.3);
}

/* Waves */
.wave {
  width: 100%;
  height: 200px;
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
  margin-top: -70px;
}

/* White Wave */
.wave-white {
  background: white;
  margin-bottom: -150px;
}

/* Footer */
#footer {
  width: 100%;
  height: auto;
}

/* MEDIA QUERIES Computer first */

/* Large (lg) ≥992px -> laptop */
@media screen and (max-width: 1199.98px) {
  // General Statement Section
  #general-content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin-top: 30px;
    z-index: 0;
    width: 100%;
    height: auto;
  }

  .image-container {
    padding-left: 100px;
    padding-top: 50px;
  }

  #concept-statement {
    padding-top: 50px;
    font-size: 1.5rem;
  }

  /* FAQ Section */
  #faq-image {
    width: 360px;
    transform: translateY(240px); // Moves the image down
  }

  /* Before & After Section */
  #before-after-title {
    font-size: 1.8rem;
    padding-right: 55px;
  }

  @media screen and (max-width: 991.98px) {
    /* General Statement Section */
    #general-content {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;
      margin-top: 40px;
      z-index: 0;
      width: 100%;
      height: auto;
    }
    .general-text-content {
      padding: 20px 30px 0 30px;
      text-align: center;
      font-size: 0.8rem;
    }
    .image-container {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 0;
    }

    #statement-image {
      max-width: 100%;
      width: 300px;
      margin: 30px 0px 0px 0px;
    }
    /* FAQ Section */
    #faq-image {
      width: 350px;
      transform: translateY(180px);
    }
  }
  // General Statement Section
  #concept-statement {
    font-size: 1.2rem;
  }
  // Treatment Section
  .card-container {
    width: calc(100% / 2);
  }

  #treatments-container {
    justify-content: center !important;
  }
  // Spoken Languages Section
  #spoken-languages {
    gap: 30px;
    margin-bottom: 0px;
  }
  /* FAQ Section */
}

@media screen and (max-width: 850px) {
  /* General Statement Section  */
  #statement-image {
    width: 500px;
  }

  #concept-statement {
    font-size: 1.5rem;
  }
  //FAQ Content Layout
  .faq-content {
    gap: 5px;
    padding: 0px;
  }
}
@media screen and (max-width: 768px) {
  /* General Statement Section  */
  #statement-image {
    width: 450px;
    height: auto;
    margin: 0;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  }

  #concept-statement {
    font-size: 1.4rem;
    font-weight: 200;
    color: #333;
    text-shadow: 4px 5px 7px rgba(0, 0, 0, 0.3);
  }

  .wave {
    height: 153px;
  }

  /* Treatment Section */
  #behandlingar {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  /* Spoken Languages Section */
  #spoken-languages {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #spoken-languages-title {
    padding-bottom: 0px;
  }

  /* Before & After Section  */
  #before-after-title {
    font-size: 1.2rem;
    padding-right: 0px;
  }

  #faq-image {
    display: none;
  }

  .faq-content {
    padding: 0 !important;
  }

  #faq-down {
    display: flex !important;
    flex-direction: column;
    align-items: center;
  }

  #faq-image-down {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    width: 300px !important;
  }
}

@media screen and (max-width: 641px) {
  #before-after-title {
    font-size: 1rem;
    padding-left: 28px;
  }
}
@media screen and (max-width: 575.98px) {
  //General Statement image
  #statement-image {
    width: 300px;
    margin: 0px;
  }
  #concept-statement {
    font-size: 1rem;
  }
  // Treatments Section
  #treatments-container {
    justify-content: center !important;
  }
}
@media screen and (max-width: 480px) {
  /* Treatment Section */
  #treatments-title {
    padding: 150px 0 50px 0;
  }
  /* Faq section */

  #faq-image-down {
    width: 220px !important;
  }
  /* Before-After Section */
  #before-after {
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 80px;
  }

  #before-after-title {
    font-size: 1.5rem;
    text-align: center;
    padding-left: 0px;
    padding-bottom: 20px;
  }

  h2 {
    font-size: 1.2rem;
  }

  .wave-white {
    background: white;
    margin-bottom: -120px;
  }

  @media screen and (max-width: 387px) {
    #statement-image {
      margin: 0 auto;
      width: 250px;
    }
    #before-after-title {
      font-size: 1.3rem;
    }
  }
  @media screen and (max-width: 348px) {
    #concept-statement {
      font-size: 0.9rem;
      text-align: center;
    }
  }
}
</style>
