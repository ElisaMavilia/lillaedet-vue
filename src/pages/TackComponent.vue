<template>
  <div class="wrapper">
    <div class="box">
      <i class="fa-regular fa-envelope pb-4"></i>
      <h2 v-if="contacts.length > 0">Hej {{ contacts[0].name }}!</h2>
      <div class="meddelande-text-up">Tack för ditt meddelande.</div>
      <div class="meddelande-text-under">
        Vi har tagit emot ditt meddelande och vi kommer att svara snart.
      </div>
      <div class="text-redirect countdown text-center">
        Du kommer att vara omredigerat till hemsidan om
        {{ countdown }} sekunder. <br />
        Gå direkt till <a href="/">hemsidan</a>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
import axios from "axios";

export default {
  name: "TackComponent",
  data() {
    return {
      store,
      countdown: 20,
      contacts: [],
    };
  },
  mounted() {
    this.GetContactEl();
    this.startCountdown();
  },
  methods: {
    GetContactEl() {
      axios
        .get(`${this.store.apiBaseUrl}/latest-lead`)
        .then((response) => {
          console.log("Api Response:", response.data);
          if (response.data.success && response.data.result) {
            this.contacts = [response.data.result];
          }
        })
        .catch((error) => {
          console.error("Error fetching latest contact:", error);
        });
    },

    startCountdown() {
      const interval = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--;
        } else {
          clearInterval(interval);
          window.location.href = "/";
        }
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.wrapper {
  background: $light_pink;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.box {
  width: 100%;
  max-width: 800px;
  background-color: white;
  border-radius: 8px;
  border: 1px solid #ccc;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  padding: 30px;
  text-align: center;
}

.fa-envelope {
  font-size: 100px;
  color: #b197fc;
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
