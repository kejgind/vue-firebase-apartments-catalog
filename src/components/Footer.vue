<template>
  <footer ref="footer">
    <div class="has-background-grey-darker py-4 responsive__wrap" style="margin-bottom: 0;">
      <div class="container">
        <div class="columns is-tablet">
          <div class="column is-4-tablet is-3-desktop has-text-centered">
            <div class="content is-flex-tablet is-size-5">
              <router-link class="has-text-weight-semibold has-text-white py-2" to="/">
                <b-icon
                  :pack="icons.bolt.pack"
                  :icon="icons.bolt.icon"
                  type="is-warning"
                  custom-class="mr-2"
                ></b-icon>
                <span>Stylowe mieszkania</span>
              </router-link>
            </div>
          </div>
          <div class="column">
            <div class="content is-flex-tablet footer__nav is-size-7">
              <router-link
                class="has-text-weight-normal has-text-white is-block-mobile has-text-centered pa-2"
                to="/kontakt"
              >
                <b-icon :pack="icons.contact.pack" :icon="icons.contact.icon" type="is-warning"></b-icon>
                <span class="px-1">Kontakt</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content has-text-centered has-background-grey-light py-3">
      <p>
        &copy;2019 -
        <strong>mediaKG</strong>
      </p>
    </div>
  </footer>
</template>

<script>
import { icons } from "@/plugins/icons.js";

export default {
  name: "myfooter",
  data() {
    return {
      icons: icons
    };
  }
};
</script>


<style lang="scss">
.footer {
  &__nav {
    justify-content: flex-end;
  }
}
</style>

