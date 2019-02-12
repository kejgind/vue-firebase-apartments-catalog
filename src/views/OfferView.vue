<template>
  <div class="container">
    <h1 class="is-size-5 has-text-weight-bold mt-4 mb-3">{{offer.title}}</h1>
    <div class="columns is-multiline">
      <div class="column is-12-mobile is-6-tablet">
        <figure class="image is-16by9">
          <img :src="getImgUrl(offer.img.src)" :alt="offer.img.alt">
        </figure>
      </div>
      <div
        class="column is-12-mobile is-offset-1-tablet is-5-tablet has-text-weight-semibold is-size-6"
      >
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
        <p>
          cena:
          <span class="has-text-weight-normal">{{offer.price}} PLN</span>
        </p>
      </div>
    </div>
    <h2 class="is-size-5 has-text-weight-bold mb-3">Opis nieruchomości:</h2>
    <p class="is-size-6">{{offer.content}}</p>
    <div class="level is-mobile mt-4">
      <div class="level-left">
        <div class="level-item">
          <p class="has-text-weight-bold">url:
            <router-link to="/oferta" class="has-text-weight-normal">{{offerURL}}</router-link>
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
</template>

<script>
export default {
  data() {
    return {
      offer: {
        userId: "",
        id: "",
        offertType: "Na wynajem",
        address: {
          street: "Sołtysa 74",
          code: "01-234",
          city: "Wrocław"
        },
        price: 387000,
        dateFrom: null,
        aptInfo: {
          roomCount: 2,
          livArea: 50,
          floorNo: "1",
          buildYear: "2010"
        },
        title: "Super wygodne 2 pokoje z wyposażeniem",
        content:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus temporibus odit corporis, impedit dolores nulla distinctio nostrum doloremque ipsum et, aliquam iure at fuga natus quo illo officia tempora modi quasi repudiandae reiciendis asperiores, dolore porro accusantium! Repudiandae non deleniti molestiae eligendi odit nulla, libero beatae, porro asperiores placeat ipsam?",
        img: {
          src: "img-01.jpeg",
          alt: "nazwa"
        }
      },
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
  created() {},
  methods: {
    getImgUrl(pic) {
      return require("../assets/img/" + pic);
    }
  },
  computed: {
    offerURL() {
      return document.URL;
    }
  }
};
</script>