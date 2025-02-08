<template>
    <div>
        <div>
            <button @click="toggleDisplay" class=" mx-5 my-5 w-32 bg-green-400 text-white">{{ display ? 'List' :
                'Grid'}}</button>

        </div>
        <div v-if="display">
            <product-list-one />

        </div>

        <div v-else>
            <product-list-two />
        </div>

    </div>
</template>
<script>
import ProductListOne from '@/components/ProductListOne.vue'
import ProductListTwo from '@/components/ProductListTwo.vue'
export default {
    components: { 'product-list-one': ProductListOne, 'product-list-two': ProductListTwo },
    data() {
        return {
            display: true
        }
    },
    methods: {
        toggleDisplay() {
            this.display = !this.display
        }
    }
}
</script>