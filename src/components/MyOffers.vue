<template>
  <div class="my-offers">
    <h1 class="is-size-4 has-text-weight-semibold mb-4">Lista ogłoszeń</h1>
    <div class="columns is-multiline is-variable is-2">
      <div class="column is-6-tablet is-4-widescreen mb-2" v-for="offer in offers" :key="offer.id">
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
              <span class="has-text-weight-semibold">Cena sprzedaży:</span>
              {{offer.price}} PLN
            </p>
            <div class="buttons">
              <button class="button is-danger is-small" to="/panel/ogloszenia">Usuń</button>
              <router-link class="button is-warning is-small" to="/panel/edytuj">Edytuj</router-link>
              <router-link class="button is-info is-small" to="/oferta">Zobacz</router-link>
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
          price: 520000
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
          price: 360000
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
          price: 360000
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
          price: 360000
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
          price: 360000
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

<style lang="scss">
.card-title-wrap {
  height: 3rem;
}
</style>
