import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Contact from "../components/Contact.vue";
import OfferView from "../views/OfferView.vue";
import Dashboard from "../views/Dashboard.vue";
import ErrorView from "../views/ErrorView.vue";
import SearchView from "../views/SearchView.vue";
import MyOffers from "../components/MyOffers.vue";
import AddOffer from "../components/AddOffer.vue";
import EditOffer from "../components/EditOffer.vue";
import EditProfile from "../components/EditProfile.vue";
import AuthGuard from "./auth-guard";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/panel",
      name: "panel",
      component: Dashboard,
      beforeEnter: AuthGuard,
      redirect: "/panel/ogloszenia",
      children: [
        {
          path: "ogloszenia",
          name: "ogloszenia",
          component: MyOffers,
          beforeEnter: AuthGuard,
        },
        {
          path: "ogloszenia/:id",
          props: true,
          component: OfferView,
          beforeEnter: AuthGuard,
        },
        {
          path: "dodaj",
          name: "dodaj",
          component: AddOffer,
          beforeEnter: AuthGuard,
        },
        {
          path: "edytuj/:id",
          props: true,
          component: EditOffer,
          beforeEnter: AuthGuard,
        },
        {
          path: "dane",
          name: "dane",
          component: EditProfile,
          beforeEnter: AuthGuard,
        },
      ],
    },
    {
      path: "/oferta/:id",
      name: "oferta",
      props: true,
      component: OfferView,
    },
    {
      path: "/kontakt",
      name: "kontakt",
      component: Contact,
    },
    {
      path: "/szukaj",
      name: "szukaj",
      component: SearchView,
    },
    {
      path: "/404",
      name: "errorPage",
      component: ErrorView,
    },
    {
      path: "/*",
      redirect: "/404",
    },
  ],
});
