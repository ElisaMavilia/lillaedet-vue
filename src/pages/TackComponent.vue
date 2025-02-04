<template>
  <div class="container wrapper">
    <div class="box">
      <h2 v-if="contacts.length > 0">
        Hej {{ contacts[0].name }}! Tack för ditt email!
      </h2>
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
    /*  this.startCountdown();  */ // Se vuoi il countdown
  },
  methods: {
    GetContactEl() {
      axios
        .get(`${this.store.apiBaseUrl}/latest-lead`)
        .then((response) => {
          console.log("Api Response:", response.data);
          if (response.data.success && response.data.result) {
            this.contacts = [response.data.result]; // Converte in array
          }
        })
        .catch((error) => {
          console.error("Error fetching latest contact:", error);
        });
    },

    /* startCountdown() {
      const interval = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--;
        } else {
          clearInterval(interval);
          window.location.href = "/";
        }
      }, 1000);
    }, */
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.wrapper {
  margin-top: 200px;
  margin-bottom: 100px;
}

.box {
  width: 800px;
  height: 800px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  margin: 0 auto;
  padding: 20px;
}
</style>
