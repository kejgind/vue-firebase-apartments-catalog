<template>
  <section class="section search-box">
    <h1 class="is-size-5 has-text-weight-bold mb-3">Znajdź idealne mieszkanie dla siebie już dziś!</h1>
    <form class="has-background-warning" v-on:submit.prevent="searchApt">
      <b-field class="pa-3 has-background-light" grouped group-multiline>
        <b-select placeholder="Oferta" v-model="newSearch.offerType">
          <option value="na-sprzedaz">Na sprzedaż</option>
          <option value="na-wynajem">Na wynajem</option>
        </b-select>

        <b-input
          type="search"
          placeholder="podaj szukane miasto"
          :icon="icons.search.icon"
          expanded
          v-model="newSearch.query"
          required
        ></b-input>

        <p class="control">
          <button :disabled="!formIsValidated" class="button is-warning">Szukaj</button>
        </p>
      </b-field>

      <b-collapse class="card has-background-light is-shadowless" :open="false">
        <div slot="trigger" slot-scope="props" class="card-header is-size-7 pl-1 is-shadowless">
          <p class="card-header-title has-text-weight-semi-bold">Dodatkowe opcje wyszukiwania</p>
          <a class="card-header-icon">
            <b-icon :icon="props.open ? 'caret-down' : 'caret-up'"></b-icon>
          </a>
        </div>

        <div class="card-content">
          <div class="columns is-multiline is-variable is-1 is-vcentered">
            <!-- Cena -->
            <div class="column is-5-tablet">
              <h3 class="is-size-7 has-text-weight-semibold mb-2">Cena:</h3>
              <div class="is-flex inputs__group">
                <b-field class="inputs__group__item">
                  <b-input
                    v-model="newSearch.priceMin"
                    aria-label="Cena minimalna"
                    size="is-small"
                    placeholder="od"
                    type="number"
                    min="0"
                  ></b-input>
                </b-field>
                <b-field class="inputs__group__item">
                  <b-input
                    v-model="newSearch.priceMax"
                    aria-label="Cena maksymalna"
                    size="is-small"
                    placeholder="do"
                    type="number"
                    min="0"
                  ></b-input>
                </b-field>
              </div>
            </div>

            <!-- Powierzchnia -->
            <div class="column is-5-tablet is-offset-2-tablet">
              <h3 class="is-size-7 has-text-weight-semibold mb-2">Powierzchnia(m2):</h3>
              <div class="is-flex inputs__group">
                <b-field class="inputs__group__item">
                  <b-input
                    v-model="newSearch.livAreaMin"
                    aria-label="Powierzchnia minimalna"
                    size="is-small"
                    placeholder="od"
                    type="number"
                    min="10"
                  ></b-input>
                </b-field>
                <b-field class="inputs__group__item">
                  <b-input
                    v-model="newSearch.livAreaMax"
                    aria-label="Powierzchnia maksymalna"
                    size="is-small"
                    placeholder="do"
                    type="number"
                    min="10"
                  ></b-input>
                </b-field>
              </div>
            </div>
          </div>

          <div class="columns is-multiline is-variable is-1 is-vcentered">
            <!-- Piętro -->
            <div class="column is-5-tablet">
              <h3 class="is-size-7 has-text-weight-semibold mb-2">Piętro:</h3>
              <div class="is-flex inputs__group">
                <b-field class="inputs__group__item">
                  <b-input
                    v-model="newSearch.floorMin"
                    aria-label="Piętro minimalne"
                    size="is-small"
                    placeholder="od"
                    type="number"
                    min="0"
                    max="40"
                  ></b-input>
                </b-field>
                <b-field class="inputs__group__item">
                  <b-input
                    v-model="newSearch.floorMax"
                    aria-label="Piętro maksymalne"
                    size="is-small"
                    placeholder="do"
                    type="number"
                    min="0"
                    max="40"
                  ></b-input>
                </b-field>
              </div>
            </div>
            <!-- Liczba pokoi -->
            <div class="column is-5-tablet is-offset-2-tablet">
              <h3 class="is-size-7 has-text-weight-semibold mb-2">Ilość pokoi:</h3>
              <div class="is-flex inputs__group">
                <b-field class="inputs__group__item">
                  <b-input
                    v-model="newSearch.roomMin"
                    aria-label="Minimalna ilość pokoi"
                    size="is-small"
                    placeholder="od"
                    type="number"
                    min="1"
                    max="15"
                  ></b-input>
                </b-field>
                <b-field class="inputs__group__item">
                  <b-input
                    v-model="newSearch.roomMax"
                    aria-label="Maksymalna ilość pokoi"
                    size="is-small"
                    placeholder="do"
                    type="number"
                    min="1"
                    max="15"
                  ></b-input>
                </b-field>
              </div>
            </div>
          </div>

          <div class="columns is-multiline is-variable is-1 is-vcentered">
            <!-- Rok budowy -->
            <div class="column is-5-tablet">
              <h3 class="is-size-7 has-text-weight-semibold mb-2">Rok budowy:</h3>
              <div class="is-flex inputs__group">
                <b-field class="inputs__group__item">
                  <b-input
                    v-model="newSearch.buildMin"
                    aria-label="Rok budowy minimalny"
                    size="is-small"
                    placeholder="od"
                    type="number"
                    min="1900"
                    max="2019"
                  ></b-input>
                </b-field>
                <b-field class="inputs__group__item">
                  <b-input
                    v-model="newSearch.buildMax"
                    aria-label="Rok budowy maksymalny"
                    size="is-small"
                    placeholder="do"
                    type="number"
                    min="1900"
                    max="2019"
                  ></b-input>
                </b-field>
              </div>
            </div>
            <!-- Dostępność -->
            <div class="column is-5-tablet is-offset-2-tablet">
              <h3 class="is-size-7 has-text-weight-semibold mb-2">Dostępne od:</h3>
              <div class="is-flex inputs__group">
                <b-field class="inputs__group__item">
                  <b-datepicker
                    v-model="newSearch.avDate"
                    aria-label="Dostępne od:"
                    size="is-small"
                    placeholder="Dostępne od"
                    :icon="icons.calendar.icon"
                  ></b-datepicker>
                </b-field>
              </div>
            </div>
          </div>
        </div>
      </b-collapse>
    </form>
  </section>
</template>

<script>
import { icons } from "@/plugins/icons.js";
export default {
  name: "searchbar",
  data() {
    return {
      icons: icons,
      newSearch: {
        offerType: "",
        query: "",
        priceMin: "",
        priceMax: "",
        livAreaMin: "",
        livAreaMax: "",
        floorMin: "",
        floorMax: "",
        roomMin: "",
        roomMax: "",
        buildMin: "",
        buildMax: "",
        avDate: new Date()
      }
    };
  },
  created() {
    Object.assign(this.newSearch, this.$store.getters.searchFields);
  },
  methods: {
    searchApt() {
      if (this.newSearch.offerType && this.newSearch.query) {
        this.$store.commit("searchApt", this.newSearch);
        if (this.$router.history.current.path !== "/szukaj") {
          this.$router.push("/szukaj");
        }
      }
    }
  },
  computed: {
    formIsValidated() {
      if (this.newSearch.offerType === "" || this.newSearch.query === "") {
        return false;
      }
      if (
        this.newSearch.priceMin !== "" &&
        this.newSearch.priceMax !== "" &&
        this.newSearch.priceMin > this.newSearch.priceMax
      ) {
        return false;
      }
      if (
        this.newSearch.livAreaMin !== "" &&
        this.newSearch.livAreaMax !== "" &&
        this.newSearch.livAreaMin > this.newSearch.livAreaMax
      ) {
        return false;
      }
      if (
        this.newSearch.floorMin !== "" &&
        this.newSearch.floorMax !== "" &&
        this.newSearch.floorMin > this.newSearch.floorMax
      ) {
        return false;
      }
      if (
        this.newSearch.roomMin !== "" &&
        this.newSearch.roomMax !== "" &&
        this.newSearch.roomMin > this.newSearch.roomMax
      ) {
        return false;
      }
      if (
        this.newSearch.buildMin !== "" &&
        this.newSearch.buildMax !== "" &&
        this.newSearch.buildMin > this.newSearch.buildMax
      ) {
        return false;
      }
      return true;
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  margin-top: -0.75rem;
}
.inputs__group {
  justify-content: space-between;
  align-items: flex-start;

  &__item {
    width: 48%;
  }
}
</style>