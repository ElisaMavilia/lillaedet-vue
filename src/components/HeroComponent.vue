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
  height: 80vh;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-weight: 400;
  font-family: $secondaryfont;
  color: $fadedFont;
  text-shadow: 5px 5px 8px rgba(0, 0, 0, 0.3);
  z-index: 1;
}
h1 {
  font-size: 2.1rem;
  font-weight: 600;
  white-space: nowrap; //Avoids line break
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
  color: #7f43bb;
  border-radius: 50px;
  font-weight: bold;
  font-size: 1rem;
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

/* #pastel-button-container {
  position: relative;
  margin-right: 0;
} */

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
  font-size: 1.5rem;
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
  color: #f0e9f7;
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
  // Fixed button
  .fixed-btn {
    right: 15px !important;
  }
}

/* @media screen and (max-width: 1332px) {
}

@media screen and (max-width: 1268px) {
} */

/* Large (lg) ≥992px -> laptop */
@media screen and (max-width: 1199.98px) {
  .hero {
    height: 40vh;
  }
  h1 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1.4rem;
  }
  // Buttons
  .btn {
    padding: 9px 19px;
    font-size: 1.4rem;
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

  @media screen and (max-width: 1199.98px) {
    .hero {
      height: 70vh;
    }
  }

  @media screen and (max-width: 991.98px) {
    .hero {
      height: 50vh;
    }
    h1 {
      font-size: 1.7rem;
    }

    p {
      font-size: 1.4rem;
    }
  }

  @media screen and (max-width: 820px) {
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
        font-size: 1rem;
      }
    }

    @media screen and (max-width: 768px) {
      h1 {
        font-size: 1.3rem;
      }

      p {
        font-size: 1.2rem;
      }
    }
    @media screen and (max-width: 722px) {
      h1 {
        font-size: 1.4rem;
      }
    }

    @media screen and (max-width: 671px) {
      h1 {
        font-size: 1.3rem;
      }
      .fixed-btn {
        right: 20px !important;
      }
    }

    @media screen and (max-width: 594px) {
      h1 {
        font-size: 1.2rem;
      }
      p {
        font-size: 1rem;
      }
      .frame {
        margin-top: 10px;
      }
      .btn {
        font-size: 1rem;
      }
      .fixed-btn {
        right: 5px !important;
      }
    }

    @media (max-width: 575.98px) {
      h1 {
        font-size: 1.1rem;
      }
      p {
        font-size: 1rem;
      }
      .btn {
        font-size: 0.9rem;
      }

      .fixed-btn {
        position: fixed !important;
        bottom: 30px !important;
        right: 8px !important;
        color: white;
        background: #d2b1f4;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        font-weight: bold;
        text-align: center;
        text-decoration: none;
        padding: 10px 20px;
        margin-left: 0;
        box-sizing: border-box;
        transition: all 0.3s ease-in-out;

        .short-text {
          display: inline;
          font-size: 0.8rem;
        }
      }
    }

    @media screen and (max-width: 518px) {
      h1 {
        font-size: 1rem;
      }
      p {
        font-size: 0.9rem;
      }
      .fixed-btn {
        right: 20px !important;
      }
    }
  }
  @media screen and (max-width: 470px) {
    h1 {
      font-size: 0.8rem;
      font-weight: 800;
    }
    p {
      font-size: 0.9rem;
    }
    .fixed-btn {
      right: 8px !important;
    }
  }
  @media screen and (max-width: 408px) {
    h1 {
      font-size: 0.7rem;
    }
    p {
      font-size: 0.7rem;
    }
  }
  @media screen and (max-width: 371px) {
    .btn {
      font-size: 0.8rem;
    }
  }
  @media screen and (max-width: 348px) {
    .fixed-btn {
      right: 5px !important;

      .short-text {
        display: inline;
        font-size: 0.8rem;
      }
    }
  }
  @media (orientation: landscape) {
    .hero {
      height: 100vh;
    }
    .hero-content {
      top: 55%;
    }
  }
}
</style>
