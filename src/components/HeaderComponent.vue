<template>
  <header>
    <div class="nav-container navbar navbar-expand-lg text-uppercase py-4">
      <router-link to="/" class="navbar-brand" @click.native="goToHome">
        <img src="../assets/img/logo-transparent.png" alt="Logo" class="logo" />
      </router-link>

      <!-- Pulsante Toggle -->
      <button
        class="navbar-toggler"
        type="button"
        @click="toggleMenu"
        aria-controls="navbarNav"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Menu -->
      <div
        :class="['collapse', 'navbar-collapse', { show: isMenuOpen }]"
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li class="nav-item" v-for="(link, index) in menuItems" :key="index">
            <router-link
              :to="{ name: link.routeName }"
              class="nav-link"
              :class="{ active: $route.name === link.routeName }"
              @click.native="closeMenu"
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
      isMenuOpen: false, // Menu state initially closed
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
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Changes the menu state
    },
    closeMenu() {
      this.isMenuOpen = false; // Closes the menu after navigation click
    },
    goToHome() {
      if (this.$route.name === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        this.$router.push({ name: "home" }).then(() => {
          this.isMenuOpen = false; // Closes the menu after navigation
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

@media screen and (max-width: 991.98px) {
  .nav-container {
    padding: 0px 20px !important;
    height: 70px;
    position: relative;
    z-index: 1000;
  }

  .logo {
    width: 200px;
    height: auto;
    position: relative;
    z-index: 1001;
    margin-top: -45px; // Moves the logo up
  }

  .navbar-toggler {
    border: none;
    background: transparent;
    font-size: 1.5rem;
    position: relative;
    z-index: 1002;
    margin-top: -20px;
    color: $fadedFont;
  }

  .navbar-toggler-icon {
    filter: brightness(0) saturate(100%) invert(50%) sepia(0%) saturate(0%)
      hue-rotate(190deg) brightness(90%) contrast(90%);
  }

  .navbar-toggler:focus,
  .navbar-toggler:active {
    outline: none;
    box-shadow: 0 0 5px 2px $fadedFont;
  }

  .navbar-collapse {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: $light_pink;
    padding: 0;
    z-index: 999;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    transition: max-height 0.3s ease-in-out;
  }

  .navbar-collapse:hover {
    background: $light_pink;
  }

  .collapse:not(.show) {
    display: none;
  }

  .navbar-collapse.show {
    display: block;
  }

  .navbar-nav {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .nav-item {
    width: 100%;
    text-align: center;
    padding: 10px 0;
  }

  .nav-link {
    display: block;
    width: 100%;
    padding: 12px;
    font-size: 1rem;
  }

  .nav-link:hover {
    background: rgba(206, 158, 255, 0.2);
  }

  /* .nav-link.active {
    background: rgba(206, 158, 255, 0.2);
    border-radius: 5px;
  } */
}
</style>
