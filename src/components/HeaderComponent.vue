<template>
  <header>
    <div class="nav-container navbar navbar-expand-lg text-uppercase py-5">
      <router-link to="/" class="navbar-brand" @click.native="goToHome">
        <img src="../assets/img/logo-transparent.png" alt="Logo" class="logo" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" v-for="(link, index) in menuItems" :key="index">
            <router-link
              :to="{ name: link.routeName }"
              class="nav-link"
              :class="{ active: $route.name === link.routeName }"
              @click.native="resetActiveSection"
            >
              {{ link.label }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      activeSection: "",
      menuItems: [
        { label: "Home", routeName: "home" },
        { label: "Träffa vårt team", routeName: "about-us" },
        { label: "Prislista", routeName: "prislista" },
        { label: "Galleri", routeName: "galleri" },
        { label: "Kontakta oss", routeName: "kontakta-oss" },
      ],
    };
  },
  methods: {
    resetActiveSection() {
      this.activeSection = "";
    },

    goToHome() {
      if (this.$route.name === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        this.$router.push({ name: "home" }).then(() => {
          this.activeSection = "";
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 90px;
  z-index: 3000;
  background: $light_pink;
  display: flex;
  align-items: center;
  color: $fadedFont;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 40px 20px 40px;
  color: $fadedFont;
}

.logo {
  width: 250px;
  height: auto;
}

.navbar-collapse {
  display: flex;
  flex-grow: 1;
}

.navbar-nav {
  display: flex;
  width: 100%;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  flex-grow: 1;
  text-align: center;
}

.nav-link {
  text-decoration: none;
  color: $fadedFont;
  padding: 10px;
}

.nav-link.active {
  color: #ce9eff;
}

li {
  font-size: 0.9rem;
}
</style>
