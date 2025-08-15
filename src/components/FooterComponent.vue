<template>
  <ExtraInfoComponent />
  <div id="footer-container-up">
    <div
      id="footer-content"
      class="container d-flex flex-wrap align-content-center justify-content-around"
    >
      <div id="opening-hours" class="text-container">
        <h4 class="text-uppercase">Öppettider</h4>
        <table>
          <tr v-for="(day, index) in openingHours" :key="index">
            <td>{{ day.day }}</td>
            <td class="opening-time">{{ day.time }}</td>
          </tr>
        </table>
        <div class="extra-info"></div>
      </div>
      <div id="address">
        <h4 class="text-uppercase">Besökadress</h4>
        <div class="footer-text-content">Majorsgatan 3A,</div>
        <div class="footer-text-content pt-2">46330 Lilla Edet</div>
        <img
          id="pt-logo"
          src="../assets/img/privattandlakarna-logo.jpg"
          alt="Logo som visar medlemskap i privattandlakarna"
        />
      </div>
      <div id="contact-info">
        <h4 class="text-uppercase">Kontakta Oss</h4>
        <div class="footer-text-content">Telefon: 0520 65 77 244</div>
        <div class="footer-text-content pt-2">
          e-mail: info@lillaedetandlakarcenter.se
          <!--  <h4 class="text-uppercase pt-5">Extra Info</h4> -->
          <div class="pt-5">
            <router-link
              class="footer-text-content router-link-class"
              to="/integritetspolicy"
              >Integritetspolicy</router-link
            >
          </div>
          <div>
            <router-link
              class="footer-text-content router-link-class"
              to="/credits"
              >Credits</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div id="footer-container-down" class="pt-4">
      <div
        id="icons-section"
        class="container d-flex flex-wrap align-content-around justify-content-center"
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
  </div>

  <div id="copyright" class="text-center py-2">
    © 2025 Lilla Edet Tandlakarcenter AB. Design & Development by Elisa Mavilia
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
        { day: "Måndag", time: "09:00 - 18:00" },
        { day: "Tisdag", time: "09:00 - 18:00" },
        { day: "Onsdag", time: "09:00 - 18:00" },
        { day: "Torsdag", time: "09:00 - 18:00" },
        { day: "Fredag", time: "09:00 - 18:00" },
        { day: "Lördag", time: "Stängd" },
        { day: "Söndag", time: "Stängd" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

/* body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
} */

#footer-container-up,
#footer-container-down {
  background-color: $footer_primary;
  width: 100%;
  color: white;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: auto;
  min-height: 100px;
  transform: translateZ(
    0
  ); //it reduces rendering problems (the white line between footer-container-up and footer-container-down appearing with different zoom sizing has gone)
  #footer-content {
    max-width: 1200px;
    text-align: center;
    padding: 80px 0;
  }

  #footer-container-up {
    min-height: 400px;
    padding: 50px 200px 0 20px;
    margin-bottom: 0;
    border-bottom: none;
  }
  #footer-container-down {
    margin-top: 0px;
    border-top: none;
  }
  #icons-section {
    margin-top: 0px;
    padding-top: 0px;
  }

  h4 {
    font-weight: 600;
    font-size: 1.3rem;
    padding-bottom: 10px;
  }

  .text-container {
    padding: 0;
    font-size: 0.6rem;
  }

  .opening-time {
    padding-left: 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

#pt-logo {
  padding-top: 50px;
}

#footer-container-down {
  height: 100px;
}

.fa-brands {
  font-size: 1.5rem;
  padding: 0 80px 0 80px;
  color: #f9fafa;
}
.router-link-class {
  color: $pink;
}

#copyright {
  background-color: $footer_primary;
  color: #f9fafa;
  font-size: 0.7rem;
}

@media screen and (max-width: 991.98px) {
  #footer-content {
    font-size: 1rem;
  }
}
.footer-text-content,
td {
  font-size: 0.9rem;
}

@media screen and (max-width: 790px) {
  #footer-container-up {
    padding: 30px 10px;
  }

  #footer-content {
    font-size: 0.7rem;
    padding: 12px;
  }

  #footer-container-up h4 {
    font-size: 1.3rem;
  }
  #footer-container-up td,
  .footer-text-content {
    font-size: 0.9rem;
  }
  .fa-brands {
    padding: 0 20px 0 20px;
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
    color: #f9fafa;
  }

  @media screen and (max-width: 480px) {
    #footer-container-up h4 {
      font-size: 1.3rem;
    }

    table {
      font-size: 0.8rem;
    }

    #copyright {
      font-size: 0.5rem;
    }
  }
  @media screen and (max-width: 387px) {
    #footer-container-up h4 {
      font-size: 0.8rem;
    }
    .footer-text-content,
    #footer-container-up td {
      font-size: 0.7rem;
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
