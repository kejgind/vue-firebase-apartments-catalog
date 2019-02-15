<template>
  <section class="login section is-medium">
    <div class="container">
      <h1 class="has-text-centered has-text-weight-semibold is-size-4 mb-4">Logowanie</h1>
      <div class="alert mx-auto is-size-7 mb-2" v-if="error">
        <Alert @dismissed="isDismissed" :text="error.message"/>
      </div>
      <form class="small-form mx-auto" @submit.prevent="onLogin">
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
          :class="{'is-loading': loading}"
          :disabled="!formIsValid || loading"
        >Zaloguj</button>
      </form>
    </div>
  </section>
</template>

<script>
import Alert from "./Alert";

export default {
  name: "login",
  components: { Alert },

  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onLogin() {
      this.$store.dispatch("loginUser", {
        email: this.email,
        password: this.password
      });
    },
    isDismissed() {
      this.$store.dispatch("clearError");
    }
  },
  computed: {
    formIsValid() {
      return this.email !== "" && this.password.length >= 8;
    },
    user() {
      return this.$store.getters.user;
    },
    error() {
      return this.$store.getters.error;
    },
    loading() {
      return this.$store.getters.loading;
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/panel");
      }
    }
  }
};
</script>

<style lang="scss">
.small-form {
  max-width: 400px;
}
.alert {
  max-width: 400px;
}
</style>
