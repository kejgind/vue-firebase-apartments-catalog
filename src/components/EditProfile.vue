<template>
  <form>
    <h1 class="is-size-5 has-text-weight-bold mb-3">Edytuj profil</h1>

    <div class="columns is-multiline">
      <div class="column is-4-tablet">
        <b-field label="E-mail:">
          <b-input type="email" v-model="user.email"></b-input>
        </b-field>
      </div>
      <div class="column is-4-tablet is-offset-1-tablet">
        <b-field label="Telefon:">
          <b-input v-model="user.phone"></b-input>
        </b-field>
      </div>
      <div class="column is-4-tablet">
        <b-field label="Hasło:">
          <b-input type="password" v-model="user.password"></b-input>
        </b-field>
      </div>
      <div class="column is-4-tablet is-offset-1-tablet">
        <b-field label="Powtórz hasło:">
          <b-input type="password" v-model="user.password2"></b-input>
        </b-field>
      </div>
      <div class="column is-4-tablet">
        <b-field label="Imię:">
          <b-input v-model="user.firstName"></b-input>
        </b-field>
      </div>
      <div class="column is-4-tablet is-offset-1-tablet">
        <b-field label="Nazwisko:">
          <b-input v-model="user.lastName"></b-input>
        </b-field>
      </div>
      <div class="column is-4-tablet">
        <b-field label="Adres:">
          <b-input v-model="user.street"></b-input>
        </b-field>
      </div>
      <div class="column is-4-tablet is-offset-1-tablet">
        <b-field label="Miasto:">
          <b-input v-model="user.city"></b-input>
        </b-field>
      </div>
      <div class="column is-4-tablet">
        <b-field label="Kod pocztowy:">
          <b-input v-model="user.code"></b-input>
        </b-field>
      </div>
      <div class="column is-12 mt-3">
        <button class="button is-warning has-text-weight-semibold">Zapisz</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "edytuj",
  data() {
    return {
      user: {
        email: "",
        phone: "",
        password: "",
        password2: "",
        firstName: "",
        lastName: "",
        street: "",
        city: "",
        code: ""
      }
    };
  }
};
</script>