<template>
  <section>
    <div id="integritet-wrapper" class="container em-card">
      <h2 class="text-uppercase pb-3">Integritetspolicy</h2>
      <p>Senast uppdaterad: mars 2025</p>
      <p>
        Din integritet är viktig för oss. Denna integritetspolicy beskriver hur
        vi samlar in, använder och skyddar dina personuppgifter när du besöker
        vår webbplats och använder vårt kontaktformulär.
      </p>
      <ol>
        <p>
          När du fyller i vårt kontaktformulär samlar vi in följande
          information:
        </p>
        <li class="fw-bold">Insamling av personuppgifter</li>
        <ul>
          <li>Namn</li>
          <li>E-postadress</li>
          <li>Meddelandeinnhåll</li>
        </ul>
        <div>
          Vi samlar endast in de uppgifter du själv lämnar genom att fylla i
          formuläret.
        </div>
        <li class="fw-bold">Användning av personuppgifter</li>
        <div>Vi använder dina personuppgifter för att:</div>
        <ul>
          <li>Svara på din förfrågan</li>
          <li>Kommunicera med dig om din fråga</li>
          <li>Förbättra våra tjänster baserat på din feedback</li>
        </ul>
        <div>
          Vi delar inte dina uppgifter med tredje part utan ditt uttryckliga
          samtycke, om det inte krävs enligt lag.
        </div>
        <li class="fw-bold">Lagring av personuppgifter</li>
        <div>
          Vi sparar dina uppgifter endast så länge som det är nödvändigt för att
          besvara din förfrågan eller enligt gällande lagkrav.
        </div>
        <li class="fw-bold">Dina rättigheter</li>
        <div>Du har rätt att:</div>
        <ul>
          <li>Begära tillgång till de personuppgifter vi har om dig</li>
          <li>Rätta felaktiga uppgifter</li>
          <li>Begära radering av dina uppgifter om de inte längre behövs</li>
          <li>Invända mot eller begränsa behandlingen av dina uppgifter</li>
        </ul>
        <div>
          För att utöva dina rättigheter, vänligen kontakta oss på:
          info@lillaedetandlakarcenter.se
        </div>
        <li class="fw-bold">Säkerhet</li>
        <div>
          Vi vidtar lämpliga säkerhetsåtgärder för att skydda dina
          personuppgifter från obehörig åtkomst eller förlust.
        </div>
        <li class="fw-bold">Ändringar i policyn</li>
        <div>
          Vi kan uppdatera denna integritetspolicy vid behov. Senaste versionen
          finns alltid tillgänglig på vår webbplats. <br />Om du har frågor om
          vår integritetspolicy, kontakta oss på:
          info@lillaedettandlakarcenter.se
        </div>
      </ol>
    </div>
  </section>
</template>

<script>
export default {
  name: "IntegritetComponent",
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

section {
  padding-top: 150px;
  background-color: $light_pink;
  color: $fadedFont;
}
#integritet-wrapper {
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
  #integritet-wrapper {
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
