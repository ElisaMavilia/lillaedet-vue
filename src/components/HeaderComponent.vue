<template>
  <header :class="{ 'small-header': isScrolled }" class="header">
    <nav class="d-flex">
      <!-- Left -->
      <div class="left-header">
        <img src="../assets/img/logo-transparent.png" alt="Logo purple" class="logo">
      </div>
      <!-- Right -->
      <div class="right-header text-white">
        right
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      isScrolled: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50; // Cambia lo stato se l'utente ha scrollato più di 50px
    },
  },
};
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: white;
  z-index: 3000;
  padding: 0; 
  height: 80px;
  display: flex;
  align-items: center; 
  background: $light_pink;
}

nav {
  display: flex;
  width: 100%; 
  height: 120px; 
  padding: 20px 0 20px 0;
}

/* Left Header */
.left-header {
  flex: 1; 
  display: flex;
  align-items: center; 
  justify-content: flex-start; 
  padding: 0 1rem; 
}

.left-header .logo {
  width: 260px; 
}

/* Right Header */
.right-header {
  flex: 1;
  display: flex;
  align-items: center; 
  justify-content: flex-end; 
  padding: 0 1rem; 
  //background-color: $warm_ligth_pink; 
}

/* Small Header */
.small-header {
  height: 80px;
  padding: 0.5rem 1rem;
  //background-color: #f8f8f8;
  padding: 20px 0 20px 0;
  font-size: 0.9rem;
  width: 100%; 
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); 
}
</style>
