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

body {
    overflow-x: hidden;
    margin: 0;
    padding: 0;
}
.wave {
  display: block;
  position: relative;
  height: 70px; // Aumenta l'altezza complessiva
  width: 100%;
  background: $light_pink;
  transform: scale(1, 1);
}

.wave:before {
  content: "";
  display: block;
  position: absolute;
  border-radius: 100%;
  width: 120%; // Aumenta per estendere la convessità
  height: 400px; // Aumenta la dimensione per una curva più pronunciata
  background-color: white;
  right: -40%; // Sposta ulteriormente verso destra
  top: 50px; // Abbassa la curva
}

.wave:after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 100%;
  width: 120%; // Aumenta per estendere la concavità
  height: 400px; // Aumenta la profondità dell'onda
  background-color: $light_pink;
  left: -40%; // Sposta ulteriormente verso sinistra
  top: -300px; // Abbassa la curva per maggiore concavità
  clip-path: ellipse(100% 35% at -20% 100%); // Maggiore profondità della concavità
}
</style>