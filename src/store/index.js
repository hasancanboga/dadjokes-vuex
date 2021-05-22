import { createStore } from 'vuex'

const url = "https://icanhazdadjoke.com";
const headers = { Accept: "application/json" };

export default createStore({
  state: {
    currentJoke: 'This is a joke',
    allJokes: []
  },
  mutations: { // synchronous
    setCurrentJoke(state, payload) {
      state.currentJoke = payload;
      state.allJokes.push(payload);
    }
  },
  actions: { // asynchronous
    async setCurrentJoke(state) {
      const joke = await fetch(url, { headers });
      const j = await joke.json();
      state.commit("setCurrentJoke", j.joke);
    }
  },
  modules: {
  },
  getters: {
    getCurrentJoke(state) {
      return state.currentJoke
    }, // or you can do arrow functions like so:
    getAllJokes: state => state.allJokes
  }
})
