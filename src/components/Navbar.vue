<template>
  <nav
    class="navbar has-background-grey-darker"
    role="navigation"
    aria-label="main navigation"
    ref="navi"
  >
    <div class="container">
      <div class="navbar-brand py-1 is-size-5">
        <router-link class="navbar-item has-text-weight-semibold has-text-white" to="/">
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
      <div class="navbar-menu" id="mainMenu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <router-link class="button is-info" to="/panel/dane">
                  <b-icon :pack="icons.user.pack" :icon="icons.user.icon"></b-icon>
                  <span>User</span>
                </router-link>
              </p>
              <p class="control">
                <router-link class="button is-outlined is-warning" to="/panel/dodaj">
                  <b-icon :pack="icons.add.pack" :icon="icons.add.icon"></b-icon>
                  <span>Dodaj ogłoszenie</span>
                </router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { icons } from "@/plugins/icons.js";
export default {
  data() {
    return {
      icons: icons
    };
  },
  beforeMount() {
  },
  mounted() {
    this.getNavHeight();
  },
  methods: {
    getNavHeight() {
      const navHeight = this.$refs.navi.getBoundingClientRect().height;
      return navHeight;
    }
  }
};
</script>