import { createRouter, createWebHistory, RouterView } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Tr from "@/i18n/translations" ;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:locale?",
      component: RouterView,
      beforeEnter: Tr.routeMiddleware,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
      ]
    }
  ]
})

export default router
