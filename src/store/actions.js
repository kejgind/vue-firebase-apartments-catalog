import { Toast } from "buefy/dist/components/toast";
import { db, auth } from "@/firebase";
import router from "@/routes/router";
import uuidv4 from "uuid/v4";

export default {
  loadOffers: ({ commit }) => {
    commit("setLoading", true);
    commit("clearError");
    db.collection("mieszkania")
      .get()
      .then(querySnapshot => {
        const offers = [];
        querySnapshot.forEach(doc => {
          offers.push({ ...doc.data(), id: doc.id });
        });
        commit("setLoadedOffers", offers);
        commit("changeDateFormat");
        commit("setLoading", false);
      })
      .catch(error => {
        commit("setLoading", false);
        commit("setError", error);
      });
  },
  addNewOffer: ({ commit, getters }, payload) => {
    const offer = { ...payload, id: uuidv4(), userId: getters.user.id };
    commit("clearError");
    commit("setLoading", true);
    setTimeout(() => {
      commit("addNewOffer", offer);
      commit("setLoading", false);
      router.push("/panel/ogloszenia");
      Toast.open({
        duration: 3000,
        message: "Twoja nowa oferta została dodana.",
        type: "is-success",
      });
    }, 500);
  },
  updateOffer: ({ commit }, payload) => {
    commit("clearError");
    commit("setLoading", true);
    setTimeout(() => {
      commit("updateOffer", payload);
      commit("setLoading", false);
      router.push("/panel/ogloszenia");
      Toast.open({
        duration: 3000,
        message: "Twoja oferta została zaktualizowana.",
        type: "is-success",
      });
    }, 500);
  },
  deleteOffer: ({ commit }, payload) => {
    commit("setLoading", true);
    commit("clearError");
    setTimeout(() => {
      commit("deleteOffer", payload);
      commit("setLoading", false);
      router.push("/panel/ogloszenia");
      Toast.open({
        duration: 3000,
        message: "Twoja oferta została usunięta.",
        type: "is-danger",
      });
    }, 500);
  },
  registerUser: ({ commit }, payload) => {
    commit("setLoading", true);
    commit("clearError");

    setTimeout(() => {
      commit("setLoading", false);
      router.push("/login");
      Toast.open({
        duration: 5000,
        message: `Rejestracja nowych użytkowników jest wyłączona. Chciałeś dodać użytkownika, którego email to ${
          payload.email
        }.`,
        type: "is-dark",
      });
    }, 500);
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
    const userData = { ...payload };
    commit("setLoading", true);
    commit("clearError");
    setTimeout(() => {
      commit("setUser", userData);
      commit("setLoading", false);
      router.push("/panel/ogloszenia");
      Toast.open({
        duration: 3000,
        message: "Dane użytkownika zostały zaktualizowane.",
        type: "is-success",
      });
    }, 500);
  },
  clearError: ({ commit }) => {
    commit("clearError");
  },
};
