<template>
 <!-- Statement Section -->
    <section id="general-content" class="d-flex">
        <div class="image-container container">
            <img id="statement-image" src="../assets/img/treatment.jpg" alt="Dental care Treatment">
        </div>
        <div class="general-text-content">
            <p id="concept-statement" class="">
                Högkvalitativ tandvård och <br> personlig service i en <br> varm och välkomnande miljö
            </p>
        </div>
    </section>
    <div class="wave wave-white"></div>
    <!-- Treatments Section -->
    <section id="treatments-content">
        <h2 id="treatments-title" class="text-uppercase">Våra Behandlingar</h2>
        <CardComponent />
    </section>
    <!-- Purple Wave -->
    <div class="wave wave-purple"></div>
    <!-- Languages Section -->
    <section class="container text-center" id="spoken-languages">
        <h2 class="text-uppercase pt-5 text-center">Språk vi pratar</h2>
        <ScrollingCardComponent />
    </section>
    <!-- White Wave -->
    <div class="wave wave-white"></div>
    <!-- Faq Section -->
    <section id="faq" class="d-flex flex-column">
        <h2 id="faq-title" class="w-100 text-center text-uppercase">Tandläkaren svarar</h2>
        <div class="container faq-content d-flex">
            <img id="faq-image" src="../assets/img/nima.png" alt="FAQ Image">
            <FaqComponent />
        </div>  
    </section>
    <!-- Purple Wave -->
    <div class="wave wave-purple"></div>
    <!-- Galleri -->
    <section id="gallery">
        <div id="before-after" class="container">
            <p id="before-after-title">Vi skapar leenden</p>
            <BeforeAfterComponent />
        </div>
    </section>
   <!-- Footer -->
     <section id="footer">
        <FooterComponent />
     </section>
</template>

<script>
import BeforeAfterComponent from './BeforeAfterComponent.vue';
import CardComponent from './CardComponent.vue';
import FaqComponent from './FaqComponent.vue';
import FooterComponent from './FooterComponent.vue';
import ScrollingCardComponent from './ScrollingCardComponent.vue';
import WaveComponent from './WaveComponent.vue';

export default {
    name: 'MainComponent',
    data() {
        return {
            
        };
    },
    components: {
        CardComponent,
        ScrollingCardComponent,
        FaqComponent,
        WaveComponent,
        BeforeAfterComponent,
        FooterComponent
        
    },
};
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;


/* Font Family */
#general-content, #concept-statement, #treatments-content, #spoken-languages, #before-after-title {
    font-family: $secondaryfont;
}

/* Gradient-Background */
#treatments-content, #faq {
    background: $shocking_purple;
    width: 100%;
    height: auto;
    padding-bottom: 70px;
}

/* General content statement section */
#general-content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    margin-top: 40px; 
    z-index: 0; 
    width: 100%;
    height: auto;
}

.image-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 180px;
}

#statement-image {
    max-width: 100%;
    width: 500px;
    height: auto;
    margin: 50px 0 50px 80px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
}
// Text
.general-text-content {
    flex: 1; // Proportional text width
    padding: 20px;
    text-align: left; 
}

h2 {
        text-align: center;
        text-shadow: 5px 5px 8px rgba(0, 0, 0, 0.3);
        font-weight: 400;
    }

#concept-statement {
    font-size: 1.5rem;
    font-weight: 200;
    color: #333;
    text-shadow: 4px 5px 7px rgba(0, 0, 0, 0.3);
}

/* Treatments Section with Cards */
    #treatments-title {
        padding: 150px 0 80px 0;
    }

/* Spoken Languages Section */
#spoken-languages {
    width: 100%;
    height: auto;
}

/* FAQ Section */
#faq {
    width: 100%;
    background-color: $shocking_purple;
}

//FAQ Content Layout 
.faq-content {
    position: relative;
    display: flex; 
    align-items: flex-start;
    justify-content: space-between; 
    gap: 20px; 
    width: 100%;
    padding: 20px;
    min-height: 500px; 
}

#faq-title {
    padding-top: 200px;
}

//FAQ Image
 #faq-image {
    width: 400px; 
    height: auto;
    transform: translateY(65px); // Move the image down
    flex-shrink: 0; // Avoid image shrinking
}

//FAQ Component Styles 
.faq-content FaqComponent {
    flex: 1; 
    overflow: auto; 
}

/* Galleri Section */
#before-after {
  display: flex;
  justify-content: space-around; 
  align-items: center;
  width: 100%;
  height:auto;
  margin-top: 50px;
  margin-bottom: 80px;
}

#before-after-title {
  font-size: 2rem;
  text-align: center;
  text-shadow: 3px 4px 5px rgba(0, 0, 0, 0.3);
}

/* Waves */
.wave {
    width: 100%;
    height: 200px;
    clip-path: polygon(100% 0%, 0% 0% , 0.00% 75.64%, 1.43% 76.93%, 2.86% 78.09%, 4.29% 79.11%, 5.71% 79.96%, 7.14% 80.66%, 8.57% 81.17%, 10.00% 81.50%, 11.43% 81.64%, 12.86% 81.58%, 14.29% 81.34%, 15.71% 80.91%, 17.14% 80.30%, 18.57% 79.51%, 20.00% 78.57%, 21.43% 77.47%, 22.86% 76.24%, 24.29% 74.89%, 25.71% 73.44%, 27.14% 71.92%, 28.57% 70.33%, 30.00% 68.71%, 31.43% 67.07%, 32.86% 65.43%, 34.29% 63.83%, 35.71% 62.28%, 37.14% 60.80%, 38.57% 59.41%, 40.00% 58.13%, 41.43% 56.98%, 42.86% 55.98%, 44.29% 55.13%, 45.71% 54.45%, 47.14% 53.96%, 48.57% 53.64%, 50.00% 53.52%, 51.43% 53.58%, 52.86% 53.84%, 54.29% 54.29%, 55.71% 54.91%, 57.14% 55.71%, 58.57% 56.67%, 60.00% 57.77%, 61.43% 59.01%, 62.86% 60.37%, 64.29% 61.83%, 65.71% 63.36%, 67.14% 64.95%, 68.57% 66.58%, 70.00% 68.22%, 71.43% 69.85%, 72.86% 71.45%, 74.29% 73.00%, 75.71% 74.47%, 77.14% 75.85%, 78.57% 77.12%, 80.00% 78.26%, 81.43% 79.25%, 82.86% 80.08%, 84.29% 80.75%, 85.71% 81.23%, 87.14% 81.53%, 88.57% 81.64%, 90.00% 81.56%, 91.43% 81.29%, 92.86% 80.83%, 94.29% 80.19%, 95.71% 79.38%, 97.14% 78.41%, 98.57% 77.29%, 100.00% 76.04%);
    position: relative; /* Impostiamo una posizione relativa per la wave */
    z-index: 0; /* Imposta un z-index basso */
}

/* Purple Wave */
.wave-purple {
    background: $shocking_purple;
    margin-top: -70px;
}

/* White Wave */
.wave-white {
    background: white;
    margin-bottom: -150px;
}

/* Footer */
#footer {
  width: 100%;
  height: auto;
}
</style>



