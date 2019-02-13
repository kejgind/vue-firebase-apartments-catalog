<template>
  <section class="login section is-medium">
    <div class="container">
      <h1 class="has-text-centered has-text-weight-semibold is-size-4 mb-4">Logowanie</h1>
      <form class="small-form mx-auto">
        <b-field label="E-mail:">
          <b-input v-model="email" type="email" placeholder="jan.kowalski@email.pl"></b-input>
        </b-field>
        <b-field label="Hasło:">
          <b-input v-model="password" type="password"></b-input>
        </b-field>
        <button @click="loginUser" class="mt-4 button is-fullwidth is-warning has-text-weight-semibold">Zaloguj</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "login",
};
</script>

<style lang="scss">
.small-form {
  max-width: 400px;
}
</style>
