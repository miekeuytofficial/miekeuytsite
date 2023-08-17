import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        layout: 'DefaultLayout',
        inHeaderMenu: true
      }
    }, {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        layout: 'DefaultLayout',
        inHeaderMenu: true
      }
    },
   
    {
      path: '/skills-and-experience',
      name: 'Skills & Experience',
      component: () => import('../views/ExperienceView.vue'),
      meta: {
        layout: 'DefaultLayout',
        inHeaderMenu: true
      }
    },
    {
      path: '/testimonials',
      name: 'Testimonials',
      component: () => import('../views/TestimonialsView.vue'),
      meta: {
        layout: 'DefaultLayout',
        inHeaderMenu: true
      }
    },
   
  ]
})

export default router
