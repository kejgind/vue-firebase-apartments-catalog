<template>
  <div class="container">
    <SearchBar/>

    <div class="home-base">
      <b-loading :is-full-page="false" :active.sync="loading" :can-cancel="false"></b-loading>
      <div class="start-view" v-if="!loading">
        <section class="section sale-section">
          <h2 class="is-size-6 has-text-weight-semibold section__title">
            <span class="section__title--text ml-4 px-2">Na sprzedaż</span>
          </h2>
          <div class="section__offers columns mt-3 is-variable is-2">
            <router-link
              tag="article"
              :to="`/oferta/${offer.id}`"
              class="offer column is-one-fifth-tablet is-size-7 has-text-weight-semibold"
              v-for="offer in saleOffers"
              :key="offer.id"
            >
              <figure class="image is-16by9 offer__image">
                <img :src="getImgUrl(offer.img.src)" :alt="offer.img.alt">
              </figure>
              <p class="offer__info is-flex">
                <span class="offer__price is-size-6">{{offer.price | formatPrice}}</span>
                <span class="offer__liv-area">{{offer.aptInfo.livArea}} m2</span>
              </p>
              <p class="offer__city">{{offer.address.city}}</p>
            </router-link>
          </div>
        </section>
        <section class="section rent-section">
          <h2 class="is-size-6 has-text-weight-semibold section__title">
            <span class="section__title--text ml-4 px-1">Na wynajem</span>
          </h2>
          <div class="section__offers columns mt-3 is-variable is-2">
            <router-link
              tag="article"
              :to="`/oferta/${offer.id}`"
              class="offer column is-one-fifth-tablet is-size-7 has-text-weight-semibold"
              v-for="offer in rentOffers"
              :key="offer.id"
            >
              <figure class="image is-16by9 offer__image">
                <img :src="getImgUrl(offer.img.src)" :alt="offer.img.alt">
              </figure>
              <p class="offer__info is-flex">
                <span class="offer__price is-size-6">{{offer.price | formatPrice}}</span>
                <span class="offer__liv-area">{{offer.aptInfo.livArea}} m2</span>
              </p>
              <p class="offer__city">{{offer.address.city}}</p>
            </router-link>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/Shared/SearchBar";
export default {
  name: "home",
  components: { SearchBar },
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
    }
  },
  computed: {
    saleOffers() {
      return this.$store.getters.filterSaleOffers;
    },
    rentOffers() {
      return this.$store.getters.filterRentOffers;
    },
    loading() {
      return this.$store.getters.loading;
    }
  }
};
</script>

<style lang="scss" scoped>
.home-base {
  position: relative;
}
.section {
  &__title {
    position: relative;

    &--text {
      background: white;
    }

    &::after {
      content: "";
      position: absolute;
      display: block;
      background: #f4f4f4;
      left: 0;
      right: 0;
      z-index: -1;
      top: 50%;
      height: 15%;
      transform: translateY(-50%);
    }
  }
}
.offer {
  cursor: pointer;
  &__info {
    justify-content: space-between;
    align-items: center;
  }
}
</style>

