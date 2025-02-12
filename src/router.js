import { createRouter, createWebHistory } from "vue-router";

import AboutUsComponent from "./pages/AboutUsComponent.vue";
import HomePageComponent from "./pages/HomePageComponent.vue";
import TreatmentsDetailComponent from "./pages/TreatmentsDetailComponent.vue";
import ContactComponent from "./pages/ContactComponent.vue";
import TackComponent from "./pages/TackComponent.vue";
import ErrorPageComponent from "./pages/ErrorPageComponent.vue";
import PricesListComponent from "./pages/PricesListComponent.vue";
import GalleryComponent from "./pages/GalleryComponent.vue";

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
      path: "/prislista",
      name: "prislista",
      component: PricesListComponent,
    },
    {
      path: "/galleri",
      name: "galleri",
      component: GalleryComponent,
    },
    {
      path: "/tack", // Parametro 'name'
      name: "TackComponent",
      component: TackComponent,
    },
    {
      path: "/oh-nej",
      name: "oh-nej",
      component: ErrorPageComponent,
    },

    {
      path: "/:pathMatch(om|om-)", // if the path doesn't match any of the above routes redirect to om-os
      redirect: "om-oss",
    },
    {
      path: "/behandlingar",
      redirect: "/#behandlingar", // redirect to the treatments section in the home page
    },
  ],
});

export { router };
