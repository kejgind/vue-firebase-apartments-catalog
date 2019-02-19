<template>
  <form @submit.prevent="addOffer">
    <h1 class="is-size-5 has-text-weight-bold mb-3">Dodaj ogłoszenie:</h1>

    <!-- Tytuł ofert -->
    <h2 class="has-text-weight-semibold mb-2">Tytuł oferty:</h2>
    <div class="columns is-size-6">
      <div class="column is-12">
        <b-field>
          <b-input
            type="text"
            v-model="offer.title"
            aria-label="Tytuł oferty"
            placeholder="Tytuł oferty"
            required
            minlength="10"
            maxlength="70"
          ></b-input>
        </b-field>
      </div>
    </div>

    <!-- Typ oferty -->
    <h2 class="has-text-weight-semibold mb-2">Typ oferty:</h2>
    <div class="block is-size-6">
      <b-radio v-model="offer.offerType" native-value="na-wynajem">Na wynajem</b-radio>
      <b-radio v-model="offer.offerType" native-value="na-sprzedaz">Na sprzedaż</b-radio>
    </div>

    <!-- Adres -->
    <h2 class="has-text-weight-semibold mb-2">Adres:</h2>
    <div class="columns is-size-6">
      <div class="column is-4-tablet">
        <b-field type message>
          <b-input
            v-model="offer.address.street"
            aria-label="Ulica i nr mieszkania"
            placeholder="Ulica i nr mieszkania"
            required
            type="text"
          ></b-input>
        </b-field>
      </div>
      <div class="column is-4-tablet">
        <b-field type message>
          <b-input
            v-model="offer.address.city"
            aria-label="Miejscowość"
            placeholder="Miejscowość"
            required
            type="text"
          ></b-input>
        </b-field>
      </div>
      <div class="column is-2-tablet">
        <b-field type message>
          <b-input
            v-model="offer.address.code"
            aria-label="Kod pocztowy"
            placeholder="Kod pocztowy"
            required
            minlength="5"
            maxlength="5"
          ></b-input>
        </b-field>
      </div>
    </div>

    <!-- Cena -->
    <h2 class="has-text-weight-semibold mb-2">Cena i dostępność:</h2>
    <div class="columns is-size-6">
      <div class="column is-2-tablet">
        <b-field type message>
          <b-input
            type="number"
            v-model="offer.price"
            aria-label="Cena"
            placeholder="Cena"
            required
          ></b-input>
        </b-field>
      </div>
      <div class="column is-2-tablet">
        <b-field type message>
          <b-datepicker
            placeholder="Wybierz datę"
            :min-date="new Date()"
            v-model="offer.dateFrom"
            required
          ></b-datepicker>
        </b-field>
      </div>
    </div>

    <!-- Info mieszkanie -->
    <h2 class="has-text-weight-semibold mb-2">Informacje o mieszkaniu:</h2>
    <div class="columns is-size-6">
      <div class="column is-3-tablet">
        <b-field type message>
          <b-input
            v-model="offer.aptInfo.roomCount"
            aria-label="Liczba pokoi"
            placeholder="Liczba pokoi"
            required
            type="number"
            min="1"
            max="10"
          ></b-input>
        </b-field>
      </div>
      <div class="column is-3-tablet">
        <b-field type message>
          <b-input
            v-model="offer.aptInfo.livArea"
            aria-label="Powierzchnia mieszkania"
            placeholder="Powierzchnia mieszkania"
            required
            type="number"
            min="10"
          ></b-input>
        </b-field>
      </div>
      <div class="column is-3-tablet">
        <b-field type message>
          <b-input
            v-model="offer.aptInfo.floorNo"
            aria-label="Piętro"
            placeholder="Piętro"
            required
            type="number"
            min="0"
            max="40"
          ></b-input>
        </b-field>
      </div>
      <div class="column is-3-tablet">
        <b-field type message>
          <b-input
            v-model="offer.aptInfo.buildYear"
            aria-label="Rok budowy"
            placeholder="Rok budowy"
            required
            type="number"
            minlength="4"
            maxlength="4"
            min="1900"
            max="2019"
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
            required
            minlength="50"
            maxlength="500"
          ></b-input>
        </b-field>
      </div>
    </div>

    <button
      class="button is-warning has-text-weight-semibold"
      :class="{'is-loading': loading}"
      :disabled="!formIsValid || loading"
    >Dodaj ofertę</button>
  </form>
</template>

<script>
export default {
  name: "dodaj",
  data() {
    return {
      offer: {
        userId: "",
        offerType: "na-sprzedaz",
        address: {
          street: "",
          code: "",
          city: ""
        },
        price: "",
        dateFrom: null,
        aptInfo: {
          roomCount: "",
          livArea: "",
          floorNo: "",
          buildYear: ""
        },
        title: "",
        content: "",
        img: {
          src: `img-0${Math.ceil(Math.random() * 7)}.jpeg`,
          alt: "nazwa"
        }
      }
    };
  },
  methods: {
    addOffer() {
      if (!this.formIsValid) {
        return;
      }
      if (!this.userIsAuthenticated) {
        return false;
      }

      this.$store.dispatch("addNewOffer", this.offer);
    }
  },
  computed: {
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    },
    formIsValid() {
      return (
        this.offer.offerType !== "" &&
        this.offer.title !== "" &&
        this.offer.address.street !== "" &&
        this.offer.address.code !== "" &&
        this.offer.address.city !== "" &&
        this.offer.price !== "" &&
        this.offer.dateFrom !== null &&
        this.offer.aptInfo.roomCount !== "" &&
        this.offer.aptInfo.livArea !== "" &&
        this.offer.aptInfo.floorNo !== "" &&
        this.offer.aptInfo.buildYear !== "" &&
        this.offer.content !== ""
      );
    },
    loading() {
      return this.$store.getters.loading;
    }
  }
};
</script>

<style lang="scss">
</style>
