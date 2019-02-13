<template>
  <div class="container">
    <SearchBar/>

    <div class="start-view">
      <section class="section sale-section">
        <h2 class="is-size-6 has-text-weight-semibold section__title">
          <span class="section__title--text ml-4 px-2">Na sprzedaż</span>
        </h2>
        <div class="section__offers columns mt-3 is-variable is-2">
          <router-link
            tag="article"
            to="/oferta"
            class="offer column is-one-fifth-tablet is-size-7 has-text-weight-semibold"
            v-for="offer in offers"
            :key="offer.id"
          >
            <figure class="image is-16by9 offer__image">
              <img :src="getImgUrl(offer.img.src)" :alt="offer.img.alt">
            </figure>
            <p class="offer__info is-flex">
              <span class="offer__price is-size-6">{{offer.price}}PLN</span>
              <span class="offer__liv-area">{{offer.aptInfo.livArea}}m2</span>
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
            to="/oferta"
            class="offer column is-one-fifth-tablet is-size-7 has-text-weight-semibold"
            v-for="offer in offers"
            :key="offer.id"
          >
            <figure class="image is-16by9 offer__image">
              <img :src="getImgUrl(offer.img.src)" :alt="offer.img.alt">
            </figure>
            <p class="offer__info is-flex">
              <span class="offer__price is-size-6">{{offer.price}}PLN</span>
              <span class="offer__liv-area">{{offer.aptInfo.livArea}}m2</span>
            </p>
            <p class="offer__city">{{offer.address.city}}</p>
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
export default {
  name: "home",
  components: { SearchBar },
  data() {
    return {
      offers: [
        {
          id: 1,
          title: "Przylesie 4 pokoje z wyposażeniem po remoncie",
          img: {
            src: "img-01.jpeg",
            alt: "nazwa"
          },
          address: {
            street: "Sołtysa 74",
            code: "01-234",
            city: "Wrocław"
          },
          price: 520000,
          aptInfo: {
            roomCount: 2,
            livArea: 50,
            floorNo: "1",
            buildYear: "2010"
          }
        },
        {
          id: 2,
          title: "Super wygodne 2 pokoje z wyposażeniem",
          img: {
            src: "img-02.jpeg",
            alt: "nazwa"
          },
          address: {
            street: "Warga 7",
            code: "01-234",
            city: "Wrocław"
          },
          price: 360000,
          aptInfo: {
            roomCount: 2,
            livArea: 50,
            floorNo: "1",
            buildYear: "2010"
          }
        },
        {
          id: 3,
          title: "Super wygodne 2 pokoje z wyposażeniem",
          img: {
            src: "img-03.jpeg",
            alt: "nazwa"
          },
          address: {
            street: "Warga 7",
            code: "01-234",
            city: "Wrocław"
          },
          price: 360000,
          aptInfo: {
            roomCount: 2,
            livArea: 50,
            floorNo: "1",
            buildYear: "2010"
          }
        },
        {
          id: 4,
          title: "Super wygodne 2 pokoje z wyposażeniem",
          img: {
            src: "img-04.jpeg",
            alt: "nazwa"
          },
          address: {
            street: "Warga 7",
            code: "01-234",
            city: "Wrocław"
          },
          price: 360000,
          aptInfo: {
            roomCount: 2,
            livArea: 50,
            floorNo: "1",
            buildYear: "2010"
          }
        },
        {
          id: 5,
          title: "Super wygodne 2 pokoje z wyposażeniem",
          img: {
            src: "img-05.jpeg",
            alt: "nazwa"
          },
          address: {
            street: "Warga 7",
            code: "01-234",
            city: "Wrocław"
          },
          price: 360000,
          aptInfo: {
            roomCount: 2,
            livArea: 50,
            floorNo: "1",
            buildYear: "2010"
          }
        }
      ]
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/img/" + pic);
    }
  }
};
</script>

<style lang="scss" scoped>
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

