
import {createRouter, createWebHistory} from 'vue-router'
import ProductView from '@/views/ProductView.vue'
import Main from '@/components/Main.vue'




const routes = [
  {
    path: '/',
    name: 'ProductView',
    component:ProductView 
  },
  {
    path: '/lezada',
    name: 'lazada',
    component: Main
  }
  
]

const router = createRouter({
  history: createWebHistory(),
   routes
})

export default router
