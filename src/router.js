import { createRouter, createWebHistory } from 'vue-router';
import HeroComponent from './components/HeroComponent.vue';
import MainComponent from './components/MainComponent.vue';
import AboutUsComponent from './pages/AboutUsComponent.vue';
import HomePageComponent from './pages/HomePageComponent.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePageComponent, // Mostra HeroComponent nella home
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUsComponent, // Mostra AboutUsComponent nella pagina "About Us"
    },
    {
      path: '/main',
      name: 'main',
      component: MainComponent, // Mostra MainComponent in una pagina separata
    },

    
  ],
});

export { router };
