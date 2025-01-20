<template>
    <div id="about-us">
      <h1 class="text-center text-uppercase text-general">Om oss</h1>
      <section class="container d-flex justify-content-around align-items-center">
        <img src="../assets/img/nima.png" alt="Nimas bild">
        <div class="text-container flex-direction-column">
            <h2>Nima Farasati</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, consectetur. Eligendi, voluptas a laboriosam cum ratione vitae minima architecto fugiat amet quisquam corporis, similique impedit quasi at tenetur cumque, ab perspiciatis quibusdam voluptatibus ex qui molestias sequi sint obcaecati? Molestias quod reprehenderit sint qui consequatur? Ipsa debitis quos explicabo quod dolore ad voluptate</p>
        </div>
      </section>
      <section class="container d-flex justify-content-around align-items-center">
        <div class="text-container flex-direction-column">
            <h2>Shadi</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, consectetur. Eligendi, voluptas a laboriosam cum ratione vitae minima architecto fugiat amet quisquam corporis, similique impedit quasi at tenetur cumque, ab perspiciatis quibusdam voluptatibus ex qui molestias sequi sint obcaecati? Molestias quod reprehenderit sint qui consequatur? Ipsa debitis quos explicabo quod dolore ad voluptate</p>
        </div>
        <img src="../assets/img/nima.png" alt="Nimas bild">
      </section>
      <section class="container d-flex justify-content-around align-items-center">
        <img src="../assets/img/elisa.png" alt="Nimas bild">
        <div class="text-container flex-direction-column">
            <h2>Elisa Mavilia</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, consectetur. Eligendi, voluptas a laboriosam cum ratione vitae minima architecto fugiat amet quisquam corporis, similique impedit quasi at tenetur cumque, ab perspiciatis quibusdam voluptatibus ex qui molestias sequi sint obcaecati? Molestias quod reprehenderit sint qui consequatur? Ipsa debitis quos explicabo quod dolore ad voluptate</p>
        </div>
      </section>
</div>
  </template>
  
  <script>

  export default {
    name: 'AboutUsComponent',
    components: {
       
    }
  };
  </script>
  
  <style lang="scss" scoped>
   @use '../assets/styles/partials/variables' as *;

   #about-us {
    width: 100%;
    background-color: $light_pink;
   /*  margin-top: 200px; */

   }

   img {
    margin: 0 0 50px;
    width: 400px;
    height: auto;
   }

   .text-container {
    margin-left: -70px;
   }

   h1 {
    padding-top: 150px;
   }

   h2, p {
    color: $fadedFont;
    padding-left: 140px;
   }

   h2 {
    padding-top: 100px;
   }

   p {
    font-size: 1.1rem;
   }
   
  </style>
  