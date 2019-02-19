<template>
  <section class="section dashboard">
    <div class="container">
      <div class="buttons has-addons">
        <router-link class="button" to="/panel/ogloszenia">List ogłoszeń</router-link>
        <router-link class="button" to="/panel/dodaj">Dodaj ogłoszenie</router-link>
        <router-link class="button" to="/panel/dane">Edytuj profil</router-link>
      </div>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  name: "panel"
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
