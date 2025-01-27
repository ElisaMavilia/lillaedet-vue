<template>
  <div id="contact-container" class="container">
    <h2 class="text-center text-uppercase">Kontakta oss</h2>
    <div class="row">
      <form @submit.prevent="sendForm()" class="col-12 text-start">
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Skriv ditt Namn"
            v-model="name"
          />
        </div>
        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            placeholder="Skriv ditt Email Address"
            v-model="email"
          />
        </div>
        <div class="mb-3">
          <textarea
            class="form-control"
            placeholder="Skriv ditt Meddelande"
            v-model="message"
          ></textarea>
        </div>
        <button type="submit" class="btn btn1">Skicka</button>
      </form>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
import axios from "axios";
export default {
  name: "ContactComponent",
  data() {
    return {
      store,
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendForm() {
      const data = {
        name: this.name,
        address: this.email,
        message: this.message,
      };
      console.log(data);
      axios
        .post(`${this.store.apiBaseUrl}/kontakta-oss`, data)
        .then((res) => {
          console.log(res.data);
          this.success = true;
          this.name = "";
          this.email = "";
          this.message = "";
        })
        .then((res) => {})
        .catch((error) => {})
        .finally(() => {});
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

#contact-container {
  margin-top: 200px;
  width: 100%;
  height: auto;
}

h2 {
  margin-bottom: 100px;
  text-shadow: 5px 5px 8px rgba(0, 0, 0, 0.3);
  font-weight: 400;
  color: $fadedFont;
}

form {
  margin-bottom: 200px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid $warm_ligth_pink;

  &::placeholder {
    color: rgb(167, 164, 164);
    opacity: 1;
  }

  &:focus {
    outline: 2px solid $warm_ligth_pink; // Rimuove l'effetto di outline predefinito del browser
  }
}

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
  font-size: 26px;
  text-align: center;
  text-decoration: none;
}

/* Button Boka Tid Online */
.btn1 {
  background-color: #e8d1ff;
  color: #ce9eff;
}

.btn:hover {
  color: #fff;
}

/* Hover: Ring Oss Button */
.btn-right:hover {
  color: $purple_light;
}

/* Click effect on buttons */
.btn:active {
  box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.3),
    -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
    inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
    inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2);
}
</style>
