import "./styles/general.scss";

import { createApp } from "vue";
import { router } from "../router";
import App from "/src/App.vue";

createApp(App).use(router).mount("#app");
