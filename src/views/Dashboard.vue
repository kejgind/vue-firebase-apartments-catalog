<template>
  <section class="section dashboard">
    <div class="container">
      <div class="buttons has-addons">
        <router-link class="button" to="/panel/ogloszenia">List ogłoszeń</router-link>
        <router-link class="button" to="/panel/dodaj">Dodaj ogłoszenie</router-link>
        <router-link class="button" to="/panel/dane">Edytuj profil</router-link>
      </div>
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
export default {
  name: "Dashboard"
};
</script>