<template>
  <div class="wrapper">
    <div class="box">
      <img src="../assets/img/oh-no.png" alt="Oh-no image" />
      <h2 class="text-danger">Åjda!</h2>
      <div class="meddelande-text-up text-danger">
        Ett fel uppstod och vi kunde inte leverera ditt meddelande.
      </div>
      <div class="meddelande-text-under">Prova igen om en stund</div>
      <div class="text-redirect countdown text-center">
        Du kommer att vara omredigerat till vara Kontaktsida om
        {{ countdown }} sekunder. <br />
        Gå direkt till <a href="/kontakta-oss">Kontaktsida</a>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
export default {
  name: "ErrorPageComponent",
  data() {
    return {
      countdown: 20,
    };
  },
  mounted() {
    this.startCountdown();
  },
  methods: {
    startCountdown() {
      const interval = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--;
        } else {
          clearInterval(interval);
          window.location.href = "/kontakta-oss";
        }
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.wrapper {
  background: $light_pink; /* Impostato come background */
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Per centrare verticalmente */
}

.box {
  width: 100%;
  max-width: 800px; /* Limita la larghezza */
  background-color: white; /* Sfondo bianco */
  border-radius: 8px; /* Raggio arrotondato */
  border: 1px solid #ccc; /* Bordo grigio chiaro */
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  padding: 30px;
  text-align: center;
}

img {
  width: 100px;
  padding-bottom: 20px;
}
.meddelande-text-up {
  font-size: 1.5rem;
  padding-top: 10px;
}

.meddelande-text-under {
  font-size: 1rem;
  padding-top: 20px;
}

.text-redirect {
  font-size: 0.9rem;
  padding-top: 20px;
}

a {
  color: #7850f3;
}
</style>
