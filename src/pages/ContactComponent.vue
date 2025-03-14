<template>
  <section id="contact">
    <div id="contact-container" class="container">
      <!-- Loader -->
      <div v-if="loading" class="loader-overlay">
        <div
          class="loader d-flex flex-column justify-content-center align-items-center"
        >
          <div class="my-2">Meddelandet skickas...</div>
          <div>Vänligen uppdatera inte sidan</div>
          <div class="loader-image">
            <img src="../../public/images/tooth-loader.png" alt="loading" />
          </div>
        </div>
      </div>

      <h2 class="text-center text-uppercase">Kontakta oss</h2>

      <!-- Card Wrapper -->
      <div class="card">
        <div class="row">
          <form @submit.prevent="sendForm" class="col-12 text-start">
            <div class="mb-3">
              <label for="name" class="form-label">Namn*</label>
              <input
                type="text"
                id="name"
                class="form-control"
                placeholder="Skriv ditt Namn"
                v-model="name"
                @input="validateName"
                :disabled="loading"
              />
              <span v-if="errors.name" class="text-danger">{{
                errors.name
              }}</span>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">E-mail address*</label>
              <input
                type="email"
                id="email"
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
              <label for="message" class="form-label">Meddelande*</label>
              <textarea
                id="message"
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
            <div id="asterisk">* Fältet är obligatorisk</div>
            <div id="privacy-policy">
              Genom att skicka ditt meddelande godkänner du att vi behandlar
              dina personuppgifter i enlighet med vår Integritetspolicy. Läs vår
              policy för mer information.
            </div>
            <div class="text-center frame">
              <button
                type="submit"
                class="btn btn1"
                :disabled="loading || !isFormValid"
              >
                Skicka
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
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
      if (this.validateForm()) {
        this.loading = true;

        const data = {
          name: this.name,
          address: this.email,
          message: this.message,
        };

        try {
          const res = await axios.post(
            `${this.store.apiBaseUrl}/kontakta-oss`,
            data
          );
          const sanitizedName = DOMPurify.sanitize(this.name);
          sessionStorage.setItem("userName", sanitizedName);
          this.loading = false;

          this.name = "";
          this.email = "";
          this.message = "";
          this.errors = {};

          this.$router.push({ name: "TackComponent" });
        } catch (error) {
          this.loading = false;
          this.$router.push({ name: "ErrorPageComponent" });
        }
      } else {
        this.$router.push({ name: "ErrorPageComponent" });
      }
    },
    validateName() {
      const regexName = /^[a-zA-Z\s']+$/;
      if (this.name.trim() === "") {
        this.errors.name = "Detta fält är obligatoriskt";
      } else if (this.name.trim().length < 2) {
        this.errors.name = "Namnet skall vara minst 2 tecken";
      } else if (!regexName.test(this.name)) {
        this.errors.name =
          "Namnet får endast innehålla bokstäver och mellanslag";
      } else {
        this.errors.name = null;
      }
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
    },
    validateMessage() {
      if (this.message.trim() === "") {
        this.errors.message = "Detta fält är obligatoriskt.";
      } else {
        this.errors.message = null;
      }
    },
    validateForm() {
      this.errors = {};
      this.validateName();
      this.validateEmail();
      this.validateMessage();
      return !Object.values(this.errors).some(
        (error) => error !== null && error !== ""
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

#contact {
  width: 100%;
  background-color: $light_pink;
}

#contact-container {
  margin-top: 150px;
  width: 100%;
  height: auto;
  padding-bottom: 100px;
}

h2 {
  margin-bottom: 50px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  font-weight: 400;
  color: $fadedFont;
  text-align: center;
}

/* Card */
.card {
  max-width: 800px;
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  background-color: #f5eaf2;
  padding: 30px;
  margin: 0 auto;
}

label,
#asterisk,
#privacy-policy {
  color: $fadedFont;
  font-size: 0.8rem;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid $warm_ligth_pink;
  background-color: #fff;

  &::placeholder {
    color: rgb(167, 164, 164);
  }

  &:focus {
    outline: 2px solid $warm_ligth_pink;
  }
}

/* Button */
.frame {
  margin-top: 30px;
  display: flex;
  justify-content: start;
  align-items: center;
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

.btn1 {
  background-color: #e8d1ff;
  color: #ce9eff;
}

.btn:hover {
  color: #fff;
}

/* Loader */
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
@media screen and (max-width: 490px) {
  .btn {
    font-size: 1rem;
  }
}
</style>
