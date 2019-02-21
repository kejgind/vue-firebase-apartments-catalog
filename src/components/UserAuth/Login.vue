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
      <b-collapse :open="false" class="small-form mx-auto mt-4">
        <button class="button is-light" slot="trigger">Sprawdź jak się zalogować</button>
        <div class="notification">
          <div class="content">
            <h2 class="is-size-5">Logowanie do panelu użytkownika wersji demo</h2>
            <p>W celu zalogowania się do panelu użytkownika wersji demo wpisz dane jak poniżej
              <br><strong>Email:</strong> demo@demo.pl
              <br><strong>Hasło:</strong> 123456789
            </p>
          </div>
        </div>
      </b-collapse>
    </div>
  </section>
</template>

<script>
import Alert from "@/components/Shared/Alert";

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
        this.$router.push({ name: "ogloszenia" });
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
