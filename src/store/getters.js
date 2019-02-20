export default {
  getAllOffers: state => {
    return state.offers;
  },
  filteredOffers: state => {
    if (state.search.offerType && state.search.query) {
      let offers = state.offers.filter(offer => {
        const sQuery = state.search.query.toLocaleLowerCase("pl-PL");
        const vCity = offer.address.city.toLocaleLowerCase("pl-PL");

        if (
          state.search.offerType &&
          offer.offerType !== state.search.offerType
        ) {
          return false;
        }
        if (sQuery && !sQuery.includes(vCity)) {
          return false;
        }
        if (state.search.priceMin && offer.price < state.search.priceMin) {
          return false;
        }
        if (state.search.priceMax && offer.price > state.search.priceMax) {
          return false;
        }
        if (
          state.search.livAreaMin &&
          offer.aptInfo.livArea < state.search.livAreaMin
        ) {
          return false;
        }
        if (
          state.search.livAreaMax &&
          offer.aptInfo.livArea > state.search.livAreaMax
        ) {
          return false;
        }
        if (
          state.search.floorMin &&
          offer.aptInfo.floorNo < state.search.floorMin
        ) {
          return false;
        }
        if (
          state.search.floorMax &&
          offer.aptInfo.floorNo > state.search.floorMax
        ) {
          return false;
        }
        if (
          state.search.roomMin &&
          offer.aptInfo.roomCount < state.search.roomMin
        ) {
          return false;
        }
        if (
          state.search.roomMax &&
          offer.aptInfo.roomCount > state.search.roomMax
        ) {
          return false;
        }
        if (
          state.search.buildMin &&
          offer.aptInfo.buildYear < state.search.buildMin
        ) {
          return false;
        }
        if (
          state.search.buildMax &&
          offer.aptInfo.buildYear > state.search.buildMax
        ) {
          return false;
        }
        if (
          state.search.avDate &&
          offer.aptInfo.dateFrom < state.search.avDate
        ) {
          return false;
        }
        return true;
      });
      return offers;
    } else {
      return [];
    }
  },
  filterSingleOffer: state => {
    return offerId => {
      return state.offers.find(offer => {
        return offer.id === offerId;
      });
    };
  },
  filterSaleOffers: state => {
    const saleOffers = state.offers
      .filter(offer => offer.offerType === "na-sprzedaz")
      .slice(0, 5);
    return saleOffers;
  },
  filterRentOffers: state => {
    const rentOffers = state.offers
      .filter(offer => offer.offerType === "na-wynajem")
      .slice(0, 5);
    return rentOffers;
  },
  filterUserCreatedOffers: state => {
    if (
      state.user !== null &&
      (state.user.id !== null || state.user.id !== undefined)
    ) {
      return state.offers.filter(offer => offer.userId === state.user.id);
    }
  },
  user: state => {
    return state.user;
  },
  loading(state) {
    return state.loading;
  },
  error(state) {
    return state.error;
  },
  searchFields(state) {
    return state.search;
  },
};
