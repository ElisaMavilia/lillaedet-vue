<template>
  <div id="comparison" class="before-after-wrapper">
    <!-- Overlay di testo -->
    <div class="overlay-text">
      <p>Dra pinnen för före och efter</p>
    </div>

    <!-- Before-After Slider -->
    <figure>
      <div id="divisor" :style="{ width: divisorWidth }"></div>
    </figure>
    <input
      type="range"
      min="0"
      max="100"
      v-model="sliderValue"
      @input="moveDivisor"
    />
  </div>
</template>

<script>
export default {
  name: "BeforeAfterComponent",
  data() {
    return {
      sliderValue: 50, // Slider initial value
    };
  },
  computed: {
    divisorWidth() {
      return `${this.sliderValue}%`; // Sets the procentage of the width
    },
  },
  methods: {
    moveDivisor() {
      console.log(`Divisor width: ${this.divisorWidth}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.before-after-wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 600px;
}

.overlay-text {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  pointer-events: none; // Assures that the text doesn't interfere with scrolling
  color: black;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  white-space: nowrap; //Avoids line breaks
  overflow: hidden;
  text-overflow: ellipsis; //Adds ... if text overflows
}

#comparison {
  width: 20vw;
  height: 20vw;
  max-width: 600px;
  max-height: 600px;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
}

#comparison figure {
  background-image: url("../assets/img/after_card.jpeg");
  background-size: cover;
  position: relative;
  font-size: 0;
  width: 100%;
  height: 100%;
  margin: 0;
}

#comparison figure div {
  background-image: url("../assets/img/before_card.jpg");
  background-size: cover;
  position: absolute;
  width: 100%;
  box-shadow: 0 5px 10px -2px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  bottom: 0px;
  height: 100%;
}

input[type="range"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  position: relative;
  top: -2rem;
  left: -2%;
  background-color: rgba(255, 255, 255, 0.1);
  width: 102%;
  z-index: 2; //Slider has to stay on top of the image
}

input[type="range"]:focus {
  outline: none;
}

input[type="range"]:active {
  outline: none;
}

input[type="range"]::-moz-range-track {
  -moz-appearance: none;
  height: 15px;
  width: 98%;
  background-color: rgba(255, 255, 255, 0.1);
  position: relative;
  outline: none;
}

input[type="range"]::active {
  border: none;
  outline: none;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 15px;
  background: #fff;
  border-radius: 0;
}

input[type="range"]::-moz-range-thumb {
  -moz-appearance: none;
  width: 20px;
  height: 15px;
  background: #fff;
  border-radius: 0;
}

input[type="range"]:focus::-webkit-slider-thumb {
  background: rgba(255, 255, 255, 0.5);
}

input[type="range"]:focus::-moz-range-thumb {
  background: rgba(255, 255, 255, 0.5);
}

/* Media Queries */
@media (max-width: 1399.98px) {
  .overlay-text {
    font-size: 1rem;
  }
  #comparison {
    width: 26vw;
    height: 26vw;
  }
}

@media screen and (max-width: 1199.98px) {
  .overlay-text {
    font-size: 0.9rem;
  }

  #comparison {
    width: 25vw;
    height: 25vw;
  }

  @media screen and (max-width: 991.98px) {
    #comparison {
      width: 35vw;
      height: 35vw;
    }
  }

  @media (max-width: 575.98px) {
    #comparison {
      width: 40vw;
      height: 40vw;
      margin-right: 8px;
    }
    .overlay-text {
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 480px) {
    #comparison {
      width: 50vw;
      height: 50vw;
      margin-right: 0 !important;
    }
  }

  @media screen and (max-width: 387px) {
    #comparison {
      width: 65vw;
      height: 65vw;
    }
  }
}
</style>
