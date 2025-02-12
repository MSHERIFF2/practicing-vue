import { defineStore } from "pinia";

 const store = defineStore({
  state: {
    
    count: 0,
    products: [
      {id: 1, name: 'Nike shoes', price: 150},
      {id: 2, name: 'Adidas shoes', price: 180},
      {id: 3, name: 'Puma shoes', price: 190},
      {id: 4, name: 'Flamino shoes', price: 130},
      {id: 5, name: 'Codesh shoes', price: 160}
    ]
  },
  getters: {
  },
  mutations: {
    counter(state){
      state.count++
  }
  },
  actions: {
  },
  modules: {
  }
})
export default store;
