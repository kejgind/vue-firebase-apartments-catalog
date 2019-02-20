<template>
  <form @submit.prevent="onSubmit">
    <h1 class="is-size-5 has-text-weight-bold mb-3">Edytuj profil</h1>

    <div class="columns is-multiline">
      <div class="column is-4-tablet">
        <b-field label="Imię:">
          <b-input v-model="updUser.firstName"></b-input>
        </b-field>
      </div>
      <div class="column is-4-tablet is-offset-1-tablet">
        <b-field label="Nazwisko:">
          <b-input v-model="updUser.lastName"></b-input>
        </b-field>
      </div>
      <div class="column is-4-tablet">
        <b-field label="Adres:">
          <b-input v-model="updUser.street"></b-input>
        </b-field>
      </div>
      <div class="column is-4-tablet is-offset-1-tablet">
        <b-field label="Miasto:">
          <b-input v-model="updUser.city"></b-input>
        </b-field>
      </div>
      <div class="column is-4-tablet">
        <b-field label="Kod pocztowy:">
          <b-input v-model="updUser.code"></b-input>
        </b-field>
      </div>
      <div class="column is-4-tablet is-offset-1-tablet">
        <b-field label="Telefon:">
          <b-input v-model="updUser.phone"></b-input>
        </b-field>
      </div>
      <div class="column is-12 mt-3">
        <button
          class="button is-warning has-text-weight-semibold"
          :class="{'is-loading': loading}"
          :disabled="loading"
          type="submit"
        >Zapisz</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "edytuj",
  data() {
    return {
      updUser: {
        firstName: "",
        lastName: "",
        phone: "",
        street: "",
        city: "",
        code: ""
      }
    };
  },
  created() {
    Object.assign(this.updUser, this.$store.getters.user);
  },
  methods: {
    onSubmit() {
      if (!this.userIsAuthenticated) {
        return false;
      }
      this.$store.dispatch("updateUserProfile", this.updUser);

      // this.$dialog.alert({
      //   message: "Edycja danych użytkownika jest wyłączona!",
      //   type: "is-warning"
      // });
    }
  },
  computed: {
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    },
    loading() {
      return this.$store.getters.loading;
    }
  }
};
</script>