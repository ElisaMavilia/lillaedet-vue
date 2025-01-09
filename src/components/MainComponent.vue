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
        <CardComponent/>
    </section>
<!-- Languages Section -->
<section class="container text-center py-5" id="spoken-languages">
    <h2 class="text-uppercase pt-5 text-center">Språk vi pratar</h2>
    <ScrollingCardComponent />
</section>
<!-- Faq Section -->
<section id="faq" class="d-flex flex-column">
    <h2 class="py-5 w-100 text-center text-uppercase">Tandläkaren svarar</h2>
    <div class="container faq-content d-flex">
        <img id="faq-image" src="../assets/img/nima.png" alt="FAQ Image">
        <FaqComponent />
    </div>  
</section>
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
    background: $light_pink;
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
</style>



