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
    <!-- Treatments Section -->
    <section id="treatments-content">
        <h2 class="text-uppercase py-5">Våra Behandlingar</h2>
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
</template>

<script>
import CardComponent from './CardComponent.vue';
import FaqComponent from './FaqComponent.vue';
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
        WaveComponent
    },
};
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;


/* Font Family */
#general-content, #concept-statement, #treatments-content, #spoken-languages {
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

#concept-statement {
    font-size: 1.5rem;
    font-weight: 200;
    color: #333;
    text-shadow: 4px 5px 7px rgba(0, 0, 0, 0.3);
}

/* Treatments Section with Cards */
h2 {
        text-align: center;
        text-shadow: 5px 5px 8px rgba(0, 0, 0, 0.3);
        font-weight: 400;
    }

/* Spoken Languages Section */
#spoken-languages {
    width: 100%;
    height: auto;

    p, li {
        color: #333;
        text-shadow: 3px 4px 5px rgba(0, 0, 0, 0.3);
    }

    p {
        font-size: 1.5rem;
    }

    li {
        font-size: 2rem;
        padding-bottom: 20px;
    }
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

/* Waves */

// Purple Wave
.wave {
    width: 100%;
    height: 200px;
    clip-path: polygon(100% 0%, 0% 0% , 0.00% 78.78%, 1.43% 80.57%, 2.86% 82.18%, 4.29% 83.59%, 5.71% 84.78%, 7.14% 85.74%, 8.57% 86.45%, 10.00% 86.91%, 11.43% 87.10%, 12.86% 87.03%, 14.29% 86.69%, 15.71% 86.10%, 17.14% 85.25%, 18.57% 84.16%, 20.00% 82.84%, 21.43% 81.32%, 22.86% 79.61%, 24.29% 77.74%, 25.71% 75.73%, 27.14% 73.60%, 28.57% 71.40%, 30.00% 69.14%, 31.43% 66.87%, 32.86% 64.60%, 34.29% 62.37%, 35.71% 60.22%, 37.14% 58.16%, 38.57% 56.23%, 40.00% 54.46%, 41.43% 52.86%, 42.86% 51.47%, 44.29% 50.29%, 45.71% 49.35%, 47.14% 48.66%, 48.57% 48.22%, 50.00% 48.05%, 51.43% 48.14%, 52.86% 48.50%, 54.29% 49.12%, 55.71% 49.99%, 57.14% 51.09%, 58.57% 52.42%, 60.00% 53.96%, 61.43% 55.68%, 62.86% 57.57%, 64.29% 59.59%, 65.71% 61.72%, 67.14% 63.93%, 68.57% 66.19%, 70.00% 68.46%, 71.43% 70.73%, 72.86% 72.95%, 74.29% 75.10%, 75.71% 77.15%, 77.14% 79.07%, 78.57% 80.83%, 80.00% 82.41%, 81.43% 83.79%, 82.86% 84.95%, 84.29% 85.87%, 85.71% 86.54%, 87.14% 86.96%, 88.57% 87.11%, 90.00% 87.00%, 91.43% 86.62%, 92.86% 85.98%, 94.29% 85.09%, 95.71% 83.97%, 97.14% 82.62%, 98.57% 81.07%, 100.00% 79.33%);
    position: relative; // Allows it to be placed between sections 
    z-index: 1; // Ensure it appears above the previous section
}

.wave-purple {
    background: $shocking_purple;
    margin-top: -20px; // Adjust overlap with the section above 
}

.wave-white {
    background: white;
    margin-bottom: -150px;
}
</style>



