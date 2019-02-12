<template>
  <div class="container">
    <div class="columns is-multiline mt-4">
      <div class="column is-12-mobile is-5-tablet">
        <form>
          <h1 class="is-size-5 has-text-weight-bold mb-3">Formularz kontaktowy</h1>
          <b-field label="Temat:">
            <b-input v-model="contact.topic"></b-input>
          </b-field>
          <b-field label="E-mail:">
            <b-input type="email" v-model="contact.email"></b-input>
          </b-field>
          <b-field label="Telefon:">
            <b-input v-model="contact.phone"></b-input>
          </b-field>
          <b-field label="Wiadomość:">
            <b-input type="textarea" v-model="contact.message"></b-input>
          </b-field>
          <button class="button is-warning has-text-weight-semibold mt-3">Wyślij wiadomość</button>
        </form>
      </div>
      <div class="column is-12-mobile is-offset-1-tablet is-5-tablet">
        <h2 class="is-size-5 has-text-weight-bold mb-3">Kontakt</h2>
        <h3 class="has-text-weight-semibold mb-2">Telefon:</h3>
        <p class="mb-4">+48 123 456 789</p>
        <h3 class="has-text-weight-semibold mb-2">E-mail:</h3>
        <p class="mb-4">kontakt@stylowemieszkania.pl</p>
        <h3 class="has-text-weight-semibold mb-2">Adres:</h3>
        <p>ul. Dowolna 12</p>
        <p>12-345 Nibylandia</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact: {
        topic: "",
        email: "",
        phone: "",
        message: ""
      }
    };
  }
};
</script>