<template>
  <nav class="navbar is-black" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <b-icon
            pack="{{icons.bolt.pack}}"
            icon="{{icons.bolt.icon}}"
            size="is-small"
            class="has-text-warning"
          ></b-icon>Stylowe Apartamenty
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import icons from "@/plugins/icons.js";
export default {
  //
};
</script>