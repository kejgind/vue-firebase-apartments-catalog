<template>
  <section class="register section is-medium">
    <div class="container">
      <h1 class="has-text-centered has-text-weight-semibold is-size-4 mb-4">Rejestracja</h1>
      <form class="small-form mx-auto" @submit.prevent="registerUser">
        <b-field label="E-mail:">
          <b-input
            v-model="email"
            required
            type="email"
            name="email"
            placeholder="jan.kowalski@email.pl"
          ></b-input>
        </b-field>
        <b-field label="Hasło:">
          <b-input
            minlength="8"
            required
            v-model="password"
            type="password"
            name="password"
            password-reveal
          ></b-input>
        </b-field>
        <b-field label="Powtórz hasło:">
          <b-input
            minlength="8"
            required
            v-model="password2"
            type="password"
            name="password2"
            password-reveal
          ></b-input>
        </b-field>
        <button
          class="mt-4 button is-fullwidth is-warning has-text-weight-semibold"
          :disabled="!formIsValid"
        >Zarejestruj</button>
        <span>{{formattedMessage}}</span>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      email: "",
      password: "",
      password2: ""
    };
  },
  methods: {
    registerUser() {
      //
    }
  },
  computed: {
    formIsValid() {
      return (
        this.email !== "" &&
        this.password.length >= 8 &&
        this.password2.length >= 8 &&
        this.password === this.password2
      );
    }
  }
};
</script>