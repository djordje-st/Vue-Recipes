import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const APP_ID = '80e65490';
const API_KEY = '7d82ab2c5c5f84b43bfbd20f2e9142de';

export default new Vuex.Store({
  state: {
    searchTerm: '',
    results: []
  },
  mutations: {
    storeResults(state, payload = []) {
      state.results = payload;
    },
    updateSearchTerm(state, payload) {
      state.searchTerm = payload;
    }
  },
  getters: {
    getResults(state) {
      return state.results.map(rec => rec.recipe);
    }
  },
  actions: {
    searchFood({ commit, state }) {
      axios
        .get(`https://api.edamam.com/search?q=${state.searchTerm}&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=10`)
        .then(res => {
          console.log(res.data.hits);
          commit('storeResults', res.data.hits);
        })
        .catch(err => console.error(err));
    }
  }
});
