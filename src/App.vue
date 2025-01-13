<template>
  <div class="d-flex flex-column">
    <!-- Header: elemento sempre visibile -->
    <HeaderComponent />

    <!-- Contenuto dinamico -->
    <router-view />

    <!-- Footer: elemento sempre visibile -->
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style lang="scss" scoped>


</style>
