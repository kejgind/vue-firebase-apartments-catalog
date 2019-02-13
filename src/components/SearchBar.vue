<template>
  <section class="section search-box">
    <h1 class="is-size-5 has-text-weight-bold mb-3">Znajdź idealne mieszkanie dla siebie już dziś!</h1>
    <form class="has-background-warning">
      <b-field class="pa-3 has-background-light" grouped group-multiline>
        <b-select placeholder="Oferta">
          <option>Na sprzedaż</option>
          <option>Na wynajem</option>
        </b-select>

        <b-input type="search" placeholder="np. miasto, ulica" :icon="icons.search.icon" expanded></b-input>

        <p class="control">
          <button class="button is-warning">Szukaj</button>
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
            <div class="column is-6-tablet">
              <h3 class="is-size-7 has-text-weight-semibold mb-2">Cena:</h3>
              <b-field grouped group-multiline>
                <b-input
                  v-model="search.priceMin"
                  aria-label="Cena minimalna"
                  size="is-small"
                  placeholder="od"
                ></b-input>
                <b-input
                  v-model="search.priceMax"
                  aria-label="Cena maksymalna"
                  size="is-small"
                  placeholder="do"
                ></b-input>
              </b-field>
            </div>

            <!-- Powierzchnia -->
            <div class="column is-6-tablet">
              <h3 class="is-size-7 has-text-weight-semibold mb-2">Powierzchnia(m2):</h3>
              <b-field grouped group-multiline>
                <b-input
                  v-model="search.livAreaMin"
                  aria-label="Powierzchnia minimalna"
                  size="is-small"
                  placeholder="od"
                ></b-input>
                <b-input
                  v-model="search.livAreaMax"
                  aria-label="Powierzchnia maksymalna"
                  size="is-small"
                  placeholder="do"
                ></b-input>
              </b-field>
            </div>
          </div>

          <div class="columns is-multiline is-variable is-1 is-vcentered">
            <!-- Piętro -->
            <div class="column is-6-tablet">
              <h3 class="is-size-7 has-text-weight-semibold mb-2">Piętro:</h3>
              <b-field grouped group-multiline>
                <b-input
                  v-model="search.floorMin"
                  aria-label="Piętro minimalne"
                  size="is-small"
                  placeholder="od"
                ></b-input>
                <b-input
                  v-model="search.floorMax"
                  aria-label="Piętro maksymalne"
                  size="is-small"
                  placeholder="do"
                ></b-input>
              </b-field>
            </div>
            <!-- Liczba pokoi -->
            <div class="column is-6-tablet">
              <h3 class="is-size-7 has-text-weight-semibold mb-2">Ilość pokoi:</h3>
              <b-field grouped group-multiline>
                <b-input
                  v-model="search.roomMin"
                  aria-label="Minimalna ilość pokoi"
                  size="is-small"
                  placeholder="od"
                ></b-input>
                <b-input
                  v-model="search.roomMax"
                  aria-label="Maksymalna ilośc pokoi"
                  size="is-small"
                  placeholder="do"
                ></b-input>
              </b-field>
            </div>
          </div>

          <div class="columns is-multiline is-variable is-1 is-vcentered">
            <!-- Rok budowy -->
            <div class="column is-6-tablet">
              <h3 class="is-size-7 has-text-weight-semibold mb-2">Rok budowy:</h3>
              <b-field grouped group-multiline>
                <b-input
                  v-model="search.buildMin"
                  aria-label="Rok budowy minimalny"
                  size="is-small"
                  placeholder="od"
                ></b-input>
                <b-input
                  v-model="search.buildMax"
                  aria-label="Rok budowy maksymalny"
                  size="is-small"
                  placeholder="do"
                ></b-input>
              </b-field>
            </div>
            <!-- Dostępność -->
            <div class="column is-6-tablet">
              <h3 class="is-size-7 has-text-weight-semibold mb-2">Dostępne od:</h3>
              <b-field grouped>
                <b-datepicker
                  v-model="search.avDate"
                  aria-label="Dostępne od:"
                  size="is-small"
                  placeholder="Dostępne od"
                  :icon="icons.calendar.icon"
                  :min-date="new Date()"
                ></b-datepicker>
              </b-field>
            </div>
          </div>

          <!-- Szukaj - przycisk -->
          <button class="button is-warning">Szukaj</button>
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
      search: {
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
        avDate: null
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.card {
  margin-top: -0.75rem;
}
</style>