<template>
  <section id="hero">
    <div class="background-half d-flex align-items-center h-100">
      <!-- Text Section -->
      <div class="text-container">
        <div class="text-up text-uppercase">Lilla Edet Tandläkarcenter</div>
        <h2 class="ps-5 pt-3">
          <span class="text-down text-uppercase"
            >Din Tandklinik i Lilla Edet</span
          >
        </h2>
        <!-- Buttons Section -->
        <div
          id="pastel-button-container"
          class="d-flex align-items-center align-content-center"
        >
          <!-- Boka Tid Online Button (Muntra)-->
          <div class="frame">
            <a
              href="https://www.muntra.com/lilla-edet-tandlakarcenter/c/5840?language=sv"
              class="btn btn1"
              :class="{ 'fixed-btn': isScrolled }"
            >
              <span class="full-text">Boka Tid Online</span>
              <span class="d-none short-text">Boka</span>
            </a>
          </div>
          <!-- Ring Oss Button -->
          <div class="frame ms-3">
            <a href="tel:+46520657724" class="btn btn2 btn-right">Ringa oss</a>
          </div>
        </div>
      </div>
      <!-- Image with overflow to general-content in the MainComponent -->
      <div class="image-container">
        <img src="../assets/img/equipment5.png" alt="Dental care equipment" />
      </div>
    </div>
  </section>
  <section>
    <WaveComponent />
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
body {
  margin: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-family: $basefont;
  width: 100%;
}

#hero {
  width: 100%;
  height: 600px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  z-index: 10;
}

.background-half {
  width: 100%;
  height: 100%;
  background: $light_pink;
  display: flex;
  align-items: center;
  position: relative;
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

.text-up {
  font-size: 3rem;
  font-weight: 400;
  font-family: $secondaryfont;
  display: flex;
  text-align: left;
  color: #6e6969;
  text-shadow: 5px 5px 8px rgba(0, 0, 0, 0.3);
}

.text-down {
  font-size: 1.6rem;
  font-weight: 190;
  text-shadow: 5px 5px 8px rgba(0, 0, 0, 0.3);
}

/* Image */
.image-container {
  position: absolute;
  top: 60%;
  right: -70px; // Modifica questo valore con la media query -> @MEDIA QUERY
  transform: translateY(-50%);
  z-index: 5;
  pointer-events: none; // Assures that the image doesn't interfere with scrolling
}

img {
  width: 800px;
  height: auto;
  transform: rotate(-10deg);
}

.frame {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Buttons starting position */
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
@media (max-width: 1399.98px) {
  .image-container {
    position: absolute;
    top: 65%;
    right: -90px; // Modifica questo valore con la media query -> @MEDIA QUERY
  }
  // Fixed button
  .fixed-btn {
    right: 15px !important;
  }
}

/* Large (lg) ≥992px -> laptop */
@media screen and (max-width: 1199.98px) {
  .image-container {
    position: absolute;
    top: 75%;
    right: -90px; // Modifica questo valore con la media query -> @MEDIA QUERY
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
      right: -140px; // Modifica questo valore con la media query -> @MEDIA QUERY
    }
  }

  @media screen and (max-width: 868px) {
    img {
      width: 590px;
    }
    .image-container {
      right: -140px; // Modifica questo valore con la media query -> @MEDIA QUERY
    }
  }

  @media (max-width: 770px) {
    .text-up {
      font-size: 2.3rem;
      padding-top: 0;
    }

    .text-down {
      font-size: 1.3rem;
    }

    .image-container {
      right: -140px; // Modifica questo valore con la media query -> @MEDIA QUERY
    }

    img {
      width: 580px;
    }

    .btn {
      font-size: 22px;
    }

    .fixed-btn {
      right: 20px !important;
    }
    .fixed-btn .short-text {
      display: inline;
      font-size: 1.1rem;
    }
  }
  @media (max-width: 727px) {
    .image-container {
      right: -150px; // Modifica questo valore con la media query -> @MEDIA QUERY
    }
  }
  @media (max-width: 718px) {
    .image-container {
      right: -160px; // Modifica questo valore con la media query -> @MEDIA QUERY
    }
  }

  @media (max-width: 702px) {
    .image-container {
      right: -180px; // Modifica questo valore con la media query -> @MEDIA QUERY
    }
  }

  @media (max-width: 641px) {
    .image-container {
      right: -190px; // Modifica questo valore con la media query -> @MEDIA QUERY
    }
  }

  @media (max-width: 608px) {
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
      right: -170px; // Modifica questo valore con la media query -> @MEDIA QUERY
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

    /* @media (max-width: 575.98px) {
    .text-up {
      font-size: 1.8rem;
      padding-top: 0;
    }

    .text-down {
      font-size: 1.1rem;
    }

    .image-container {
      right: -170px; // Modifica questo valore con la media query -> @MEDIA QUERY
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
    }*/
    @media (max-width: 567px) {
      img {
        width: 500px;
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
        right: -140px; // Modifica questo valore con la media query -> @MEDIA QUERY
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
  @media screen and (max-width: 375px) {
  }
}
</style>
