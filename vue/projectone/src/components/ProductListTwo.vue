<template>
    <div>
        <h2> This is product list Two </h2>
        <ul>
            <li v-for="product in products" :key="product.id" class="flex justify-between">
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