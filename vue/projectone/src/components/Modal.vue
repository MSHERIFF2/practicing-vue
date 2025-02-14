<template>
  <div>
    <div v-for="product in products" :key=product class="flex flex-col text-2xl">
        {{ product }}
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const products = ref({
    title: 'Shoes',
    price: 250,
    size: 32
})
</script>
