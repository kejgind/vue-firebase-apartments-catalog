<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation" ref="navi">
    <div class="container">
      <div class="navbar-brand is-size-5">
        <router-link class="navbar-item has-text-weight-semibold" to="/">
          <b-icon :pack="icons.building.pack" :icon="icons.building.icon" type="is-warning"></b-icon>
          <span class="px-1">Stylowe mieszkania</span>
        </router-link>
        <a
          role="button"
          class="navbar-burger"
          :class="{'is-active': menuIsOpen}"
          aria-label="menu"
          :aria-expanded="{menuIsOpen}"
          @click.prevent="onBurgerClick"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu is-size-7" :class="{'is-active': menuIsOpen}">
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
          <div class="navbar-item" v-if="userIsAuthenticated">
            <button class="button is-warning is-small" @click.prevent="onLogout">
              <b-icon :pack="icons.logout.pack" :icon="icons.logout.icon"></b-icon>
              <span>Wyloguj</span>
            </button>
          </div>
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
      icons: icons,
      menuIsOpen: false
    };
  },
  methods: {
    onLogout() {
      this.$dialog.confirm({
        message: "Czy na pewno chcesz się wylogować?",
        cancelText: "Anuluj",
        type: "is-warning",
        onConfirm: () => this.$store.dispatch("logoutUser")
      });
    },
    onBurgerClick() {
      return (this.menuIsOpen = !this.menuIsOpen);
    }
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
            link: "/panel/ogloszenia",
            name: "Konto"
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