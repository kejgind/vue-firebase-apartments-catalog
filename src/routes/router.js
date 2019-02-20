import Vue from "vue";
import Router from "vue-router";

import HomePage from "@/views/HomePage.vue";
import ErrorPage from "@/views/ErrorPage.vue";
import SearchPage from "@/views/SearchPage.vue";
import ContactPage from "@/views/ContactPage.vue";
import DashboardPage from "@/views/DashboardPage.vue";

import Login from "@/components/UserAuth/Login.vue";
import Register from "@/components/UserAuth/Register.vue";
import MyOffers from "@/components/Dashboard/MyOffers.vue";
import AddOffer from "@/components/Dashboard/AddOffer.vue";
import EditOffer from "@/components/Dashboard/EditOffer.vue";
import SingleOffer from "@/components/Shared/SingleOffer.vue";
import EditProfile from "@/components/Dashboard/EditProfile.vue";

import AuthGuard from "./auth-guard";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
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
      component: DashboardPage,
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
          component: SingleOffer,
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
          name: "edytuj",
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
      component: SingleOffer,
    },
    {
      path: "/kontakt",
      name: "kontakt",
      component: ContactPage,
    },
    {
      path: "/szukaj",
      name: "szukaj",
      component: SearchPage,
    },
    {
      path: "/404",
      name: "errorPage",
      component: ErrorPage,
    },
    {
      path: "/*",
      redirect: "/404",
    },
  ],
});
