<template>
  <div class="d-flex flex-column">
    <!-- Header-->
    <HeaderComponent />

    <router-view />

    <FeedbackComponent />

    <!-- Footer -->
    <FooterComponent />
  </div>
</template>

<script>
import FeedbackComponent from "./components/FeedbackComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import { store } from "./store";
import axios from "axios";

export default {
  name: "App",

  components: {
    HeaderComponent,
    FeedbackComponent,
    FooterComponent,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped></style>
