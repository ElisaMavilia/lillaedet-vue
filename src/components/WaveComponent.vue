<template>
  <div class="wave"></div>
</template>

<script>
export default {
  name: "WaveComponent",
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

body {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}
.wave {
  display: block;
  position: relative;
  height: 70px;
  width: 100%;
  background: $light_pink;
  transform: scale(1, 1);
}

.wave:before {
  content: "";
  display: block;
  position: absolute;
  border-radius: 100%;
  width: 120%;
  height: 400px;
  background-color: white;
  right: -40%;
  top: 50px;
}

.wave:after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 100%;
  width: 120%;
  height: 400px;
  background-color: $light_pink;
  left: -40%;
  top: -300px;
  clip-path: ellipse(100% 35% at -20% 100%);
}
</style>
