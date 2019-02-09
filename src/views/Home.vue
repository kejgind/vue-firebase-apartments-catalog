<template>
  <div>
    <b-icon :pack="icons.logout.pack" :icon="icons.logout.icon" type="is-warning"></b-icon>
  </div>
</template>

<script>
import { icons } from "@/plugins/icons.js";
export default {
  name: "home",
  components: {},
  data() {
    return {
      icons: icons
    };
  }
};
</script>
