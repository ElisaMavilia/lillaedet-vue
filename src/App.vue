<template>
  <HeaderComponent/>
  <HeroComponent/>
  <MainComponent/>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import HeroComponent from './components/HeroComponent.vue';
import MainComponent from './components/MainComponent.vue';
export default {
  name: 'App',
  components: { 
    HeaderComponent,
    HeroComponent,
    MainComponent
  },
};
</script>

<style lang="scss" scoped>
</style>
