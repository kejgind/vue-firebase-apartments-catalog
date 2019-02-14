<template>
  <section class="section">
    <div class="container">
      <h1 class="is-size-5 has-text-weight-semibold mb-3">Strona błędu 404</h1>
      <p
        class="is-size-6 mb-3"
      >Wybrana strona nie istnieje, aby wrócić na stronę główną kliknij poniższy przycisk.</p>
      <router-link tag="button" class="button is-info" to="/">Strona główna</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "errorPage"
};
</script>

