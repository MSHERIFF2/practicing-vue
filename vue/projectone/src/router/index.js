
import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/components/Home.vue'
import DashBoard from '@/components/DashBoard.vue'
import UserProfile from '@/components/UserProfile.vue'
import Login from '@/components/Login.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component:Home
  },
  {
    path: '/user/:id',   
    component:UserProfile,
    alias: '/u/:id',
   
  },
  {
    path: '/profile',
    redirect: '/user/9'
  },
  {
    path: '/dashboard',
    component:DashBoard,
    meta: {requiresAuth: true}
  },
  {
    path: '/login',
    component:Login
    
  },
  
  
]

const router = createRouter({
  history: createWebHistory(),
   routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('auth') === 'true'

  if (to.meta.requiresAuth && !isAuthenticated){
    next('/login')
  }else {
    next()
  }
})
export default router
