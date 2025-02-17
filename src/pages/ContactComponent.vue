<template>
  <div id="contact-container" class="container">
    <!-- Loader -->
    <div v-if="loading" class="loader-overlay">
      <div
        class="loader d-flex flex-column justify-content-center align-items-center"
      >
        <div class="my-2">Meddelandet skickas...</div>
        <div>Vänligen uppdatera inte sidan</div>
        <div class="loader-image">
          <img src="../../public/images/tooth-loader.png" alt="loading" />
        </div>
      </div>
    </div>

    <h2 class="text-center text-uppercase">Kontakta oss</h2>
    <div class="row">
      <form @submit.prevent="sendForm" class="col-12 text-start">
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Skriv ditt Namn"
            v-model="name"
            @input="validateName"
            :disabled="loading"
          />
          <span v-if="errors.name" class="text-danger">{{ errors.name }}</span>
        </div>
        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            placeholder="Skriv ditt Email"
            v-model="email"
            @input="validateEmail"
            :disabled="loading"
          />
          <span v-if="errors.email" class="text-danger">{{
            errors.email
          }}</span>
        </div>
        <div class="mb-3">
          <textarea
            class="form-control"
            placeholder="Skriv ditt Meddelande"
            v-model="message"
            @input="validateMessage"
            :disabled="loading"
          ></textarea>
          <span v-if="errors.message" class="text-danger">{{
            errors.message
          }}</span>
        </div>
        <button
          type="submit"
          class="btn btn1"
          :disabled="loading || !isFormValid"
        >
          Skicka
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
import axios from "axios";
import DOMPurify from "dompurify";

export default {
  name: "ContactComponent",

  data() {
    return {
      store,
      name: "",
      email: "",
      message: "",
      loading: false,
      errors: {},
    };
  },
  computed: {
    isFormValid() {
      return !this.errors.name && !this.errors.email && !this.errors.message;
    },
  },
  methods: {
    async sendForm() {
      console.log("sendForm function called");

      if (this.validateForm()) {
        console.log("Form is valid, sending data...");

        this.loading = true;

        const data = {
          name: this.name,
          address: this.email,
          message: this.message,
        };

        console.log("Data to send:", data);
        try {
          const res = await axios.post(
            `${this.store.apiBaseUrl}/kontakta-oss`,
            data
          );

          // DOMPurify sanitization
          const sanitizedName = DOMPurify.sanitize(this.name); // Sanitize the name
          sessionStorage.setItem("userName", sanitizedName); // Save the sanitized name

          console.log(res.data);
          this.loading = false;

          // Form reset
          this.name = "";
          this.email = "";
          this.message = "";
          this.errors = {};

          // Redirect to the Thank you page
          this.$router.push({ name: "TackComponent" });
        } catch (error) {
          console.error("Error in sending data:", error);
          this.loading = false;

          this.$router.push({ name: "ErrorPageComponent" }); // Redirect to the error page
        }
      } else {
        this.$router.push({ name: "ErrorPageComponent" });
        console.log("Form validation failed");
      }
    },

    validateName() {
      const regexName = /^[a-zA-Z\s']+$/; // Allows just letters, spaces and apostrophes
      if (this.name.trim() === "") {
        this.errors.name = "Detta fält är obligatoriskt";
      } else if (this.name.trim().length < 2) {
        this.errors.name = "Namnet skall vara minst 2 tecken";
      } else if (!regexName.test(this.name)) {
        this.errors.name =
          "Namnet får endast innehålla bokstäver och mellanslag";
      } else {
        this.errors.name = null; // Rimuovi l'errore se valido
      }
      console.log("Name validation:", this.errors.name);
    },

    validateEmail() {
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (this.email.trim() === "") {
        this.errors.email = "Detta fält är obligatoriskt.";
      } else if (!regexEmail.test(this.email)) {
        this.errors.email = "Email adressen är ogiltig.";
      } else {
        this.errors.email = null;
      }
      console.log("Email validation:", this.errors.email);
    },

    validateMessage() {
      if (this.message.trim() === "") {
        this.errors.message = "Detta fält är obligatoriskt.";
      } else {
        this.errors.message = null;
      }
      console.log("Message validation:", this.errors.message);
    },

    // Global form validation
    validateForm() {
      // Reset degli errori
      this.errors = {};

      this.validateName();
      this.validateEmail();
      this.validateMessage();

      // Verifies if all fields are valid
      const formValid = !Object.values(this.errors).some(
        (error) => error !== null && error !== ""
      );

      console.log("Validation result:", formValid);
      console.log("Errors:", this.errors);

      return formValid;
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
    outline: 2px solid $warm_ligth_pink;
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

/* LOADER */
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loader {
  font-size: 1.5rem;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  color: $fadedFont;
}

.loader-image {
  width: 300px;
  height: 300px;
  img {
    width: 100%;
    height: auto;
  }
}
</style>
