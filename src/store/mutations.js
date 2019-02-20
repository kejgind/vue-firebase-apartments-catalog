import parse from "date-fns/parse";

export default {
  searchApt: (state, payload) => {
    Object.assign(state.search, payload);
  },
  setUser(state, payload) {
    state.user = payload;
  },
  setLoading(state, payload) {
    state.loading = payload;
  },
  setError(state, payload) {
    state.error = payload;
  },
  clearError(state) {
    state.error = null;
  },
  setLoadedOffers: (state, payload) => {
    state.offers = payload;
  },
  changeDateFormat: state => {
    state.offers.map(offer => {
      return (offer.dateFrom = parse(offer.dateFrom));
    });
  },
  addNewOffer: (state, payload) => {
    state.offers.push(payload);
  },
  updateOffer: (state, payload) => {
    const offer = state.offers.find(offer => {
      return offer.id === payload.id;
    });
    Object.assign(offer, payload);
  },
  deleteOffer: (state, payload) => {
    const offerId = state.offers.find(offer => {
      return offer.id === payload;
    });
    const offerIdx = state.offers.indexOf(offerId);
    state.offers.splice(offerIdx, 1);
  },
};
