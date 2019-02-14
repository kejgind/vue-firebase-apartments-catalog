<template>
  <section class="login section is-medium">
    <div class="container">
      <h1 class="has-text-centered has-text-weight-semibold is-size-4 mb-4">Logowanie</h1>
      <form class="small-form mx-auto" @submit.prevent="loginUser">
        <b-field label="E-mail:">
          <b-input
            type="email"
            required
            v-model="email"
            name="email"
            placeholder="jan.kowalski@email.pl"
          ></b-input>
        </b-field>
        <b-field label="Hasło:">
          <b-input minlength="8" required v-model="password" type="password" name="password"></b-input>
        </b-field>
        <button
          class="mt-4 button is-fullwidth is-warning has-text-weight-semibold"
          :disabled="!formIsValid"
        >Zaloguj</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    loginUser() {
      //
    }
  },
  computed: {
    formIsValid() {
      return this.email !== "" && this.password.length >= 8;
    }
  }
};
</script>

<style lang="scss">
.small-form {
  max-width: 400px;
}
</style>
