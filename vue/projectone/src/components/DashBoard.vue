<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const logout = () => {
    localStorage.removeItem('auth')
    router.push('/')
}
</script>
<template>
    <div>
        <div>Welcome to your dashboard</div>
        <p>only logged-in  user can see this page</p>
        <button @click="logout">Logout</button>
    </div>
   
</template>