import { createRouter, createWebHistory } from "vue-router";
import axios from "axios";
import { store } from "./store";

import AboutUsComponent from "./pages/AboutUsComponent.vue";
import HomePageComponent from "./pages/HomePageComponent.vue";
import TreatmentsDetailComponent from "./pages/TreatmentsDetailComponent.vue";
import ContactComponent from "./pages/ContactComponent.vue";
import TackComponent from "./pages/TackComponent.vue";
import ErrorPageComponent from "./pages/ErrorPageComponent.vue";
import PricesListComponent from "./pages/PricesListComponent.vue";
import GalleryComponent from "./pages/GalleryComponent.vue";
import NotFoundComponent from "./pages/NotFoundComponent.vue";

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
      beforeEnter: async (to, from, next) => {
        const slug = to.params.slug;
        console.log("Slug ricevuto:", slug);

        try {
          const response = await axios.get(
            `${store.apiBaseUrl}/validate-slug/${slug}`
          );
          console.log("Response from API:", response.data); // Debug

          if (response.data.isValid === true) {
            console.log("Valid slug");
            next();
          } else {
            console.log("Not valid slug. Redirecting to NotFound.");
            next({ name: "not-found" });
          }
        } catch (error) {
          console.error("Error visualizing slug:", error);
          next({ name: "not-found" });
        }
      },
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
      path: "/tack",
      name: "TackComponent",
      component: TackComponent,
    },
    {
      path: "/oh-nej",
      name: "oh-nej",
      component: ErrorPageComponent,
    },
    {
      path: "/:pathMatch(om|om-)",
      redirect: "om-oss",
    },
    {
      path: "/:pathMatch(kontakta|kontakta-)",
      redirect: "kontakta-oss",
    },
    {
      path: "/behandlingar",
      redirect: "/#behandlingar",
    },
    {
      path: "/:pathMatch(.*)*", // Not Found route
      name: "not-found",
      component: NotFoundComponent,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: "smooth" };
  },
});

export { router };
