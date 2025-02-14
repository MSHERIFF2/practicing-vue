<template>
    <div class="w-full h-full">
        <Navbar @customEvent1="handleEvent1" @customEvent2="handleEvent2"/>   

        <transition name="slide">
            <div v-if="show" class="z-50 p-12 w-[90%] md:w-4/5 fixed top-37 left-1/2 transform -translate-x-1/2 bg-white shadow-lg">
                <Modal/>
            </div>
        </transition>

        <div class="z-10 p-16 h-screen bg-cover w-full bg-center"
             :style="{ backgroundImage: `url(${require('@/assets/HeroSection.jpg')})` }">
            <div class="p-24 gap-y-8 flex flex-col">
                <h1 class="text-blue-300 font-bold text-xl">ACCESORIES</h1>
                <div class="gap-y-2 grid">
                    <p class="text-3xl font-semibold">Bottle Grinder</p>
                    <p class="text-3xl font-semibold">Small, 2-Piece</p>
                </div>
                
                <button class="bg-gray-600 text-white p-4 text-xl w-2/5">SHOP NOW</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import Modal from './Modal.vue';
import Navbar from './Navbar.vue';
import { ref } from 'vue';

const show = ref(false)
const handleEvent1 = () => { show.value = true }
const handleEvent2 = () => { show.value = false }
</script>

<style>
.slide-enter-active, .slide-leave-active {
    transition: transform 0.5s ease-out, opacity 0.5s ease-out;
}
.slide-enter-from, .slide-leave-to {
    transform: translateY(50px);
    opacity: 0;
}
</style>
