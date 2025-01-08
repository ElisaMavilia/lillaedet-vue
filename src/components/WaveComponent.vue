<template>
    <div class="wave"></div>
</template>

<script>
    export default {
        name: 'WaveComponent'
    }
</script>

<style lang="scss" scoped>

@use '../assets/styles/partials/variables' as *;

.wave {
  display: block;
  position: relative;
  height: 40px;
  width: 100%;
  background: $light_pink;
  transform: scale(1, 1);
}

.wave:before {
  content: "";
  display: block;
  position: absolute;
  border-radius: 100%;
  width: 100%;
  height: 300px;
  background-color: white;
  right: -25%;
  top: 20px;
}

.wave:after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 100%;
  width: 100%;
  height: 300px;
  background-color:$light_pink;
  left: -25%;
  top: -240px;
  clip-path: ellipse(100% 15% at -15% 100%);
}
</style>