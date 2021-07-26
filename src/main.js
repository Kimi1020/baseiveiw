import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import 'view-design/dist/styles/iview.css';

import { Button, Modal } from "view-design";
Vue.component("i-button", Button);
Vue.component("Modal", Modal);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
