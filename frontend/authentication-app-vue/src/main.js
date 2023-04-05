import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import "nprogress/nprogress.css";

// Vue.use();

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
