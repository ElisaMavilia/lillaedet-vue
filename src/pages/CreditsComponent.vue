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

      <div class="credit-item">
        <strong>Bildbeskrivning:</strong> [Plats där bilden används] <br />
        <strong>Fotograf:</strong> [Namn eller användarnamn] <br />
        <strong>Källa:</strong> <a href="[Länk]" target="_blank">[Webbplats]</a>
        <br />
        <strong>Licens:</strong> [CC BY 4.0, CC0, eller annan licens]
      </div>

      <div class="credit-item">
        <strong>Bildbeskrivning:</strong> [Plats där bilden används] <br />
        <strong>Fotograf:</strong> [Namn eller användarnamn] <br />
        <strong>Källa:</strong> <a href="[Länk]" target="_blank">[Webbplats]</a>
        <br />
        <strong>Licens:</strong> [Licenstyp]
      </div>

      <h2>Upphovsrätt och licensvillkor</h2>
      <p>
        Alla bilder används i enlighet med deras licensvillkor. Om du är en
        skapare av en bild och anser att den har använts felaktigt, vänligen
        kontakta oss på <a href="mailto:[E-postadress]">[E-postadress]</a> så
        åtgärdar vi det omedelbart.
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
