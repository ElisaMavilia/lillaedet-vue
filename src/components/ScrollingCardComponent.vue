<
<template>
  <section id="cards-section" class="language-card-container" ref="cardSection">
    <div
      v-for="(card, index) in cards"
      :key="index"
      :class="['card', card.animationClass]"
      :style="card.title === 'Italienska' ? { paddingTop: '22px' } : {}"
      ref="cardElements"
    >
      <h3>{{ card.title }}</h3>
      <p class="p-2">{{ card.content }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        { title: "Svenska", content: "Välkommen!", animationClass: "" },
        { title: "Engelska", content: "Welcome!", animationClass: "" },
        { title: "Persiska", content: "!خوش آمدید", animationClass: "" },
        {
          title: "Italienska",
          content: "Benvenuti e Benvenute!",
          animationClass: "",
        },
      ],
      hasSectionEntered: false, // Flag to trigger animation only once
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const section = this.$refs.cardSection;

      // Ensure section reference is valid
      if (!section) return;

      // Check if the section is in the viewport
      const rect = section.getBoundingClientRect();
      if (
        !this.hasSectionEntered &&
        rect.top < window.innerHeight &&
        rect.bottom > 0
      ) {
        this.hasSectionEntered = true; // Prevent re-triggering
        this.animateCards();
      }
    },
    animateCards() {
      // Ensure refs is an array
      const cardElements = Array.isArray(this.$refs.cardElements)
        ? this.$refs.cardElements
        : [this.$refs.cardElements];

      // Iterate over cards and apply animations
      cardElements.forEach((card, index) => {
        setTimeout(() => {
          if (index % 2 === 0) {
            this.cards[index].animationClass = "slide-in-left";
          } else {
            this.cards[index].animationClass = "slide-in-right";
          }
        }, index * 150); // Stagger the animations
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.language-card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  margin: 100px 0 150px 50px;
}

.card {
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0; /* Start hidden */
  transform: translateX(0); /* Start position */
  transition: opacity 0.9s ease-in-out, transform 0.9s ease-in-out;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
}

/* Slide-in animations */
.slide-in-left {
  opacity: 1; /* Fully visible */
  transform: translateX(0); /* Return to default position */
}

.slide-in-right {
  opacity: 1; /* Fully visible */
  transform: translateX(0); /* Return to default position */
}

/* Initial states for cards before animation */
.card:not(.slide-in-left):not(.slide-in-right):nth-child(odd) {
  transform: translateX(-150%); /* Slide in from the left */
}

.card:not(.slide-in-left):not(.slide-in-right):nth-child(even) {
  transform: translateX(150%); /* Slide in from the right */
}

/* MEDIA QUERIES Computer first */

/* Large (lg) ≥992px -> laptop */
@media screen and (max-width: 1199.98px) {
  h3 {
    font-size: 1.5rem;
  }
}
/* MEDIA QUERIES */
@media screen and (max-width: 991.98px) {
  .language-card-container {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 100px 0;
  }

  .card {
    width: 150px;
    height: 150px;
    margin: 2px;
  }

  /* Effetto fade-in */
  .fade-in {
    opacity: 1;
    transform: scale(1);
  }

  .card:not(.slide-in-left):not(.slide-in-right):nth-child(odd),
  .card:not(.slide-in-left):not(.slide-in-right):nth-child(even) {
    transform: scale(0.8);
  }

  p {
    padding-left: 0;
  }
}

@media screen and (max-width: 767.98px) {
  .language-card-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr); // Two columns
    grid-gap: 20px;
    justify-content: center;
    align-items: center;
    width: fit-content; // Adapts the container to the content
    margin: 0 auto;
  }

  .card {
    width: 180px;
    height: 180px;
  }

  h3 {
    font-size: 1.2rem;
  }

  p {
    font-size: 0.9rem;
  }
}
</style>
