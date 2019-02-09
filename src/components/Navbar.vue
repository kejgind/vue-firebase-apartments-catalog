<template>
  <nav class="navbar is-black" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand my-2">
        <router-link class="navbar-item has-text-weight-semibold" to="/">
          <b-icon
            :pack="icons.bolt.pack"
            :icon="icons.bolt.icon"
            type="is-warning" custom-class="mr-2"
          ></b-icon>Stylowe Apartamenty
        </router-link>
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
  }
};
</script>