import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    offers: [],
    search: {
      offerType: "",
      query: "",
      priceMin: "",
      priceMax: "",
      livAreaMin: "",
      livAreaMax: "",
      floorMin: "",
      floorMax: "",
      roomMin: "",
      roomMax: "",
      buildMin: "",
      buildMax: "",
      avDate: new Date(),
    },
    user: null,
    loading: false,
    error: null,
  },
  getters,
  mutations,
  actions,
});
