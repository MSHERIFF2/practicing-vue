<template>
    <div>
        <h2> Product in List View </h2>
        <ul class="flex flex-col gap-4">
            <li v-for="product in products" :key="product.id" class="flex justify-between gap-y-4 bg-gray-500 text-white p-3">
                <span>{{ product.id }}</span>
                <span>{{ product.name }}</span>
                <span>${{ product.price }}</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    computed: {
        products(){
            return this.$store.state.products
        }
    }
    
}
</script>
