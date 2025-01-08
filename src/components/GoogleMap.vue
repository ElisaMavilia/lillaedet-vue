<template>
    <div ref="map" style="width: 100%; height: 500px;"></div>
  </template>
  
  <script>
  export default {
    name: "GoogleMap",
    mounted() {
      // Inizializzare Google Maps solo quando il componente è montato
      this.loadGoogleMaps();
    },
    methods: {
      loadGoogleMaps() {
        const apiKey = "qui api"; // Sostituisci con la tua chiave API
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
  
        window.initMap = this.initMap; // Definisce la funzione di callback globale
      },
      initMap() {
        // Inizializzazione della mappa dopo che lo script è stato caricato
        const mapOptions = {
          center: { lat: 58.13655471801758, lng: 12.124068260192871 }, // Esempio: New York
          zoom: 14,
        };
        
        const map = new google.maps.Map(this.$refs.map, mapOptions);
  
        // Aggiunta di un marker
        new google.maps.Marker({
          position: { lat: 58.13655471801758, lng: 12.124068260192871 },
          map: map,
          title: "Lilla Edet Tandläkarcenter",
        });
      },
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  