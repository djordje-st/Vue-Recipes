import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const APP_ID = '80e65490';
const API_KEY = '7d82ab2c5c5f84b43bfbd20f2e9142de';

export default new Vuex.Store({
  state: {
    searchTerm: '',
    results: [],
    isLoading: false
  },
  mutations: {
    storeResults(state, payload = []) {
      state.results = payload;
    },
    updateSearchTerm(state, payload) {
      state.searchTerm = payload;
    },
    loadingState(state, payload) {
      state.isLoading = payload;
    }
  },
  getters: {
    getResults(state) {
      return state.results.map(rec => rec.recipe);
    },
    getLoadingState(state) {
      return state.isLoading;
    }
  },
  actions: {
    searchFood({ commit, state }) {
      commit('loadingState', true);
      axios
        .get(`https://api.edamam.com/search?q=${state.searchTerm}&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=50`)
        .then(res => {
          commit('storeResults', res.data.hits);
          commit('loadingState', false);
        })
        .catch(err => console.error(err));
    }
  }
});
