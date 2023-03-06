import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import Vue3Toasity from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import "./assets/css/app.css";

createApp(App)
  .use(router)
  .use(createPinia())
  .use(Vue3Toasity, {
    autoClose: 3000,
  })
  .mount("#app");
