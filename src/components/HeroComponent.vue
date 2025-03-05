<template>
  <section class="hero">
    <video autoplay muted loop class="hero-video">
      <source src="../assets/video/background.mp4" type="video/mp4" />
      Il tuo browser non supporta il video.
    </video>
    <div class="hero-content">
      <h1 class="text-uppercase">Välkommen till Lilla Edet Tandläkarcenter</h1>
      <p>Din Tandklinik i Västergötland</p>
      <div
        id="pastel-button-container"
        class="d-flex justify-content-center align-items-center"
      >
        <div class="frame">
          <a
            href="https://www.muntra.com/lilla-edet-tandlakarcenter/c/5840?language=sv"
            class="btn btn1"
          >
            <span class="full-text">Boka Tid Online</span>
            <span class="d-none short-text">Boka</span>
          </a>
        </div>
        <div class="frame ms-3">
          <a href="tel:+46520657724" class="btn btn2 btn-right">Ringa oss</a>
        </div>
      </div>
    </div>
    <!-- Bottone fisso spostato fuori -->
    <a
      href="https://www.muntra.com/lilla-edet-tandlakarcenter/c/5840?language=sv"
      class="btn btn1 fixed-btn"
      v-if="isScrolled"
    >
      <span class="full-text">Boka Tid Online</span>
      <span class="short-text">Boka</span>
    </a>
  </section>
</template>

<script>
import WaveComponent from "./WaveComponent.vue";

export default {
  name: "HeroComponent",
  data() {
    return {
      isScrolled: false,
    };
  },
  components: {
    WaveComponent,
  },
  mounted() {
    // Scroll event listener
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    // Removes the listener
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      // If the page is scrolled more than a certain amount, it updates isScrolled
      this.isScrolled = window.scrollY > 150;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

/* General Customization */
.hero {
  position: relative;
  width: 100%;
  height: 70vh;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Per fare in modo che il video copra l'intera area */
  z-index: -1; /* Per mettere il video dietro al contenuto */
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-weight: 400;
  font-family: $secondaryfont;
  color: #6e6969;
  text-shadow: 5px 5px 8px rgba(0, 0, 0, 0.3);
  z-index: 1;
}
h1 {
  font-size: 2.1rem;
}

p {
  font-size: 1.8rem;
}

/* Text */
.text-container {
  display: flex;
  flex: 1;
  text-align: left;
  flex-direction: column;
  align-items: center;
  z-index: 10; // with this the text is on top of the image
}

/* Buttons starting position */
.frame {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#pastel-button-container {
  display: flex;
  justify-content: flex-start;
}

// Position fixed Boka tid button
.fixed-btn {
  position: fixed !important;
  bottom: 30px !important;
  right: 40px !important;
  z-index: 99999 !important;
  background-color: #e8d1ff;
  color: #ce9eff;
  border-radius: 50px;
  font-weight: bold;
  font-size: 26px;
  text-align: center;
  text-decoration: none;
  padding: 10px 20px;
  margin: 0;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
}

.fixed-btn:hover {
  color: white !important;
}

.fixed-btn .full-text {
  display: none !important;
}

.fixed-btn .short-text {
  display: inline !important;
  font-size: 1.2rem;
}

#pastel-button-container {
  position: relative;
  margin-right: 0;
}

//Buttons style
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
  font-size: 26px;
  text-align: center;
  text-decoration: none;
}

/* Button Boka Tid Online */
.btn1 {
  background-color: #e8d1ff;
  color: #ce9eff;
}

/* Button Ring Oss */
.btn2 {
  background-color: #d3b1f5;
  color: #f2edf7;
}

/* Hover: Boka Tid Online Button */
.btn:hover {
  color: #fff !important;
}

/* Hover: Ring Oss Button */
.btn-right:hover {
  color: $purple_light;
}

/* Click effect on buttons */
.btn:active {
  box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.3),
    -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
    inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
    inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2);
}

/* MEDIA QUERIES Computer first */

/* Extra Large (xl) ≥1400px -> desktop */
@media screen and (max-width: 1399.98px) {
  .image-container {
    position: absolute;
    top: 65%;
    right: -90px;
  }
  // Fixed button
  .fixed-btn {
    right: 15px !important;
  }
}

@media screen and (max-width: 1332px) {
  .image-container {
    right: -120px;
  }
}

@media screen and (max-width: 1268px) {
  .image-container {
    right: -200px;
  }
}

/* Large (lg) ≥992px -> laptop */
@media screen and (max-width: 1199.98px) {
  .image-container {
    position: absolute;
    top: 75%;
    right: -90px;
  }

  .text-up {
    font-size: 2.6rem;
  }

  .text-down {
    font-size: 1.5rem;
  }

  img {
    width: 680px;
  }

  // Buttons
  .btn {
    padding: 9px 19px;
    font-size: 25px;
  }

  .fixed-btn {
    bottom: 30px !important;
    right: 18px !important;
  }

  .fixed-btn .full-text {
    display: none;
  }

  .fixed-btn .short-text {
    display: inline;
    font-size: 1.2rem;
  }

  @media screen and (max-width: 991.98px) {
    img {
      width: 650px;
    }
    .image-container {
      right: -140px;
    }
  }

  @media screen and (max-width: 868px) {
    img {
      width: 590px;
    }
    .image-container {
      right: -140px;
    }
  }

  @media screen and (max-width: 770px) {
    .text-up {
      font-size: 2.3rem;
      padding-top: 0;
    }

    .text-down {
      font-size: 1.3rem;
    }

    .image-container {
      right: -140px;
    }

    img {
      width: 580px;
    }
    // Round small fixed button
    .fixed-btn {
      position: fixed !important;
      bottom: 30px !important;
      right: 8px !important;
      color: white;
      background: #d2b1f4;
      border-radius: 50%;
      width: 48px;
      height: 48px;
      font-weight: bold;
      text-align: center;
      text-decoration: none;
      padding: 10px 20px;
      margin-left: 0;
      box-sizing: border-box;
      transition: all 0.3s ease-in-out;

      .short-text {
        display: inline;
        font-size: 0.9rem;
      }
    }
    @media screen and (max-width: 727px) {
      .image-container {
        right: -150px;
      }
    }
    @media screen and (max-width: 718px) {
      .image-container {
        right: -160px;
      }
    }

    @media screen and (max-width: 702px) {
      .image-container {
        right: -180px;
      }
    }

    @media screen and (max-width: 641px) {
      .image-container {
        right: -200px;
      }
      .text-up {
        font-size: 1.9rem;
        padding-left: 20px;
        padding-right: 20px;
      }

      .text-down {
        font-size: 1.5rem;
      }
      .fixed-btn {
        right: 20px !important;
      }
    }

    @media screen and (max-width: 608px) {
      img {
        width: 550px;
      }
      .text-up {
        font-size: 1.8rem;
        padding-top: 0;
      }

      .text-down {
        font-size: 1.1rem;
      }

      .image-container {
        right: -170px;
      }
      .fixed-btn {
        right: 25px !important;
      }
    }

    @media (max-width: 575.98px) {
      .text-up {
        font-size: 1.8rem;
        padding-top: 0;
      }

      .text-down {
        font-size: 1.1rem;
      }

      .image-container {
        right: -170px;
      }

      img {
        width: 550px;
      }

      .btn {
        font-size: 18px;
      }

      .fixed-btn {
        position: fixed !important;
        bottom: 30px !important;
        right: 8px !important;
        color: white;
        background: #d2b1f4;
        border-radius: 50%;
        width: 48px;
        height: 48px;
        font-weight: bold;
        text-align: center;
        text-decoration: none;
        padding: 10px 20px;
        margin-left: 0;
        box-sizing: border-box;
        transition: all 0.3s ease-in-out;

        .short-text {
          display: inline;
          font-size: 0.9rem;
        }
      }
    }
    @media screen and (max-width: 567px) {
      img {
        width: 500px;
      }
    }
    @media screen and (max-width: 518px) {
      .image-container {
        right: -160px;
      }
      .text-up {
        font-size: 1.5rem;
        padding: 0;
      }
      .text-down {
        font-size: 1.1rem;
        padding: 0;
      }
      .fixed-btn {
        right: 10px !important;
      }
    }
    @media screen and (max-width: 494px) {
      .text-up {
        font-size: 1.5rem;
      }
    }
    @media screen and (max-width: 480px) {
      .text-up {
        font-size: 1.4rem;
        padding: 0 20px 0 20px;
      }

      .text-down {
        font-size: 1.2rem;
      }

      .image-container {
        right: -140px;
      }

      img {
        width: 450px;
      }

      .btn {
        font-size: 14px;
      }
    }
  }
  @media screen and (max-width: 425px) {
    .text-up {
      font-size: 1.3rem;
      padding: 0 22px 0 22px;
    }

    .text-down {
      font-size: 1.1rem;
    }
  }
  @media screen and (max-width: 387px) {
    .text-up {
      font-size: 1.2rem;
      padding: 0;
    }

    .text-down {
      font-size: 1rem;
    }

    img {
      width: 420px;
    }

    /* .image-container {
      right: -150px;
    } */
  }
  @media screen and (max-width: 348px) {
    .text-up {
      font-size: 1.1rem;
    }
    .text-down {
      font-size: 0.9rem;
    }
    img {
      width: 400px;
    }
    .fixed-btn {
      right: 5px !important;

      .short-text {
        display: inline;
        font-size: 0.8rem;
      }
    }
  }
}
</style>
*/
