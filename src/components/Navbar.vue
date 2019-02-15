<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation" ref="navi">
    <div class="container">
      <div class="navbar-brand is-size-5">
        <router-link class="navbar-item has-text-weight-semibold" to="/">
          <b-icon
            :pack="icons.bolt.pack"
            :icon="icons.bolt.icon"
            type="is-warning"
            custom-class="mr-2"
          ></b-icon>
          <span>Stylowe mieszkania</span>
        </router-link>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="mainMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu is-size-7" id="mainMenu">
        <div class="navbar-end">
          <router-link
            class="navbar-item"
            v-for="item in menuItems"
            :key="item.name"
            :to="item.link"
          >
            <b-icon :pack="item.iPack" :icon="item.iName" type="is-warning"></b-icon>
            <span class="px-1">{{item.name}}</span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { icons } from "@/plugins/icons.js";
export default {
  name: "mynavbar",
  data() {
    return {
      icons: icons
    };
  },
  computed: {
    menuItems() {
      let menuItems = [
        {
          iPack: icons.login.pack,
          iName: icons.login.icon,
          link: "/login",
          name: "Logowanie"
        },
        {
          iPack: icons.register.pack,
          iName: icons.register.icon,
          link: "/register",
          name: "Rejestracja"
        }
      ];
      if (this.userIsAuthenticated) {
        menuItems = [
          {
            iPack: icons.add.pack,
            iName: icons.add.icon,
            link: "/panel/dodaj",
            name: "Dodaj ogłoszenie"
          },
          {
            iPack: icons.user.pack,
            iName: icons.user.icon,
            link: "/panel/dane",
            name: "Konto"
          },
          {
            iPack: icons.logout.pack,
            iName: icons.logout.icon,
            link: "/",
            name: "Wyloguj"
          }
        ];
      }
      return menuItems;
    },
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    }
  }
};
</script>