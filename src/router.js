import { createRouter, createWebHistory } from "vue-router";

import AboutUsComponent from "./pages/AboutUsComponent.vue";
import HomePageComponent from "./pages/HomePageComponent.vue";
import TreatmentsDetailComponent from "./pages/TreatmentsDetailComponent.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePageComponent,
    },
    {
      path: "/about-us",
      name: "about-us",
      component: AboutUsComponent,
    },
    {
      path: "/behandlingar/:slug",
      name: "treatment-detail",
      component: TreatmentsDetailComponent,
    },
  ],
});

export { router };
