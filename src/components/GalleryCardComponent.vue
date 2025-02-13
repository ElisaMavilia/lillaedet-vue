<template>
  <div class="container d-flex card-container">
    <div id="card-box" class="card">
      <img
        :src="gallery.image"
        class="card-img-top"
        :alt="gallery.description"
      />
      <div class="card-text">
        <p class="text-center">{{ gallery.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GalleryCardComponent",
  props: {
    gallery: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.card-container {
  flex: calc((100% - (20px * 3)) / 4);
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
}

#card-box {
  box-sizing: border-box;
  width: auto;
  height: 400px;
  margin: 0;
  border-radius: 10px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1/1;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px) scale(1.05); // Magnificent effect and scaling
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); // Add a subtle shadow
  }
}

// Image
.card-img-top {
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  padding: 30px;
}

.card-body {
  margin-top: 10px;
  text-align: center;
}

// Text
.card-text {
  text-align: center;
  font-size: 0.7rem;
  font-family: $secondaryfont;
  color: $fadedFont;
  padding-bottom: 5px;
}
</style>
