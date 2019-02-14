import Vue from "vue";
import "./plugins/buefy";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import { filters } from "./filters/filters.js";

Vue.config.productionTip = false;

filters.forEach(f => {
  Vue.filter(f.name, f.execute);
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
