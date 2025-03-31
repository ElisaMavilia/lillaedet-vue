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
            <img src="../../public/images/email.png" alt="loading" />
          </div>
        </div>
      </div>

      <h2 class="text-center text-uppercase">Kontakta oss</h2>

      <!-- Card Wrapper -->
      <p class="info-form">
        Du kan använda detta kontaktformulär för att ställa frågor om våra
        behandlingar, priser, bokningar eller andra funderingar du har. Vi
        svarar så snart som möjligt och hjälper dig gärna med den information du
        behöver.
      </p>
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
            <br />
            <div class="privacy-policy text-uppercase">
              Användning av cookies
            </div>
            <div class="privacy-policy">
              Vi använder cookies för att säkerställa att vårt kontaktformulär
              fungerar korrekt och för att skydda mot obehöriga förfrågningar
              (CSRF-skydd). Dessa cookies är tekniska och krävs för att
              webbplatsen ska fungera korrekt. <br />
              Vilka cookies använder vi? <br />
              XSRF-TOKEN: Denna cookie används för att skydda din data och
              förhindra skadliga attacker genom att säkerställa att endast
              giltiga förfrågningar skickas från din webbläsare. Dessa cookies
              lagrar ingen personlig information och kräver inget samtycke
              enligt gällande lagstiftning. Genom att använda vårt
              kontaktformulär accepterar du att dessa cookies används.
            </div>
            <div class="privacy-policy">
              Genom att skicka ditt meddelande godkänner du att vi behandlar
              dina personuppgifter i enlighet med vår
              <router-link class="router-link-class" to="/integritetspolicy"
                >Integritetspolicy</router-link
              >. Läs vår policy för mer information.
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
    async getCsrfToken() {
      try {
        const response = await axios.get(`${this.store.apiBaseUrl}/csrf-token`);
        return response.data.csrf_token;
      } catch (error) {
        console.error("Errore getting CSRF Token:", error);
        return null;
      }
    },

    async sendForm() {
      if (this.validateForm()) {
        this.loading = true;

        const data = {
          name: this.name,
          address: this.email,
          message: this.message,
        };

        try {
          // Recupera il token CSRF dal cookie
          const csrfToken = this.getCookie("XSRF-TOKEN");

          const res = await axios.post(
            `${this.store.apiBaseUrl}/kontakta-oss`,
            data,
            {
              headers: {
                "X-CSRF-TOKEN": csrfToken, // Usa il token dal cookie
                "Content-Type": "application/json",
              },
              withCredentials: true, // Assicura che i cookie vengano inviati con la richiesta
            }
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
          this.$router.push({ name: "oh-nej" });
        }
      } else {
        this.$router.push({ name: "oh-nej" });
      }
    },
    getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);

      if (parts.length === 2) return parts.pop().split(";").shift();
      return null;
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

.router-link-class {
  color: $pink;
}

/* Card */
.card {
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  background-color: #f5eaf2;
  padding: 30px;
}

.info-form,
.card {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}

.info-form {
  padding: 10px 10px 30px 10px;
  color: $fadedFont;
  font-size: 1rem;
}

label,
#asterisk,
.privacy-policy {
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
  background: rgba(0, 0, 0, 0.7);
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
  color: white;
}

.loader-image {
  width: 300px;
  height: 300px;
  img {
    width: 100%;
    height: auto;
    filter: invert(100%);
  }
}
@media screen and (max-width: 490px) {
  .btn {
    font-size: 1rem;
  }
}
</style>
