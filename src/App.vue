<template>
  <div class="d-flex flex-column">
    <HeaderComponent />
      <router-view></router-view>   
  </div> 
  <HeroComponent/>
  <MainComponent/>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import HeroComponent from './components/HeroComponent.vue';
import MainComponent from './components/MainComponent.vue';
import { store } from './store';
import axios from 'axios';

export default {
  name: 'App',
  components: { 
    HeaderComponent,
    HeroComponent,
    MainComponent,
    FooterComponent
  },
  data() {
    return {
      store,

    }
  },
};
</script>

<style lang="scss" scoped>
</style>
