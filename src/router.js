import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import Contact from "./components/Contact.vue";
import OfferView from "./views/OfferView.vue";
import Dashboard from "./views/Dashboard.vue";
import ErrorView from "./views/ErrorView.vue";
import SearchView from "./views/SearchView.vue";
import MyOffers from "./components/MyOffers.vue";
import AddOffer from "./components/AddOffer.vue";
import EditProfile from "./components/EditProfile.vue";


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
      children: [
        {
          path:"ogloszenia",
          component: MyOffers,
        },
        {
          path:"dodaj",
          component: AddOffer,
        },
        {
          path:"edytuj",
          component: AddOffer,
        },
        {
          path:"dane",
          component: EditProfile,
        },
      ]
    },
    {
      path: "/oferta",
      name: "oferta",
      component: OfferView,
    },
    {
      path: "/kontakt",
      name: "kontakt",
      component: Contact,
    },
    {
      path: '/szukaj',
      name: 'szukaj',
      component: SearchView
    },
    {
      path: '/404',
      name: '404',
      component: ErrorView,
    },
    {
      path: '/*',
      redirect: '/404'
    },
  ],
});
