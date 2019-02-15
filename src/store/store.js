import Vue from "vue";
import Vuex from "vuex";
import { db, auth } from "../fb/fbInit";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    offers: [
      {
        id: "1",
        offerType: "na-wynajem",
        address: {
          street: "Sołtysa 74",
          code: "01-234",
          city: "Wrocław",
        },
        price: 387000,
        dateFrom: new Date(),
        aptInfo: {
          roomCount: 2,
          livArea: 50,
          floorNo: "1",
          buildYear: "2010",
        },
        title: "Super wygodne 2 pokoje z wyposażeniem",
        content:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus temporibus odit corporis, impedit dolores nulla distinctio nostrum doloremque ipsum et, aliquam iure at fuga natus quo illo officia tempora modi quasi repudiandae reiciendis asperiores, dolore porro accusantium! Repudiandae non deleniti molestiae eligendi odit nulla, libero beatae, porro asperiores placeat ipsam?",
        img: {
          src: "img-01.jpeg",
          alt: "nazwa",
        },
        addDate: new Date(),
        user: {
          email: "",
          phone: "",
          firstName: "",
          lastName: "",
        },
      },
      {
        id: "2",
        offerType: "na-wynajem",
        address: {
          street: "Gilberta 23",
          code: "01-234",
          city: "Wrocław",
        },
        price: 500000,
        dateFrom: new Date(),
        aptInfo: {
          roomCount: 3,
          livArea: 75,
          floorNo: "2",
          buildYear: "2012",
        },
        title: "3 mega wyposażone pokoje",
        content:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus temporibus odit corporis, impedit dolores nulla distinctio nostrum doloremque ipsum et, aliquam iure at fuga natus quo illo officia tempora modi quasi repudiandae reiciendis asperiores, dolore porro accusantium! Repudiandae non deleniti molestiae eligendi odit nulla, libero beatae, porro asperiores placeat ipsam?",
        img: {
          src: "img-02.jpeg",
          alt: "nazwa",
        },
        user: {
          email: "",
          phone: "",
          firstName: "",
          lastName: "",
        },
        addDate: new Date(),
      },
      {
        id: "3",
        offerType: "na-sprzedaz",
        address: {
          street: "Sołtysa 74",
          code: "01-234",
          city: "Wrocław",
        },
        price: 387000,
        dateFrom: new Date(),
        aptInfo: {
          roomCount: 2,
          livArea: 45,
          floorNo: "3",
          buildYear: "2009",
        },
        title: "Urządzone mieszkanie na sprzedaż",
        content:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus temporibus odit corporis, impedit dolores nulla distinctio nostrum doloremque ipsum et, aliquam iure at fuga natus quo illo officia tempora modi quasi repudiandae reiciendis asperiores, dolore porro accusantium! Repudiandae non deleniti molestiae eligendi odit nulla, libero beatae, porro asperiores placeat ipsam?",
        img: {
          src: "img-03.jpeg",
          alt: "nazwa",
        },
        addDate: new Date(),
        user: {
          email: "",
          phone: "",
          firstName: "",
          lastName: "",
        },
      },
      {
        id: "4",
        offerType: "na-wynajem",
        address: {
          street: "Sołtysa 74",
          code: "01-234",
          city: "Kraków",
        },
        price: 387000,
        dateFrom: new Date(),
        aptInfo: {
          roomCount: 2,
          livArea: 50,
          floorNo: "1",
          buildYear: "2010",
        },
        title: "Super wygodne 2 pokoje z wyposażeniem",
        content:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus temporibus odit corporis, impedit dolores nulla distinctio nostrum doloremque ipsum et, aliquam iure at fuga natus quo illo officia tempora modi quasi repudiandae reiciendis asperiores, dolore porro accusantium! Repudiandae non deleniti molestiae eligendi odit nulla, libero beatae, porro asperiores placeat ipsam?",
        img: {
          src: "img-04.jpeg",
          alt: "nazwa",
        },
        addDate: new Date(),
        user: {
          email: "",
          phone: "",
          firstName: "",
          lastName: "",
        },
      },
      {
        id: "5",
        offerType: "na-sprzedaz",
        address: {
          street: "Sołtysa 74",
          code: "01-234",
          city: "Kraków",
        },
        price: 350000,
        dateFrom: new Date(),
        aptInfo: {
          roomCount: 4,
          livArea: 65,
          floorNo: "1",
          buildYear: "2015",
        },
        title: "Super wygodne 2 pokoje z wyposażeniem",
        content:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus temporibus odit corporis, impedit dolores nulla distinctio nostrum doloremque ipsum et, aliquam iure at fuga natus quo illo officia tempora modi quasi repudiandae reiciendis asperiores, dolore porro accusantium! Repudiandae non deleniti molestiae eligendi odit nulla, libero beatae, porro asperiores placeat ipsam?",
        img: {
          src: "img-05.jpeg",
          alt: "nazwa",
        },
        addDate: new Date(),
        user: {
          email: "",
          phone: "",
          firstName: "",
          lastName: "",
        },
      },
    ],
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
  getters: {
    getAllOffers: state => {
      return state.offers;
    },

    filteredOffers: state => {
      if (state.search.offerType && state.search.query) {
        let offers = state.offers.filter(offer => {
          const sQuery = state.search.query.toLocaleLowerCase("pl-PL");
          const vCity = offer.address.city.toLocaleLowerCase("pl-PL");

          if (
            state.search.offerType &&
            offer.offerType !== state.search.offerType
          ) {
            return false;
          }
          if (sQuery && !sQuery.includes(vCity)) {
            return false;
          }
          if (state.search.priceMin && offer.price < state.search.priceMin) {
            return false;
          }
          if (state.search.priceMax && offer.price > state.search.priceMax) {
            return false;
          }
          if (
            state.search.livAreaMin &&
            offer.aptInfo.livArea < state.search.livAreaMin
          ) {
            return false;
          }
          if (
            state.search.livAreaMax &&
            offer.aptInfo.livArea > state.search.livAreaMax
          ) {
            return false;
          }
          if (
            state.search.floorMin &&
            offer.aptInfo.floorNo < state.search.floorMin
          ) {
            return false;
          }
          if (
            state.search.floorMax &&
            offer.aptInfo.floorNo > state.search.floorMax
          ) {
            return false;
          }
          if (
            state.search.roomMin &&
            offer.aptInfo.roomCount < state.search.roomMin
          ) {
            return false;
          }
          if (
            state.search.roomMax &&
            offer.aptInfo.roomCount > state.search.roomMax
          ) {
            return false;
          }
          if (
            state.search.buildMin &&
            offer.aptInfo.buildYear < state.search.buildMin
          ) {
            return false;
          }
          if (
            state.search.buildMax &&
            offer.aptInfo.buildYear > state.search.buildMax
          ) {
            return false;
          }
          if (
            state.search.avDate &&
            offer.aptInfo.dateFrom < state.search.avDate
          ) {
            return false;
          }
          return true;
        });
        return offers;
      } else {
        return [];
      }
    },

    getSingleOffer: state => {
      return offerId => {
        return state.offers.find(offer => {
          return offer.id === offerId;
        });
      };
    },

    user: state => {
      return state.user;
    },
    loading(state) {
      return state.loading;
    },
    error(state) {
      return state.error;
    },
  },
  mutations: {
    searchApt: (state, payload) => {
      Object.assign(state.search, payload);
    },
    addNewOffer: (state, payload) => {
      state.offers.push(payload);
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
  actions: {
    addNewOffer: ({ commit }, payload) => {
      const offer = {
        offerType: payload.offerType,
        address: {
          street: payload.address.street,
          code: payload.address.code,
          city: payload.address.city,
        },
        price: payload.price,
        dateFrom: payload.dateFrom,
        aptInfo: {
          roomCount: payload.aptInfo.roomCount,
          livArea: payload.aptInfo.livArea,
          floorNo: payload.aptInfo.floorNo,
          buildYear: payload.aptInfo.buildYear,
        },
        title: payload.title,
        content: payload.content,
        addDate: payload.addDate,
        img: {
          src: payload.img.src,
          alt: payload.img.alt,
        },
        id: "123",
      };
      commit("addNewOffer", offer);
    },
    registerUser: ({ commit }, payload) => {
      commit("setLoading", true);
      commit("clearError");
      auth
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(data => {
          commit("setLoading", false);
          const newUser = {
            id: data.user.uid,
            createdOffers: [],
          };
          commit("setUser", newUser);
        })
        .catch(error => {
          commit("setLoading", false);
          commit("setError", error);
        });
    },
    loginUser: ({ commit }, payload) => {
      commit("setLoading", true);
      commit("clearError");
      auth
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(data => {
          commit("setLoading", false);
          const newUser = {
            id: data.user.uid,
            createdOffers: [],
          };
          commit("setUser", newUser);
        })
        .catch(error => {
          commit("setLoading", false);
          commit("setError", error);
        });
    },
    clearError: ({ commit }) => {
      commit("clearError");
    },
  },
});
