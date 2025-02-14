<template>
  <ExtraInfoComponent />
  <div id="footer-container-up">
    <div
      id="footer-content"
      class="container d-flex justify-content-around align-content-center flex-wrap"
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
  min-height: 100vh; // Assicura che il contenuto riempia l'altezza della pagina
}

main {
  flex-grow: 1; // Permette al contenuto principale di occupare tutto lo spazio disponibile
}

#footer-container-up,
#footer-container-down {
  background-color: $footer_primary;
  width: 100%;
  color: white;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  #footer-content {
    max-width: 1200px; // Limita la larghezza per non espandere troppo gli elementi
    padding: 40px;
    text-align: center;
    padding: 90px;
  }

  #footer-container-up {
    min-height: 400px; // Altezza minima per evitare il sovrapporsi
    padding: 50px 20px; // Aggiunto spazio interno
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
</style>
