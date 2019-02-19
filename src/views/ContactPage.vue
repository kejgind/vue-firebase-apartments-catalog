<template>
  <div class="container">
    <section class="section">
      <div class="columns is-multiline">
        <div class="column is-5-tablet">
          <form @submit.prevent="onSubmit">
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
        <div class="column is-offset-1-tablet is-5-tablet">
          <h2 class="is-size-5 has-text-weight-bold mb-3">Kontakt</h2>
          <h3 class="has-text-weight-semibold mb-2">Firma:</h3>
          <p class="mb-4">mediaKG Krzysztof Garbowski</p>
          <h3 class="has-text-weight-semibold mb-2">Telefon:</h3>
          <p class="mb-4">+48 609 610 136</p>
          <h3 class="has-text-weight-semibold mb-2">E-mail:</h3>
          <p class="mb-4">krzysztof.garbowski@mediakg.pl</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "kontakt",
  data() {
    return {
      contact: {
        topic: "",
        email: "",
        phone: "",
        message: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.$dialog.alert({
        title: 'Kontakt z firmą',
        message: "Wysyłanie wiadomości za pomocą formularza nie jest dostępne. Do kontaktu proszę użyć danych zawartych obok.",
        type: "is-warning"
      });
    }
  }
};
</script>