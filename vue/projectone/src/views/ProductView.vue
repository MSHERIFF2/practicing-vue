<template>
    <div>
        <transition name="fade">
            <div v-if="show" class="p-32 bg-blue-300 text-center text-white transform">
                <p class="text-xl">WELCOME TO LEZADA CLONE CLICK <span class="text-xl text-blue-900">
                        <router-link to="/lezada">HERE...</router-link>
                    </span> TO GET START</p>
            </div>
        </transition>


    </div>

</template>
<script setup>
import {ref, onMounted} from 'vue'

const show = ref(false)
onMounted(()=>{
    show.value=true
})
</script>
<style scoped>

.fade-enter-active, .fade-leave-active {
    transition: transform 0.5s ease-out, opacity 0.5s ease-out;
}
.fade-enter-from, .fade-leave-to {
    transform: translateY(50px);
    opacity: 0;
}
</style>