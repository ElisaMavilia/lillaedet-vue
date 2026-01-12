<template>
  <header :class="{ 'header-scrolled': isScrolled, 'menu-open': isMenuOpen }">
    <div class="nav-container navbar navbar-expand-lg text-uppercase py-4">
      <router-link to="/" class="navbar-brand" @click.native="goToHome">
        <img src="../assets/img/logo-transparent.png" alt="Logo" class="logo" />
      </router-link>

      <!-- Toggle for mobile -->
      <button
        class="navbar-toggler"
        type="button"
        @click="toggleMenu"
        aria-controls="navbarNav"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation"
      >
        <span
          :class="[
            'navbar-toggler-icon',
            {
              'navbar-toggler-icon-dark':
                !isHomePage || isScrolled || isMenuOpen,
            },
          ]"
        ></span>
      </button>

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
      isScrolled: false,
      isMenuOpen: false,
      menuItems: [
        { label: "Home", routeName: "home" },
        { label: "Träffa vårt team", routeName: "about-us" },
        { label: "Galleri", routeName: "galleri" },
        { label: "Kontakta oss", routeName: "kontakta-oss" },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    goToHome() {
      if (this.$route.name === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        this.$router.push({ name: "home" });
      }
      this.closeMenu();
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 100;
    },
    handleClickOutside(event) {
      //It closes the menu while tapping outside the menu itself
      const menu = this.$el.querySelector(".navbar-collapse");
      const toggleButton = this.$el.querySelector(".navbar-toggler");

      if (
        this.isMenuOpen &&
        !menu.contains(event.target) &&
        !toggleButton.contains(event.target)
      ) {
        this.closeMenu();
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    document.removeEventListener("click", this.handleClickOutside);
  },
  computed: {
    isHomePage() {
      return this.$route.name === "home";
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
  padding: 40px 0 30px 0;
  width: 100%;
  max-width: 100vw;
  height: 80px;
  z-index: 4000;
  display: flex;
  align-items: center;
  color: black;
  transition: background 0.3s ease;
}

.header-scrolled {
  background: $light_pink;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 40px 0px 40px;
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
  color: black;
  padding: 10px;
}

.nav-link.active {
  color: #ce9eff;
}

li {
  font-size: 0.9rem;
}

@media screen and (max-width: 991.98px) {
  .menu-open {
    background: $light_pink !important;
  }

  .nav-container {
    height: 70px;
    z-index: 1000;
    padding-right: 20px;
    padding-left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    width: 100%;
    height: 85px;
  }

  .logo {
    width: 200px;
    height: auto;
    position: relative;
    z-index: 1001;
    padding-bottom: 20px;
  }

  .navbar-toggler {
    border: none;
    background: transparent;
    font-size: 1.2rem;
    position: relative;
    z-index: 1002;
    margin-bottom: 10px;
    color: black;
  }

  .navbar-toggler-icon {
    filter: brightness(0) invert(1);
    transition: filter 0.3s ease;
  }

  .navbar-toggler-icon-dark {
    filter: brightness(0) invert(0); // The toggler becomes dark when the background is light_pink
  }

  .navbar-toggler:focus,
  .navbar-toggler:active {
    outline: none;
    box-shadow: 0 0 5px 2px $fadedFont;
  }

  .navbar-collapse {
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background: $light_pink;
    padding: 0;
    z-index: 999;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }

  .menu-open,
  .navbar-collapse {
    transition: max-height 0.3s ease-in-out;
  }

  .navbar-collapse:hover {
    background: $light_pink;
  }

  .collapse:not(.show) {
    display: none;
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
    font-size: 0.9rem;
  }

  .nav-link.active {
    background: rgba(206, 158, 255, 0.2);
    border-radius: 5px;
  }
}
</style>
