<template>
    <div>
        <div>
            <button @click="toggleDisplay" class=" mx-5 my-5 w-32 bg-green-400 text-white">{{ data.display ? 'List' :
                'Grid'}}</button>

        </div>
        <div v-if="data.display">
            <product-list-one />

        </div>

        <div v-else>
            <product-list-two />
        </div>
        <div>
        {{ Parent }}
    </div>
    </div>
   
</template>
<script setup>
import ProductListOne from '@/components/ProductListOne.vue'
import ProductListTwo from '@/components/ProductListTwo.vue'
import Parent from '@/components/Parent.vue'

    const data = ref({
        display: true
    })       
        
   const toggleDisplay = () => {
            data.display.value = !data.display.value
        }

</script>