import Vue from "vue";
import Vuex from "vuex";
import { db, auth } from "../fb/fbInit";
import parse from "date-fns/parse";
import router from "../routes/router";
import { Toast } from "buefy/dist/components/toast";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    offers: [
      // {
      //   id: "1",
      //   offerType: "na-wynajem",
      //   address: {
      //     street: "Sołtysa 74",
      //     code: "01-234",
      //     city: "Wrocław",
      //   },
      //   price: 387000,
      //   dateFrom: new Date(),
      //   aptInfo: {
      //     roomCount: 2,
      //     livArea: 50,
      //     floorNo: "1",
      //     buildYear: "2010",
      //   },
      //   title: "Super wygodne 2 pokoje z wyposażeniem",
      //   content:
      //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus temporibus odit corporis, impedit dolores nulla distinctio nostrum doloremque ipsum et, aliquam iure at fuga natus quo illo officia tempora modi quasi repudiandae reiciendis asperiores, dolore porro accusantium! Repudiandae non deleniti molestiae eligendi odit nulla, libero beatae, porro asperiores placeat ipsam?",
      //   img: {
      //     src: "img-01.jpeg",
      //     alt: "nazwa",
      //   },
      //   addDate: new Date(),
      //   user: {
      //     email: "",
      //     phone: "",
      //     firstName: "",
      //     lastName: "",
      //   },
      // },
      // {
      //   id: "2",
      //   offerType: "na-wynajem",
      //   address: {
      //     street: "Gilberta 23",
      //     code: "01-234",
      //     city: "Wrocław",
      //   },
      //   price: 500000,
      //   dateFrom: new Date(),
      //   aptInfo: {
      //     roomCount: 3,
      //     livArea: 75,
      //     floorNo: "2",
      //     buildYear: "2012",
      //   },
      //   title: "3 mega wyposażone pokoje",
      //   content:
      //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus temporibus odit corporis, impedit dolores nulla distinctio nostrum doloremque ipsum et, aliquam iure at fuga natus quo illo officia tempora modi quasi repudiandae reiciendis asperiores, dolore porro accusantium! Repudiandae non deleniti molestiae eligendi odit nulla, libero beatae, porro asperiores placeat ipsam?",
      //   img: {
      //     src: "img-02.jpeg",
      //     alt: "nazwa",
      //   },
      //   user: {
      //     email: "",
      //     phone: "",
      //     firstName: "",
      //     lastName: "",
      //   },
      //   addDate: new Date(),
      // },
      // {
      //   id: "3",
      //   offerType: "na-sprzedaz",
      //   address: {
      //     street: "Sołtysa 74",
      //     code: "01-234",
      //     city: "Wrocław",
      //   },
      //   price: 387000,
      //   dateFrom: new Date(),
      //   aptInfo: {
      //     roomCount: 2,
      //     livArea: 45,
      //     floorNo: "3",
      //     buildYear: "2009",
      //   },
      //   title: "Urządzone mieszkanie na sprzedaż",
      //   content:
      //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus temporibus odit corporis, impedit dolores nulla distinctio nostrum doloremque ipsum et, aliquam iure at fuga natus quo illo officia tempora modi quasi repudiandae reiciendis asperiores, dolore porro accusantium! Repudiandae non deleniti molestiae eligendi odit nulla, libero beatae, porro asperiores placeat ipsam?",
      //   img: {
      //     src: "img-03.jpeg",
      //     alt: "nazwa",
      //   },
      //   addDate: new Date(),
      //   user: {
      //     email: "",
      //     phone: "",
      //     firstName: "",
      //     lastName: "",
      //   },
      // },
      // {
      //   id: "4",
      //   offerType: "na-wynajem",
      //   address: {
      //     street: "Sołtysa 74",
      //     code: "01-234",
      //     city: "Kraków",
      //   },
      //   price: 387000,
      //   dateFrom: new Date(),
      //   aptInfo: {
      //     roomCount: 2,
      //     livArea: 50,
      //     floorNo: "1",
      //     buildYear: "2010",
      //   },
      //   title: "Super wygodne 2 pokoje z wyposażeniem",
      //   content:
      //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus temporibus odit corporis, impedit dolores nulla distinctio nostrum doloremque ipsum et, aliquam iure at fuga natus quo illo officia tempora modi quasi repudiandae reiciendis asperiores, dolore porro accusantium! Repudiandae non deleniti molestiae eligendi odit nulla, libero beatae, porro asperiores placeat ipsam?",
      //   img: {
      //     src: "img-04.jpeg",
      //     alt: "nazwa",
      //   },
      //   addDate: new Date(),
      //   user: {
      //     email: "",
      //     phone: "",
      //     firstName: "",
      //     lastName: "",
      //   },
      // },
      // {
      //   id: "5",
      //   offerType: "na-sprzedaz",
      //   address: {
      //     street: "Sołtysa 74",
      //     code: "01-234",
      //     city: "Kraków",
      //   },
      //   price: 350000,
      //   dateFrom: new Date(),
      //   aptInfo: {
      //     roomCount: 4,
      //     livArea: 65,
      //     floorNo: "1",
      //     buildYear: "2015",
      //   },
      //   title: "Super wygodne 2 pokoje z wyposażeniem",
      //   content:
      //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus temporibus odit corporis, impedit dolores nulla distinctio nostrum doloremque ipsum et, aliquam iure at fuga natus quo illo officia tempora modi quasi repudiandae reiciendis asperiores, dolore porro accusantium! Repudiandae non deleniti molestiae eligendi odit nulla, libero beatae, porro asperiores placeat ipsam?",
      //   img: {
      //     src: "img-05.jpeg",
      //     alt: "nazwa",
      //   },
      //   addDate: new Date(),
      //   user: {
      //     email: "",
      //     phone: "",
      //     firstName: "",
      //     lastName: "",
      //   },
      // },
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

    filterSingleOffer: state => {
      return offerId => {
        return state.offers.find(offer => {
          return offer.id === offerId;
        });
      };
    },

    filterSaleOffers: state => {
      const saleOffers = state.offers
        .filter(offer => offer.offerType === "na-sprzedaz")
        .slice(0, 5);
      return saleOffers;
    },

    filterRentOffers: state => {
      const rentOffers = state.offers
        .filter(offer => offer.offerType === "na-wynajem")
        .slice(0, 5);
      return rentOffers;
    },

    filterUserCreatedOffers: state => {
      if (
        state.user !== null &&
        (state.user.id !== null || state.user.id !== undefined)
      ) {
        return state.offers.filter(offer => offer.userId === state.user.id);
      }
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
    // addNewOffer: (state, payload) => {
    //   state.offers.push(payload);
    // },
    // updateOffer: (state, payload) => {
    //   const offer = state.offers.find(offer => {
    //     return offer.id === payload.id;
    //   });
    //   Object.assign(offer, payload);
    // },
    // deleteOffer: (state, payload) => {
    //   const offerId = state.offers.find(offer => {
    //     return offer.id === payload;
    //   });
    //   const offerIdx = state.offers.indexOf(offerId);
    //   state.offers.splice(offerIdx, 1);
    // },
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
    setLoadedOffers: (state, payload) => {
      state.offers = payload;
    },
    changeDateFormat: state => {
      state.offers.map(offer => {
        return (offer.dateFrom = parse(offer.dateFrom));
      });
    },
  },
  actions: {
    loadOffers: ({ commit }) => {
      commit("setLoading", true);
      commit("clearError");
      db.collection("mieszkania").onSnapshot(
        snapshot => {
          if (snapshot) {
            const offers = [];
            snapshot.forEach(doc => {
              offers.push({ ...doc.data(), id: doc.id });
            });
            commit("setLoadedOffers", offers);
            commit("changeDateFormat");
            commit("setLoading", false);
          }
        },
        error => {
          commit("setLoading", false);
          commit("setError", error);
        }
      );
    },
    addNewOffer: ({ commit, getters }, payload) => {
      const offer = {
        offerType: payload.offerType,
        address: {
          street: payload.address.street,
          code: payload.address.code,
          city: payload.address.city,
        },
        price: payload.price,
        dateFrom: payload.dateFrom.toISOString(),
        aptInfo: {
          roomCount: payload.aptInfo.roomCount,
          livArea: payload.aptInfo.livArea,
          floorNo: payload.aptInfo.floorNo,
          buildYear: payload.aptInfo.buildYear,
        },
        title: payload.title,
        content: payload.content,
        img: {
          src: payload.img.src,
          alt: payload.img.alt,
        },
        userId: getters.user.id,
      };
      commit("clearError");
      commit("setLoading", true);
      db.collection("mieszkania")
        .add(offer)
        .then(() => {
          commit("setLoading", false);
          router.push("/panel/ogloszenia");
          Toast.open({
            duration: 3000,
            message: "Oferta została poprawnie dodana",
            type: "is-success",
          });
        })
        .catch(error => {
          commit("setLoading", false);
          commit("setError", error);
        });
    },
    updateOffer: ({ commit }, payload) => {
      const offer = {
        offerType: payload.offerType,
        address: {
          street: payload.address.street,
          code: payload.address.code,
          city: payload.address.city,
        },
        price: payload.price,
        dateFrom: payload.dateFrom.toISOString(),
        aptInfo: {
          roomCount: payload.aptInfo.roomCount,
          livArea: payload.aptInfo.livArea,
          floorNo: payload.aptInfo.floorNo,
          buildYear: payload.aptInfo.buildYear,
        },
        title: payload.title,
        content: payload.content,
        img: {
          src: payload.img.src,
          alt: payload.img.alt,
        },
      };
      commit("setLoading", true);
      commit("clearError");
      db.collection("mieszkania")
        .doc(payload.id)
        .update(offer)
        .then(() => {
          commit("setLoading", false);
          router.push("/panel/ogloszenia");
          Toast.open({
            duration: 3000,
            message: "Twoja oferta została zaktualizowana.",
            type: "is-success",
          });
        })
        .catch(error => {
          commit("setLoading", false);
          commit("setError", error);
        });
    },
    deleteOffer: ({ commit }, payload) => {
      commit("setLoading", true);
      commit("clearError");
      db.collection("mieszkania")
        .doc(payload)
        .delete()
        .then(() => {
          commit("setLoading", false);
          Toast.open({
            duration: 3000,
            message: "Oferta została usunięta.",
            type: "is-danger",
          });
        })
        .catch(error => {
          commit("setLoading", false);
          commit("setError", error);
        });
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
          };
          commit("setUser", newUser);
        })
        .catch(error => {
          commit("setLoading", false);
          commit("setError", error);
        });
    },
    autoSignIn: ({ commit }, payload) => {
      commit("setUser", { id: payload.uid });
    },
    logoutUser: ({ commit }) => {
      router.push("/");
      auth.signOut();
      commit("setUser", null);
    },
    clearError: ({ commit }) => {
      commit("clearError");
    },
  },
});
