import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import acceille from '../views/acceille.vue'
import qui from '../views/qui.vue'
import projet from '../views/projet.vue'
import phone from '../views/phone.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/',
      name: 'acceille',
      component: acceille//() => import('../views/acceille.vue') 
    },
    {
      path: '/',
      name: 'qui',
      component:qui// () => import('../views/qui.vue')  
    },
    {
      path: '/',
      name: 'projet',
      component: projet// () => import('../views/projet.vue')  
    },
    {
      path: '/',
      name: 'phone',
      component:phone// () => import('../views/phone.vue')  
    }
  ]
})

export default router
