<template>
  <form>
    <h1 class="is-size-5 has-text-weight-bold mb-3">Dodaj ogłoszenie:</h1>

    <!-- Tytuł ofert -->
    <h2 class="has-text-weight-semibold mb-2">Tytuł oferty:</h2>
    <div class="columns is-size-6">
      <div class="column is-12">
        <b-field type message>
          <b-input v-model="offer.title" aria-label="Tytuł oferty" placeholder="Tytuł oferty"></b-input>
        </b-field>
      </div>
    </div>

    <!-- Typ oferty -->
    <h2 class="has-text-weight-semibold mb-2">Typ oferty:</h2>
    <div class="block is-size-6">
      <b-radio v-model="offer.offertType" native-value="Na wynajem">Na wynajem</b-radio>
      <b-radio v-model="offer.offertType" native-value="Na sprzedaż">Na sprzedaż</b-radio>
    </div>

    <!-- Adres -->
    <h2 class="has-text-weight-semibold mb-2">Adres:</h2>
    <div class="columns is-size-6">
      <div class="column is-12-mobile is-4-tablet">
        <b-field type message>
          <b-input
            v-model="offer.address.street"
            value
            aria-label="Ulica i nr mieszkania"
            placeholder="Ulica i nr mieszkania"
          ></b-input>
        </b-field>
      </div>
      <div class="column is-12-mobile is-4-tablet">
        <b-field type message>
          <b-input v-model="offer.address.city" aria-label="Miejscowość" placeholder="Miejscowość"></b-input>
        </b-field>
      </div>
      <div class="column is-12-mobile is-2-tablet">
        <b-field type message>
          <b-input
            v-model="offer.address.code"
            aria-label="Kod pocztowy"
            placeholder="Kod pocztowy"
          ></b-input>
        </b-field>
      </div>
    </div>

    <!-- Cena -->
    <h2 class="has-text-weight-semibold mb-2">Cena i dostępność:</h2>
    <div class="columns is-size-6">
      <div class="column is-12-mobile is-2-tablet">
        <b-field type message>
          <b-input v-model="offer.price" aria-label="Cena" placeholder="Cena"></b-input>
        </b-field>
      </div>
      <div class="column is-12-mobile is-2-tablet">
        <b-field type message>
          <b-datepicker placeholder="Wybierz datę" :min-date="new Date()" v-model="offer.dateFrom"></b-datepicker>
        </b-field>
      </div>
    </div>

    <!-- Info mieszkanie -->
    <h2 class="has-text-weight-semibold mb-2">Informacje o mieszkaniu:</h2>
    <div class="columns is-size-6">
      <div class="column is-12-mobile is-3-tablet">
        <b-field type message>
          <b-input
            v-model="offer.aptInfo.roomCount"
            aria-label="Liczba pokoi"
            placeholder="Liczba pokoi"
          ></b-input>
        </b-field>
      </div>
      <div class="column is-12-mobile is-3-tablet">
        <b-field type message>
          <b-input
            v-model="offer.aptInfo.livArea"
            aria-label="Powierzchnia mieszkania"
            placeholder="Powierzchnia mieszkania"
          ></b-input>
        </b-field>
      </div>
      <div class="column is-12-mobile is-3-tablet">
        <b-field type message>
          <b-input v-model="offer.aptInfo.floorNo" aria-label="Piętro" placeholder="Piętro"></b-input>
        </b-field>
      </div>
      <div class="column is-12-mobile is-3-tablet">
        <b-field type message>
          <b-input
            v-model="offer.aptInfo.buildYear"
            aria-label="Rok budowy"
            placeholder="Rok budowy"
          ></b-input>
        </b-field>
      </div>
    </div>

    <!-- Opis mieszkania -->
    <h2 class="has-text-weight-semibold mb-2">Opis mieszkania:</h2>
    <div class="columns is-size-6">
      <div class="column is-12">
        <b-field type message>
          <b-input
            v-model="offer.content"
            aria-label="Opis mieszkania"
            placeholder="Opis mieszkania"
            type="textarea"
          ></b-input>
        </b-field>
      </div>
    </div>

    <button class="button is-warning has-text-weight-semibold">Dodaj ofertę</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      offer: {
        userId: "",
        offertType: "Na wynajem",
        address: {
          street: "",
          code: "",
          city: ""
        },
        price: null,
        dateFrom: null,
        aptInfo: {
          roomCount: null,
          livArea: null,
          floorNo: "",
          buildYear: ""
        },
        title: "",
        content: ""
      }
    };
  },
  computed: {
    //
  }
};
</script>

<style lang="scss">
// .input-row {
//   align-items: center;
// }
</style>
