<template>
  <form @submit.prevent="updateOffer">
    <h1 class="is-size-5 has-text-weight-bold mb-3">Edytuj ogłoszenie:</h1>

    <!-- Tytuł ofert -->
    <h2 class="has-text-weight-semibold mb-2">Tytuł oferty:</h2>
    <div class="columns is-size-6">
      <div class="column is-12">
        <b-field>
          <b-input
            type="text"
            v-model="updOffer.title"
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
      <b-radio v-model="updOffer.offerType" native-value="na-wynajem">Na wynajem</b-radio>
      <b-radio v-model="updOffer.offerType" native-value="na-sprzedaz">Na sprzedaż</b-radio>
    </div>

    <!-- Adres -->
    <h2 class="has-text-weight-semibold mb-2">Adres:</h2>
    <div class="columns is-size-6">
      <div class="column is-4-tablet">
        <b-field type message>
          <b-input
            v-model="updOffer.address.street"
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
            v-model="updOffer.address.city"
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
            v-model="updOffer.address.code"
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
            v-model="updOffer.price"
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
            v-model="updOffer.dateFrom"
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
            v-model="updOffer.aptInfo.roomCount"
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
            v-model="updOffer.aptInfo.livArea"
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
            v-model="updOffer.aptInfo.floorNo"
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
            v-model="updOffer.aptInfo.buildYear"
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
            v-model="updOffer.content"
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
      class="button is-warning has-text-weight-semibold mr-3"
      :disabled="!formIsValid"
      type="submit"
    >Aktualizuj ofertę</button>
    <button
      class="button is-secondary has-text-weight-semibold"
      @click.prevent="closeEdit"
    >Anuluj zmiany</button>
  </form>
</template>

<script>
export default {
  name: "dodaj",
  props: ["id"],
  data() {
    return {
      updOffer: {}
    };
  },
  created() {
    Object.assign(
      this.updOffer,
      this.$store.getters.filterSingleOffer(this.id)
    );
  },
  methods: {
    updateOffer() {
      if (!this.formIsValid) {
        return;
      }
      if (!this.userIsAuthenticated) {
        return false;
      }
      this.$store.dispatch("updateOffer", this.updOffer);
    },
    closeEdit() {
      this.$router.push("/panel/ogloszenia");
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
        this.updOffer.offerType !== "" &&
        this.updOffer.title !== "" &&
        this.updOffer.address.street !== "" &&
        this.updOffer.address.code !== "" &&
        this.updOffer.address.city !== "" &&
        this.updOffer.price !== "" &&
        this.updOffer.dateFrom !== "" &&
        this.updOffer.aptInfo.roomCount !== "" &&
        this.updOffer.aptInfo.livArea !== "" &&
        this.updOffer.aptInfo.floorNo !== "" &&
        this.updOffer.aptInfo.buildYear !== "" &&
        this.updOffer.content !== ""
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
