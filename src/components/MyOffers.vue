<template>
  <div class="my-offers">
    <h1 class="is-size-4 has-text-weight-semibold mb-4">Lista ogłoszeń</h1>
    <div class="columns is-multiline is-variable is-2">
      <div
        class="column is-6-tablet is-4-widescreen mb-2"
        v-for="offer in userOffers"
        :key="offer.id"
      >
        <article class="card">
          <div class="card-image">
            <figure class="image is-16by9">
              <img :src="getImgUrl(offer.img.src)" :alt="offer.img.alt">
            </figure>
          </div>
          <div class="card-content">
            <div class="card-title-wrap">
              <h2 class="is-size-6 has-text-weight-bold mb-1">{{offer.title}}</h2>
            </div>
            <p class="mb-1">
              <span class="has-text-weight-semibold">Adres:</span>
              {{offer.address.street}}, {{offer.address.code}} {{offer.address.city}}
            </p>
            <p class="mb-3">
              <span
                v-if="offer.offerType === 'Na sprzedaż'"
                class="has-text-weight-semibold"
              >Cena sprzedaży:</span>
              <span
                v-if="offer.offerType === 'Na wynajem'"
                class="has-text-weight-semibold"
              >Cena wynajmu:</span>
              {{offer.price | formatPrice}}
            </p>
            <div class="buttons">
              <button class="button is-danger is-small" @click="deleteOffer(offer.id)">Usuń</button>
              <router-link
                class="button is-warning is-small"
                :to="`/panel/edytuj/${offer.id}`"
              >Edytuj</router-link>
              <router-link class="button is-info is-small" :to="`ogloszenia/${offer.id}`">Zobacz</router-link>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ogloszenia",
  data() {
    return {};
  },
  created() {
    if (!this.$store.state.offers[0]) {
      this.$store.dispatch("loadOffers");
    }
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/img/" + pic);
    },
    deleteOffer(id) {
      if (!this.userIsAuthenticated) {
        return false;
      }
      this.$dialog.confirm({
        title: "Usunięcie oferty",
        message:
          "Jesteś pewien, że chcesz <b>usunąć</b> wybraną ofertę? Po usunięciu oferta ta nie będzie już dostępna.",
        confirmText: "Usuń ofertę",
        cancelText: "Anuluj",
        type: "is-danger",
        hasIcon: true,
        onConfirm: () => this.$store.dispatch("deleteOffer", id)
      });
    }
  },
  computed: {
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    },
    userOffers() {
      if (!this.userIsAuthenticated) {
        return false;
      }
      return this.$store.getters.filterUserCreatedOffers;
    }
  }
};
</script>

<style lang="scss">
.card-title-wrap {
  height: 3rem;
}
</style>
