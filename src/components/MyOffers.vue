<template>
  <div class="my-offers">
    <h1 class="is-size-4 has-text-weight-semibold mb-4">Lista ogłoszeń</h1>
    <article class="media" v-for="offer in offers" :key="offer.id">
      <figure class="media-left">
        <p class="image offer-img">
          <img :src="getImgUrl(offer.img.src)" :alt="offer.img.alt">
        </p>
      </figure>
      <div class="media-content is-flex">
        <h2 class="is-size-5 has-text-weight-bold">{{offer.title}}</h2>
        <p>
          <span class="has-text-weight-semibold">Adres:</span>
          {{offer.address.street}}, {{offer.address.code}} {{offer.address.city}}
        </p>
        <p>
          <span class="has-text-weight-semibold">Cena sprzedaży:</span>
          {{offer.price}} PLN
        </p>
        <div class="buttons">
          <button class="button is-danger" to="/panel/ogloszenia">Usuń</button>
          <router-link class="button is-warning" to="/panel/edytuj">Edytuj</router-link>
          <router-link class="button is-info" to="/oferta">Zobacz</router-link>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
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
.media-content {
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
}

.offer-img {
  width: 230px;
  height: 150px;
  object-fit: cover;
  overflow: hidden;
  object-position: 50% 50%;
}
</style>
