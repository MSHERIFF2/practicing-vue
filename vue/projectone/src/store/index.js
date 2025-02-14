import { defineStore } from "pinia";

 export const useStore = defineStore('main', {
  state:() => ({
    
    count: 0,
    products: [
      {id: 1, name: 'Nike shoes', price: 150},
      {id: 2, name: 'Adidas shoes', price: 180},
      {id: 3, name: 'Puma shoes', price: 190},
      {id: 4, name: 'Flamino shoes', price: 130},
      {id: 5, name: 'Codesh shoes', price: 160}
    ],
  }),

   actions: {
    counter(){
      this.count++
  },
},

 });
  

