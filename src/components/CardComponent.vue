<template>
  <!-- {{ treatments }} -->
  <div class="container d-flex card-container">
    <div id="card-box" class="card">
      <img :src="getImage" class="card-img-top" alt="Dental Treatment" />
      <p class="card-text text-uppercase">{{ treatment.name }}</p>
      <RouterLink
        :to="{ name: 'treatment-detail', params: { slug: treatment.slug } }"
        class="btn btn1"
      >
        Läs mer
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { store } from "../store";

export default {
  name: "CardComponent",
  props: {
    treatment: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      store,
    };
  },

  computed: {
    getImage() {
      return this.treatment.image
        ? this.store.imgBasePath + this.treatment.image
        : "treatments/placeholder.png";
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.card-container {
  flex: 0 1 calc((100% - (20px * 3)) / 4);
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  cursor: pointer;
}

#card-box {
  box-sizing: border-box;
  width: 250px;
  height: 250px;
  margin: 0;
  border-radius: 20px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1/1;
  transition: transform 0.3s ease, box-shadow 0.3s ease; // Smooth animations

  &:hover {
    transform: translateY(-10px) scale(1.05); // Magnificent effect and scaling
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); // Add a subtle shadow
  }
}

// Image
.card-img-top {
  object-fit: cover;
  width: 60%;
  height: auto;
  border-radius: 10px;
  padding: 30px;
}

.card-body {
  margin-top: 10px;
  text-align: center;
}

// Text
.card-text {
  text-align: center;
  font-size: 1rem;
  font-family: $secondaryfont;
  padding-bottom: 5px;
}

// Button
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
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  background-color: #e8d1ff;
  color: $purple_basic;
  border: none;
  transition: all 0.3s ease;
  cursor: pointer;
  outline: none;
  margin-bottom: 20px;
}
.btn1 {
  background-color: #e8d1ff;
  color: #ce9eff;
}

// Button Hover white
.btn:hover {
  color: #fff;
}

.btn:active {
  box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.3),
    -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
    inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
    inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2);
}
/* MEDIA QUERIES Computer first */

/* Large (lg) ≥992px -> laptop */
@media screen and (max-width: 1199.98px) {
  .card-container {
    flex: 0 1 calc((100% - (15px * 3)) / 4);
    gap: 15px;
    padding: 15px;
  }

  #card-box {
    width: 200px;
    height: 200px;
  }

  // Image
  .card-img-top {
    object-fit: cover;
    width: 60%;
    height: auto;
    border-radius: 10px;
    padding: 30px;
  }
  // Text
  .card-text {
    text-align: center;
    font-size: 0.9rem;
    padding-bottom: 4px;
  }

  // Button
  .btn {
    margin-bottom: 30px;
  }
}
</style>
