<template>
  <div class="w-full p-12">
    <ul class="flex w-full cursor-pointer  mx-8 gap-x-8 justify-center items-center text-xl text-gray-400">
        <li v-for="item in navItem" :key="item"   @mouseover="showMenu" @mouseleave="hideMenu" class="hover:underline">{{ item }}</li>
    </ul>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import { defineEmits } from 'vue'

const emit = defineEmits(['customEvent']);
const navItem = ref(['Home', 'Shopping', 'Element'])
const showMenu = () =>{
  emit('customEvent1', 'showMenu')
}
const hideMenu = () =>{
  emit('customEvent2', 'hideMenu')
}
</script>

