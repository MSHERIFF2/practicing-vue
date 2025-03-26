<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const login = () => {
    
       localStorage.setItem('auth', 'true')
      
      if (localStorage.getItem('auth') === 'true') {
        router.push('/dashboard')
      }else {
        alert("You need to be authenticated")
        localStorage.removeItem('auth')
        router.push('/')
      }
   
}
</script>
<template>
    <div>
        <div>This is login page</div>
        <div class="flex gap-x-16">
            <button @click="login">login</button>
            <router-link to="/">Go Back Home</router-link>
        </div>
       
        
    </div>
    
</template>