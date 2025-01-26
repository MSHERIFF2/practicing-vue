import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {name: 'Nike shoes', price: 150}
      {name: 'Adidas shoes', price: 180}
      {name: 'Puma shoes', price: 190}
      {name: 'Flamino shoes', price: 130}
      {name: 'Codesh shoes', price: 160}
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
