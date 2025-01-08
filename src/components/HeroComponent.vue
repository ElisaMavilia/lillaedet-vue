<template>
    <section id="hero">
        <div class="background-half d-flex align-items-center h-100">
            <!-- Text Section -->
            <div class="text-container">
                <div class="text-up text-uppercase">Lilla Edet Tandläkarcenter</div>
                <h2 class="ps-5 pt-3">
                    <span class="text-down text-uppercase">Din Tandklinik i Lilla Edet</span>
                </h2>
            <!-- Buttons Section -->
            <div id="pastel-button-container" class="d-flex align-items-center align-content-center">
                <!-- Boka Tid Online Button (Muntra)-->
                <div class="frame">
                    <a href="https://www.muntra.com/lilla-edet-tandlakarcenter/c/5840?language=sv" class="btn btn1">Boka Tid Online</a>
                </div>
                <!-- Ring Oss Button -->
                <div class="frame ms-3">
                    <a href="tel:+46520657724" class="btn btn2 btn-right">Ring Oss</a>
                </div>
            </div>
        </div>
            <!-- Image with overflow to general-content in the MainComponent -->
            <div class="image-container">
                <img src="../assets/img/equipment5.png" alt="Dental care equipment">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HeroComponent'
};
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

 /* General Customization */
body {
    margin: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    font-family: $basefont;
    width: 100%;
}

#hero {
    width: 100%;
    height: 600px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: visible; // Allow the image to overflow
    z-index: 1;
}

.background-half {
    width: 100%;
    height: 100%;
    background: $backgroundGradient;
    display: flex;
    align-items: center;
    position: relative;
}

/* Text */
.text-container {
    display: flex;
    flex: 1;
    text-align: left;
    flex-direction: column;
    align-items: center;
    z-index: 10; // Assure that the text is above the image
}

.text-up {
    font-size: 3rem;
    font-weight: 400;
    font-family: $secondaryfont;
    display: flex;
    text-align: left;
    color: #6e6969;
    text-shadow: 6px 6px 9px rgba(0, 0, 0, 0.3);
}

.text-down {
    font-size: 1.6rem;
    font-weight: 190;
    text-shadow: 5px 5px 8px rgba(0, 0, 0, 0.3);
}

/* Image */
.image-container {
    position: absolute;
    top: 60%; // Center the image vertically relatively to the Hero 
    right: -70px; // Modify this value with Media Query
    transform: translateY(-50%);
    z-index: 5;
    pointer-events: none; // Assure that the image doesn't interfere with scrolling 
}

img {
    width: 800px;
    height: auto;
    transform: rotate(-10deg);
}


.frame {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

 /* Pastel Button Customization */
.btn {
    position: relative;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
                inset -7px -7px 10px 0px rgba(0, 0, 0, .1),
                7px 7px 20px 0px rgba(0, 0, 0, .1),
                4px 4px 5px 0px rgba(0, 0, 0, .1);
    text-shadow: 0px 0px 6px rgba(255, 255, 255, .3),
                -4px -4px 6px rgba(116, 125, 136, .2);
    border-radius: 50px;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    font-size: 26px;
    text-align: center;
    text-decoration: none;
}

// Button Boka Tid Online
.btn1 {
    background-color: #e8d1ff;
    color: #ce9eff;
}

// Button Ring Oss
.btn2 {
    background-color: #d3b1f5;
    color: #f2edf7;
}

// Hover Boka Tid Online Button
.btn:hover {
    color: #fff;
}

// Hover Ring Oss Button
.btn-right:hover {
    color: $purple_light;
}

// Click effect on buttons
.btn:active { 
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, .3),
                -4px -4px 6px 0 rgba(116, 125, 136, .2),
                inset -4px -4px 6px 0 rgba(255, 255, 255, .2),
                inset 4px 4px 6px 0 rgba(0, 0, 0, .2);
}
</style>



