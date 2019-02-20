import { Toast } from "buefy/dist/components/toast";
import { db, auth } from "@/firebase";
import router from "@/routes/router";

export default {
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
    let newUser;
    auth
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(data => {
        newUser = {
          id: data.user.uid,
          email: data.user.email,
          firstName: "",
          lastName: "",
          phone: "",
          street: "",
          city: "",
          code: "",
        };
        return db
          .collection("uzytkownicy")
          .doc(data.user.uid)
          .set(newUser);
      })
      .then(() => {
        commit("setLoading", false);
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
        db.collection("uzytkownicy")
          .doc(data.user.uid)
          .onSnapshot(
            dbuser => {
              commit("setLoading", false);
              const newUser = dbuser.data();
              commit("setUser", newUser);
            },
            error => {
              commit("setLoading", false);
              commit("setError", error);
            }
          );
      })
      .catch(error => {
        commit("setLoading", false);
        commit("setError", error);
      });
  },
  autoSignIn: ({ commit }, payload) => {
    commit("setLoading", true);
    commit("clearError");
    db.collection("uzytkownicy")
      .doc(payload.uid)
      .onSnapshot(
        dbuser => {
          const newUser = dbuser.data();
          commit("setLoading", false);
          commit("setUser", newUser);
        },
        error => {
          commit("setLoading", false);
          commit("setError", error);
        }
      );
  },
  logoutUser: ({ commit }) => {
    router.push("/");
    auth.signOut();
    commit("setUser", null);
  },
  updateUserProfile: ({ commit }, payload) => {
    const userData = {
      firstName: payload.firstName,
      lastName: payload.lastName,
      phone: payload.phone,
      street: payload.street,
      city: payload.city,
      code: payload.code,
    };
    commit("setLoading", true);
    commit("clearError");
    db.collection("uzytkownicy")
      .doc(payload.id)
      .update(userData)
      .then(() => {
        db.collection("uzytkownicy")
          .doc(payload.id)
          .onSnapshot(
            dbuser => {
              commit("setLoading", false);
              const newUser = dbuser.data();
              commit("setUser", newUser);
              Toast.open({
                duration: 3000,
                message: "Dane użytkownika zostały zaktualizowane.",
                type: "is-success",
              });
            },
            error => {
              commit("setLoading", false);
              commit("setError", error);
            }
          );
      })
      .catch(error => {
        commit("setLoading", false);
        commit("setError", error);
      });
  },
  clearError: ({ commit }) => {
    commit("clearError");
  },
};
