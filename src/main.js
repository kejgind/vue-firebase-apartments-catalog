import Vue from "vue";
import "./plugins/buefy";
import App from "./App.vue";
import router from "./routes/router";
import store from "./store/store";
import { auth } from "./firebase/fbInit";
import { filters } from "./filters/filters.js";

Vue.config.productionTip = false;

filters.forEach(f => {
  Vue.filter(f.name, f.execute);
});

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch("autoSignIn", user);
      }
    });
  },
}).$mount("#app");
