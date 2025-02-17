<template>
  <div class="not-found-container">
    <div class="not-found-content">
      <img src="../assets/img/ops.png" alt="Embarassed" />
      <h1 class="not-found-title">404</h1>
      <p class="not-found-message">Oops! Sidan du söker kunde inte hittas</p>
      <router-link to="/" class="btn-return-home"
        >Tillbaka till Home</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFoundComponent",
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.not-found-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Occupa l'intera altezza della finestra */
  background-color: $light_pink;
  font-family: "Arial", sans-serif;
}

.not-found-content {
  text-align: center;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

img {
  width: 100px;
  height: auto;
}

.not-found-title {
  font-size: 8rem;
  color: #ce9eff;
  font-weight: bold;
  margin-bottom: 20px;
}

.not-found-message {
  font-size: 1.5rem;
  color: $fadedFont;
  margin-bottom: 30px;
}

.btn-return-home {
  display: inline-block;
  padding: 12px 30px;
  background: $warm_ligth_pink;
  color: $fadedFont;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.btn-return-home:hover {
  background-color: #ce9eff;
  color: white; /* Colore più scuro al passaggio del mouse */
}
</style>
