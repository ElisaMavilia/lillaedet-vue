<template>
  <section>
    <div id="credits-wrapper" class="container em-card">
      <h1>Credits & Attribution</h1>
      <p>
        Vi är tacksamma för de bilderna som används på vår webbplats. Nedan
        hittar du en lista över fotografer och källor för de bilder vi har
        använt, i enlighet med deras licensvillkor.
      </p>

      <h2>Bilder, Video och källor</h2>

      <div class="credit-item pb-4">
        <strong>Bildbeskrivning:</strong> Jumbotron, högst upp<br />
        <strong>Author:</strong> Freepik <br />
        <strong>Källa: </strong>
        <a
          href="https://www.freepik.com/free-video/doctor-hands-squeezing-toothpaste-toothbrush_2827922#fromView=search&page=1&position=41&uuid=1311d28b-0151-4446-b118-3c24d5202aea"
        >
          Video by freepik</a
        >
        <br />
      </div>

      <div class="credit-item pb-4">
        <strong>Bildbeskrivning:</strong> Hompage, högst upp <br />
        <strong>Fotograf:</strong> prostooleh <br />
        <strong>Källa: </strong>
        <a
          href="https://www.freepik.com/free-photo/beautiful-girl-sitting-dentist-s-office_5252070.htm#fromView=image_search&page=1&position=2&uuid=c1e1aa95-b300-4af1-b506-5f38641f56cd&query=dental+clinic"
          >Image by prostooleh on Freepik</a
        >
        <br />
      </div>
      <div class="credit-item pb-4">
        <strong>Bildbeskrivning:</strong> Hompage, Behandlingar section icons
        <br />
        <strong>Author:</strong> Flaticon <br />
        <strong>Källor: </strong>
        <br />
        <a href="https://www.flaticon.com/free-icons/teeth" title="teeth icons"
          >Teeth icons created by Freepik - Flaticon</a
        >
        <br />
        <a
          href="https://www.flaticon.com/free-icons/dental-implant"
          title="dental implant icons"
          >Dental implant icons created by Freepik - Flaticon</a
        >
        <br />
        <a
          href="https://www.flaticon.com/free-icons/medical-equipment"
          title="medical equipment icons"
          >Medical equipment icons created by Flowicon - Flaticon</a
        >
        <br />
        <a
          href="https://www.flaticon.com/free-icons/clinic"
          title="clinic icons"
          >Clinic icons created by Victoruler - Flaticon</a
        >
        <br />
        <a
          href="https://www.flaticon.com/free-icons/dentist"
          title="dentist icons"
          >Dentist icons created by Victoruler - Flaticon</a
        >
        <br />
        <a
          href="https://www.flaticon.com/free-icons/root-canal"
          title="root canal icons"
          >Root canal icons created by Victoruler - Flaticon</a
        >
        <br />
        <a
          href="https://www.flaticon.com/free-icons/denture"
          title="denture icons"
          >Denture icons created by NeXore88 - Flaticon</a
        >
      </div>

      <div class="credit-item pb-4">
        <strong>Bildbeskrivning:</strong> Loader, Kontakta oss sida <br />
        <strong>Author:</strong> Flaticon <br />
        <strong>Källa: </strong>
        <a href="https://www.flaticon.com/free-icons/email" title="email icons"
          >Email icons created by Freepik - Flaticon</a
        >
        <br />
      </div>

      <div class="credit-item pb-4">
        <strong>Bildbeskrivning:</strong> 404 sida <br />
        <strong>Author:</strong> Flaticon <br />
        <strong>Källa: </strong>
        <a
          href="https://www.flaticon.com/free-icons/404-error"
          title="404 error icons"
          >404 error icons created by Freepik - Flaticon</a
        >
        <br />
      </div>

      <div class="credit-item pb-4">
        <strong>Bildbeskrivning:</strong> E-mail skickat sida <br />
        <strong>Author:</strong> Flaticon <br />
        <strong>Källa: </strong>
        <a href="https://www.flaticon.com/free-icons/email" title="email icons"
          >Email icons created by Freepik - Flaticon</a
        >
        <br />
      </div>
      <h2>Upphovsrätt och licensvillkor</h2>
      <p>
        Alla bilder används i enlighet med deras licensvillkor. Om du är en
        skapare av en bild och anser att den har använts felaktigt, vänligen
        kontakta oss på
        <a href="mailto: info@lillaedettandlakarcenter.se"
          >info@lillaedettandlakarcenter.se</a
        >
        så åtgärdar vi det omedelbart.
      </p>

      <h2>Tack!</h2>
      <p>
        Vi uppskattar det arbete som fotografer och konstnärer gör och vill
        uttrycka vårt uppriktiga tack för deras bidrag.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "CreditsComponent",
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

section {
  padding-top: 150px;
  background-color: $light_pink;
  color: $fadedFont;
}
#credits-wrapper {
  max-width: 750px;
  width: 100%;
  margin-bottom: 150px;
}
.em-card {
  max-width: 100%; // Adjust the max-width with media queries
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 50px;
  margin: 30px auto;
  background-color: #f5eaf2;
}
a {
  color: $pink;
}
@media screen and (max-width: 480px) {
  #credits-wrapper {
    max-width: 320px;
    width: 100%;
  }
  .em-card {
    width: 100%;
    font-size: 0.9rem;
    padding: 40px 20px;
  }
}
</style>
