import Vue from "vue";
import "./plugins/buefy";
import App from "./App.vue";
import router from "@/routes/router";
import store from "@/store";
import { auth } from "@/firebase";
import { filters } from "@/filters";

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
