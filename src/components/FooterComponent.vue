<template>
    <div id="footer-container-up">
      <div id="footer-content" class="container d-flex justify-content-around align-items-center align-content-center flex-wrap">
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
          <h4 class="text-uppercase">Adress</h4>
        </div>
        <div id="contact-info">
          <h4 class="text-uppercase">Kontakta Oss</h4>
        </div>
      </div>
    </div>
  </template>
  
<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      openingHours: [
        { day: 'Måndag', time: '09:00 - 17:00' },
        { day: 'Tisdag', time: '09:00 - 17:00' },
        { day: 'Onsdag', time: '09:00 - 17:00' },
        { day: 'Torsdag', time: '09:00 - 17:00' },
        { day: 'Fredag', time: '09:00 - 17:00' },
        { day: 'Lördag', time: 'Stängd' },
        { day: 'Söndag', time: 'Stängd' },
      ],
    };
  },
};
</script>


<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

#footer-container-up {
    background-color: $footer_primary;
    width: 100%;
    height: 400px;
    color: white;
   
    #footer-content {
        padding: 60px;
    }

    h4 {
        font-weight: 600;
        font-size: 1.3rem;
    }

    .opening-time {
        padding-left: 20px;
    }
}

</style>