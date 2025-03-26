<template>
  <div class="text-left">
    <div class="navbar text-center text-3xl bg-blue-600 w-full text-white p-6">
      <h1>CODESH Store</h1>
    </div>
    <div class="flex gap-x-8 mt-8">
      <div class="flex flex-col    rounded p-2 w-full">
        <div class="flex m-auto w-auto h-auto" v-for="variant in variants" :key="variant.id" v-show="variant.isActive">
          <img :src="variant.image" alt="" />
        </div>
        <div>
          <h1 class="text-center uppercase">{{ title }}</h1>

          <p>{{ description }}</p>
          <ul>
            <li class="ml-4" v-for="(detail, index) in details" :key="index">
              {{ index + 1 }} - {{ detail }}
            </li>
          </ul>
        </div>
        <div>
          <p v-if="cart < 10 && cart > 0">In Stock</p>

          <p v-else-if="cart > 10 && cart > 0">Out of Stock</p>
          <p v-else>Almost sold out</p>
        </div>
<div class="w-64  flex gap-x-4 m-auto mb-4 justify-center">
  <div v-for="variant in variants" :key="variant.id" @mouseover="showProduct(variant.id)"
          class="cursor-pointer m-2 bg-gray-300 w-16 text-white circle  text-center" :style="{backgroundColor:variant.color}">
          {{ variant.color }}
        </div>
</div>
       
        <div class="flex gap-x-4">
          <button class="bg-blue-500 m-auto text-white text-2xl p-2 rounded w-2/5 disabled:opacity-50"
            @click="addToCart" :disabled="cart > 10">
            Add to Cart
          </button>
          <button :class="cart >= 0 ? 'bg-red-500 text-white': 'bg-bg-gray-500 text-black'"  class=" text-2xl p-2 rounded w-2/5 disabled:opacity-50"
            :disabled="cart <= 0" @click="removeFromCart">
            Remove from Cart
          </button>
        </div>

      </div>

      <div class="cart text-center text-3xl  w-3/6 items-center h-1/5 mt-4 mr-4">
        Cart({{ cart }})
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import greenShoes from "@/assets/gs.webp";
import blueShoes from "@/assets/bs.webp";

const cart = ref(0);
const product = ref("Shoes");
const brand = ref("puma")
const description = ref("Codesh Shoes is made with italian leather");

const details = ref(["50% cotton", "30% wool", "20% rubber"]);

const variants = ref([
  { id: 2234, color: "Green", image: greenShoes, isActive: true, quantity:50 },
  { id: 2264, color: "Blue", image: blueShoes, isActive: false, quantity: 0 },
]);
const showProduct = (id) => {
  variants.value.forEach((variant) => {
    variant.isActive = variant.id === id;
  });
};
const addToCart = () => {
  cart.value += 1;
};
const removeFromCart = () => {
  cart.value -= 1;
};
const title = computed(()=> brand.value + ' ' + product.value)

</script>
