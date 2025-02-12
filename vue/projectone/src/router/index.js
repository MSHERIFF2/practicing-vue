
import {createRouter, createWebHistory} from 'vue-router'
import ProductView from '@/views/ProductView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ProductView',
    component:ProductView 
  },
  
]

const router = createRouter({
  'history': createWebHistory(import.meta.env.BASE_URL),
   routes
})

export default router
