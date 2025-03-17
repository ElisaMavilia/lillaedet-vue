<template>
  <ExtraInfoComponent />
  <div id="footer-container-up">
    <div
      id="footer-content"
      class="container d-flex justify-content-around align-content-center"
    >
      <div id="opening-hours">
        <h4 class="text-uppercase">Öppettider</h4>
        <table>
          <tr v-for="(day, index) in openingHours" :key="index">
            <td>{{ day.day }}</td>
            <td class="opening-time">{{ day.time }}</td>
          </tr>
        </table>
      </div>
      <div id="address">
        <h4 class="text-uppercase">Address</h4>
        <div>Majorsgatan 3A,</div>
        <div class="pt-2">46330 Lilla Edet</div>
      </div>
      <div id="contact-info">
        <h4 class="text-uppercase">Kontakta Oss</h4>
        <div>Telefon: 0520 65 77 244</div>
        <div class="pt-2">e-mail: info@lillaedetandlakarcenter.se</div>
      </div>
      <div class="extra-info">
        <h4 class="text-uppercase">Extra Info</h4>
        <div>
          <router-link class="router-link-class" to="/integritetspolicy"
            >Integritetspolicy</router-link
          >
        </div>
        <div>
          <router-link class="router-link-class" to="/credits"
            >Credits</router-link
          >
        </div>
      </div>
    </div>
  </div>
  <div id="footer-container-down">
    <div
      class="container d-flex justify-content-center align-content-around flex-wrap"
    >
      <a
        href="https://www.facebook.com/profile.php?id=61564619731548&name=xhp_nt__fb__action__open_user&_rdr"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <i class="fa-brands fa-facebook-f"></i>
      </a>
      <a
        href="https://www.instagram.com/lilla_edet_tandlakarcenter/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <i class="fa-brands fa-instagram"></i>
      </a>
      <a
        href="https://www.linkedin.com/company/lilla-edet-tandl%C3%A4karcenter/posts/?feedView=allm"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <i class="fa-brands fa-linkedin"></i>
      </a>
    </div>
  </div>
</template>

<script>
import ExtraInfoComponent from "./ExtraInfoComponent.vue";

export default {
  name: "FooterComponent",
  components: {
    ExtraInfoComponent,
  },
  data() {
    return {
      openingHours: [
        { day: "Måndag", time: "09:00 - 17:00" },
        { day: "Tisdag", time: "09:00 - 17:00" },
        { day: "Onsdag", time: "09:00 - 17:00" },
        { day: "Torsdag", time: "09:00 - 17:00" },
        { day: "Fredag", time: "09:00 - 17:00" },
        { day: "Lördag", time: "Stängd" },
        { day: "Söndag", time: "Stängd" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}

#footer-container-up,
#footer-container-down {
  background-color: $footer_primary;
  width: 100%;
  color: white;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;

  #footer-content {
    max-width: 1200px;
    text-align: center;
    padding: 90px;
  }

  #footer-container-up {
    min-height: 400px;
    padding: 50px 20px;
  }

  h4 {
    font-weight: 600;
    font-size: 1.3rem;
    padding-bottom: 10px;
  }

  .opening-time {
    padding-left: 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

#footer-container-down {
  height: 100px;
}

.fa-brands {
  font-size: 1.5rem;
  padding-right: 80px;
  color: #f9fafa;
}
.router-link-class {
  color: $pink;
}

@media screen and (max-width: 991.98px) {
  #footer-content {
    font-size: 0.9rem;
  }
}

@media screen and (max-width: 768px) {
  #footer-container-up {
    padding: 30px 10px;
  }

  #footer-content {
    font-size: 0.7rem;
    padding: 12px;
  }

  #footer-container-up h4 {
    font-size: 1.2rem;
  }

  .fa-brands {
    font-size: 1.3rem;
  }
  #footer-container-up {
    padding: 30px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  #footer-container-down {
    height: 100px;
    padding: 0;
  }

  #footer-content {
    font-size: 0.7rem;
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 45px;
  }
}

@media (max-width: 575.98px) {
  #footer-container-up h4 {
    font-size: 1rem;
  }

  #opening-hours,
  #address,
  #contact-info {
    width: 100%;
    text-align: center;
  }

  table {
    margin: 0 auto; /* Centra la tabella */
  }

  .fa-brands {
    font-size: 1.5rem;
    padding-right: 50px;
    color: #f9fafa;
  }

  @media screen and (max-width: 480px) {
    #footer-container-up h4 {
      font-size: 1.3rem;
    }

    table {
      font-size: 0.8rem;
    }
  }
  @media screen and (max-width: 387px) {
    #footer-container-up h4 {
      font-size: 0.9rem;
    }

    table {
      font-size: 0.6rem;
    }
  }
  @media screen and (max-width: 348px) {
    #contact-info {
      font-size: 0.6rem;
    }
  }
}
</style>
