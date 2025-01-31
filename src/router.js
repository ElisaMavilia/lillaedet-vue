import { createRouter, createWebHistory } from "vue-router";

import AboutUsComponent from "./pages/AboutUsComponent.vue";
import HomePageComponent from "./pages/HomePageComponent.vue";
import TreatmentsDetailComponent from "./pages/TreatmentsDetailComponent.vue";
import ContactComponent from "./pages/ContactComponent.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePageComponent,
    },
    {
      path: "/om-oss",
      name: "about-us",
      component: AboutUsComponent,
    },
    {
      path: "/behandlingar/:slug",
      name: "treatment-detail",
      component: TreatmentsDetailComponent,
    },
    {
      path: "/kontakta-oss",
      name: "kontakta-oss",
      component: ContactComponent,
    },
    {
      path: "/:pathMatch(om|om-)", // if the path doesn't match any of the above routes redirect to om-os
      redirect: "om-oss",
    },
    {
      path: "/behandlingar", //
      redirect: "/#behandlingar", // redirect to the treatments section in the home page
    },
  ],
});

export { router };
