<template>
  <SpinnerComponent v-if="loading" :loading="loading" />
  <section id="gallery">
    <section id="gallery-up">
      <div id="gallery-intro-container" class="container d-flex">
        <img
          src="../assets/img/gallery-up.jpg"
          alt="Tandläkare med patient under en bhandling"
        />
        <div id="gallery-intro">
          <h2 id="gallery-title" class="text-uppercase">Galleri</h2>
          Ta en titt på våra bilder för att se hur en arbetsdag ser ut hos oss.
          <br />
          Vår klinik är vackert belägen precis framför Göta Älv, i hjärtat av
          Lilla Edet, med en stor och
          <strong> alltid gratis parkering.</strong> Vi har utformat vårt
          väntrum med patientens välmående i fokus. Vi vet att väntan ibland kan
          färgterapi för att skapa en lugnande atmosfär. Rosa är känt för sina
          avslappnande egenskaper och bidrar till en behaglig upplevelse innan
          din behandling. Dessutom har vi valt hållbara material som mikrocement
          och silkplaster för att skapa en miljövänlig och estetiskt tilltalande
          inredning.
          <strong
            >Här kan du känna dig trygg och avslappnad medan du väntar på din
            tandvård.</strong
          >
        </div>
      </div>
    </section>
    <div class="wave wave-purple"></div>

    <section>
      <h2 class="text-center p-5">Utförska våra Polaroid</h2>
      <div
        id="gallery-down"
        class="d-flex flex-wrap justify-content-around container"
      >
        <GalleryCardComponent
          v-for="gallery in galleries"
          :key="gallery.id"
          :gallery="gallery"
        />
      </div>
    </section>
  </section>
</template>

<script>
import { store } from "../store";
import axios from "axios";
import GalleryCardComponent from "../components/GalleryCardComponent.vue";
import SpinnerComponent from "../components/SpinnerComponent.vue"; // Nome corretto

export default {
  name: "GalleryComponent",
  components: {
    GalleryCardComponent,
    SpinnerComponent,
  },
  data() {
    return {
      store,
      galleries: [],
      loading: false,
    };
  },
  mounted() {
    this.fetchGalleries();
  },
  methods: {
    async fetchGalleries() {
      this.loading = true;
      console.log(this.loading);
      try {
        const response = await axios.get(`${store.apiBaseUrl}/galleri`);
        this.galleries = response.data.results;
      } catch (error) {
        console.error("Errore nel caricamento della galleria:", error);
      } finally {
        setTimeout(() => {
          this.loading = false;
        }, 500);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

#gallery {
  /*  background: $light_pink; */
  width: 100%;
  height: auto;
  padding-top: 40px;
  padding-bottom: 150px;
  background: $light_pink;
  /* margin-bottom: 150px; */
}

.card-container {
  width: calc((100% / 4) - 20px);
}

h2 {
  margin-bottom: 20px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  font-weight: 400;
  color: black;
}

#gallery-up {
  margin: 50px 0;
  padding-top: 10px;
  width: 100%;
  background-color: $shocking_purple;
}

#gallery-up img {
  width: 50%;
  height: auto;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
  align-self: center;
}

#gallery-intro-container {
  border-radius: 20px;
  padding: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

#gallery-intro {
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
  margin-top: -90px;
}

@media screen and (max-width: 1050px) {
  #gallery-intro-container {
    flex-direction: column;
  }

  #gallery-intro {
    width: 80%;
    padding-left: 0;
  }

  #gallery-up img {
    width: 80%;
  }
}

@media screen and (max-width: 990px) {
  #gallery {
    /*  background: $light_pink; */
    width: 100%;
    height: auto;
    padding-top: 30px;
    padding-bottom: 150px;
    background: $light_pink;
    /* margin-bottom: 150px; */
  }

  #gallery-up img,
  #gallery-intro {
    width: 100%;
  }

  #gallery-up {
    padding: 30px 15px;
  }

  #gallery-intro {
    font-size: 1rem;
  }
}

@media screen and (max-width: 450px) {
  #gallery {
    padding-top: 80px;
  }
  #gallery-intro {
    max-width: 380px;
    font-size: 0.9rem;
    padding-left: 0px;
  }
  #gallery-intro-container {
    padding: 0px 20px;
  }
  #gallery-up {
    margin: 0;
  }
  .wave {
    height: 95px;
  }
}
/* @media screen and (max-width: 1399px) {
  .card-container {
    width: calc((100% / 3) - 20px);
  }
} */
</style>
