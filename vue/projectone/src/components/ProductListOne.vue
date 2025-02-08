<template>
    <div class="flex flex-col">
        <h2 class="font-bold text-xl"> Product in Grid View </h2>
        <ul class="  flex flex-wrap justify-between items-center m-4 gap-8">
            <li v-for="product in products" :key="product.id" class=" p-3  text-white bg-gray-500 flex flex-col" >
                <span >{{ product.id }}</span>
                <span >{{ product.name }}</span>
                <span >${{ product.price }}</span>
            </li>
        </ul>
        <label class="text-center w-1">{{ showcounter }}</label>
        <button @click="counter" class="w-64 bg-green-500 p-3 m-auto text-white btn">counter</button>
    </div>
</template>
<script>
export default {
   
    computed: {
        products(){
           return this.$store.state.products
        },
        showcounter(){
            return this.$store.state.count
        }
    },
    methods: {
      counter(){
        this.$store.commit('counter')
      }
    }
}
</script>
