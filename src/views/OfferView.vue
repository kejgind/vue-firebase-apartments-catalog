<template>
  <section class="section">
    <b-loading :is-full-page="false" :active.sync="loading" :can-cancel="false"></b-loading>
    <div class="container" v-if="!loading">
      <h1 class="is-size-5 has-text-weight-bold mt-4 mb-3">{{offer.title}}</h1>
      <div class="columns is-multiline">
        <div class="column is-6-tablet">
          <figure class="image is-16by9">
            <img :src="getImgUrl(offer.img.src)" :alt="offer.img.alt">
          </figure>
        </div>
        <div class="column is-offset-1-tablet is-5-tablet has-text-weight-semibold is-size-6">
          <p class="mb-2">
            adres:
            <span
              class="has-text-weight-normal"
            >ul. {{offer.address.street}}, {{offer.address.code}} {{offer.address.city}}</span>
          </p>
          <p class="mb-2">
            liczba pokoi:
            <span class="has-text-weight-normal">{{offer.aptInfo.roomCount}}</span>
          </p>
          <p class="mb-2">
            powierzchnia:
            <span class="has-text-weight-normal">{{offer.aptInfo.livArea}} m2</span>
          </p>
          <p class="mb-2">
            piętro:
            <span class="has-text-weight-normal">{{offer.aptInfo.floorNo}}</span>
          </p>
          <p class="mb-2">
            rok budowy:
            <span class="has-text-weight-normal">{{offer.aptInfo.buildYear}}</span>
          </p>
          <p class="mb-2">
            cena:
            <span class="has-text-weight-normal">{{offer.price | formatPrice}}</span>
          </p>
          <p>
            dostępne od:
            <span class="has-text-weight-normal">{{offer.dateFrom | formatDate}}</span>
          </p>
        </div>
      </div>
      <h2 class="is-size-5 has-text-weight-bold mb-3">Opis nieruchomości:</h2>
      <p class="is-size-6">{{offer.content}}</p>
      <div class="level is-mobile mt-4">
        <div class="level-left">
          <div class="level-item">
            <p class="has-text-weight-bold">Adres oferty:
              <router-link :to="`/oferta/${offer.id}`" class="has-text-weight-normal">{{offerURL}}</router-link>
            </p>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <button class="button is-info" @click="contactModalShow = true">Kontakt</button>
          </div>
        </div>
      </div>

      <!-- modal -->
      <b-modal :active.sync="contactModalShow" :width="640" scroll="keep">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <h3 class="is-size-5">Dane kontaktowe:</h3>
              <p>Imię i Nazwisko: {{user.firstName}} {{user.lastName}}</p>
              <p>Email: {{user.email}}</p>
              <p>Telefon: +48 {{user.phone}}</p>
            </div>
          </div>
        </div>
      </b-modal>
    </div>
  </section>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      user: {
        email: "piotruspan@nibylandia.pl",
        phone: "123456789",
        password: "",
        password2: "",
        firstName: "Piotruś",
        lastName: "Pan",
        street: "",
        city: "",
        code: ""
      },
      contactModalShow: false
    };
  },
  created() {
    if (this.$store.state.offers.length === 0) {
      this.$store.dispatch("loadOffers");
    }
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/img/" + pic);
    }
  },
  computed: {
    offerURL() {
      const baseURL = window.location.origin;
      const additionURL = "/oferta/";
      const offerId = this.id;

      return baseURL + additionURL + offerId;
    },
    offer() {
      return this.$store.getters.filterSingleOffer(this.id);
    },
    loading() {
      return this.$store.getters.loading;
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  position: relative;
}
</style>
