<template>
  <section id="contact">
    <div id="contact-container" class="">
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

      <section id="contact-up">
        <div id="contact-intro-container" class="d-flex">
          <img
            src="../assets/img/contact-us.png"
            alt="Tandläkare med patient under en bhandling"
          />
          <div id="contact-intro">
            <h2 class="text-uppercase">Kontakta oss</h2>
            Du kan använda detta <strong>kontaktformulär</strong> för att ställa
            frågor om våra behandlingar, priser, bokningar eller andra
            funderingar du har. Vi svarar så snart som möjligt och hjälper dig
            gärna med den information du behöver. Du är också välkommen att
            kontakta oss <strong>via telefon </strong>på: <br />
            <a class="router-link-class" href="tel:0520657724">0520-65 77 24</a
            ><br />
            eller <strong>mejla oss</strong> på: <br />
            <a
              class="router-link-class"
              href="mailto:info@lillaedettandlakarcenter.se"
              >info@lillaedettandlakarcenter.se</a
            >
          </div>
        </div>
      </section>
      <div class="wave wave-purple"></div>

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
            <div class="privacy-policy pb-3">
              Vi använder cookies för att säkerställa att vårt kontaktformulär
              fungerar korrekt och för att skydda mot obehöriga förfrågningar.
              Dessa cookies lagrar ingen personlig information och kräver inget
              samtycke enligt gällande lagstiftning. Genom att använda vårt
              kontaktformulär accepterar du att dessa cookies används.
              <br />
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
          const csrfToken = this.getCookie("XSRF-TOKEN");

          const res = await axios.post(
            `${this.store.apiBaseUrl}/kontakta-oss`,
            data,
            {
              headers: {
                "X-CSRF-TOKEN": csrfToken,
                "Content-Type": "application/json",
              },
              withCredentials: true,
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
  margin-top: 20px;
  width: 100%;
  height: auto;
  padding-bottom: 100px;
}

h2 {
  margin-bottom: 20px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  font-weight: 400;
  color: black;
}

#contact-up {
  margin: 90px 0;
  padding-top: 80px;
  width: 100%;
  background-color: $shocking_purple;
}

#contact-up img {
  width: 690px;
  height: auto;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
  margin-top: -90px;
}

#contact-intro-container {
  border-radius: 20px;
  padding: 60px 90px 60px 60px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}

#contact-intro {
  width: 45%;
  font-size: 1.2rem;
  color: $fadedFont;
  padding-bottom: 90px;
  padding-top: 0px;
  padding-left: 50px;
}
.wave {
  width: 100%;
  height: 90px;
  clip-path: polygon(
    100% 0%,
    0% 0%,
    0% 75.64%,
    1.43% 76.93%,
    2.86% 78.09%,
    4.29% 79.11%,
    5.71% 79.96%,
    7.14% 80.66%,
    8.57% 81.17%,
    10% 81.5%,
    11.43% 81.64%,
    12.86% 81.58%,
    14.29% 81.34%,
    15.71% 80.91%,
    17.14% 80.3%,
    18.57% 79.51%,
    20% 78.57%,
    21.43% 77.47%,
    22.86% 76.24%,
    24.29% 74.89%,
    25.71% 73.44%,
    27.14% 71.92%,
    28.57% 70.33%,
    30% 68.71%,
    31.43% 67.07%,
    32.86% 65.43%,
    34.29% 63.83%,
    35.71% 62.28%,
    37.14% 60.8%,
    38.57% 59.41%,
    40% 58.13%,
    41.43% 56.98%,
    42.86% 55.98%,
    44.29% 55.13%,
    45.71% 54.45%,
    47.14% 53.96%,
    48.57% 53.64%,
    50% 53.52%,
    51.43% 53.58%,
    52.86% 53.84%,
    54.29% 54.29%,
    55.71% 54.91%,
    57.14% 55.71%,
    58.57% 56.67%,
    60% 57.77%,
    61.43% 59.01%,
    62.86% 60.37%,
    64.29% 61.83%,
    65.71% 63.36%,
    67.14% 64.95%,
    68.57% 66.58%,
    70% 68.22%,
    71.43% 69.85%,
    72.86% 71.45%,
    74.29% 73%,
    75.71% 74.47%,
    77.14% 75.85%,
    78.57% 77.12%,
    80% 78.26%,
    81.43% 79.25%,
    82.86% 80.08%,
    84.29% 80.75%,
    85.71% 81.23%,
    87.14% 81.53%,
    88.57% 81.64%,
    90% 81.56%,
    91.43% 81.29%,
    92.86% 80.83%,
    94.29% 80.19%,
    95.71% 79.38%,
    97.14% 78.41%,
    98.57% 77.29%,
    100% 76.04%
  );
  position: relative;
  z-index: 0;
}

/* Purple Wave */
.wave-purple {
  background: $shocking_purple;
  margin-top: -100px;
  margin-bottom: 100px;
}

/* h2 {
  margin-bottom: 50px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  font-weight: 400;
  color: $fadedFont;
  text-align: center;
}
 */
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
  padding: 10px 10px 30px 0px;
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

@media screen and (max-width: 1050px) {
  #contact-intro-container {
    flex-direction: column;
    flex-wrap: wrap;
  }

  #contact-up img,
  #contact-intro {
    width: 100%;
  }

  #contact-up img {
    margin-top: -200px;
  }

  #contact-up {
    padding: 30px 15px;
  }

  #contact-intro {
    font-size: 1rem;
    width: 80%;
    padding-left: 0;
  }
}

@media screen and (max-width: 990px) {
  #contact-up img {
    margin-top: -50px;
    padding-bottom: 40px;
  }
}

@media screen and (max-width: 490px) {
  .btn {
    font-size: 1rem;
  }
  #contact {
    padding-top: 80px;
  }
  #contact-intro {
    max-width: 380px;
    font-size: 0.9rem;
    padding-left: 0px;
  }
  #contact-intro-container {
    padding: 0px 20px;
  }
  #contact-up {
    margin: 0;
  }
  .wave {
    height: 95px;
  }
  .wave-purple {
    margin-top: -0px;
  }
}
</style>
