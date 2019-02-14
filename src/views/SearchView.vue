<template>
  <div class="container">
    <SearchBar/>

    <section class="section search-view">
      <h1 class="is-size-6 has-text-weight-semibold section__title is-flex mb-3">
        <span class="section__title--text ml-4 px-2 mr-auto">Wyniki wyszukiwania</span>
        <span
          class="section__title--small section__title--area mr-3 px-2 is-size-7 has-text-grey-light is-hidden-mobile"
        >Powierzchnia</span>
        <span
          class="section__title--small section__title--price-m mr-4 px-2 is-size-7 has-text-grey-light is-hidden-mobile"
        >Cena za 1m2</span>
        <span
          class="section__title--small section__title--price mr-4 px-2 is-size-7 has-text-grey-light is-hidden-mobile"
        >Cena</span>
      </h1>

      <article
        class="columns offer is-size-7 is-variable is-1"
        v-for="offer in offers"
        :key="offer.id"
      >
        <div class="column is-3-tablet">
          <router-link :to="`/oferta/${offer.id}`">
            <figure class="offer__image image is-4by3">
              <img :src="getImgUrl(offer.img.src)" :alt="offer.img.alt">
            </figure>
          </router-link>
        </div>
        <div class="column is-5-tablet offer__info is-flex-tablet">
          <router-link :to="`/oferta/${offer.id}`" class="has-text-black">
            <h2 class="has-text-weight-semibold mb-1">{{offer.title}}</h2>
          </router-link>
          <p class="mb-1">{{offer.content | makeExcerpt}}</p>
          <p
            class="has-text-weight-semibold"
          >Lokalizacja > {{offer.address.city}}, {{offer.address.street}}</p>
        </div>
        <div class="column is-4-tablet is-flex-tablet offer__prices">
          <p class="has-text-weight-semibold has-text-grey-light my-1 offer__prices--one">
            <span class="is-hidden-tablet">Powierzchnia mieszkania:</span>
            {{offer.aptInfo.livArea}}m2
          </p>
          <p class="has-text-weight-semibold has-text-grey-light my-1 offer__prices--two">
            <span class="is-hidden-tablet">Cena za 1m2:</span>
            {{unitPrice(offer.price, offer.aptInfo.livArea) | formatPrice}}
          </p>
          <p class="has-text-success has-text-weight-semibold my-1 offer__prices--three">
            <span class="is-hidden-tablet">Cena:</span>
            {{offer.price | formatPrice}}
          </p>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
export default {
  name: "szukaj",
  components: { SearchBar },
  data() {
    return {};
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/img/" + pic);
    },
    unitPrice(price, area) {
      return Math.round(price / area);
    }
  },
  computed: {
    search() {
      return this.$store.state.search;
    },
    offers() {
      return this.$store.getters.filteredOffers;
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  &__title {
    position: relative;
    align-items: center;

    &--text,
    &--small {
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
  border-bottom: 1px solid #f4f4f4;

  @media screen and (min-width: 769px) {
    border-bottom: none;
  }

  &__info {
    flex-direction: column;
    justify-content: space-between;
  }
  &__prices {
    justify-content: flex-end;
    align-items: center;

    @media screen and (min-width: 769px) {
      &--two {
        margin-left: 3 * 1rem;
      }
      &--three {
        margin-left: 2 * 1rem;
      }
    }
  }
}
</style>
