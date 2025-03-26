<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
const userId = route.params.id
</script>
<template>
    <div>
        <div>This is userProfile page</div>
        <p>Your user id is -> {{  userId }}</p>
        <router-link to="/">Home</router-link>
    </div>
   
</template>