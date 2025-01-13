import { createRouter, createWebHistory } from 'vue-router';
import HomePageComponent from "./pages/HomePageComponent.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePageComponent
        },
    ],
});
export { router };