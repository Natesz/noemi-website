import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AdminPage from '../views/AdminPage.vue'
import TitkosPage from '../views/TitkosPage.vue'
import ImpresszumPage from '../views/ImpresszumPage.vue'
import AdatkezelesPage from '../views/AdatkezelesPage.vue'
import AszfPage from '../views/AszfPage.vue'
import SutiPage from '../views/SutiPage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/admin', component: AdminPage },
    { path: '/titkos', component: TitkosPage },
    { path: '/impresszum', component: ImpresszumPage },
    { path: '/adatkezelesi-tajekoztato', component: AdatkezelesPage },
    { path: '/aszf', component: AszfPage },
    { path: '/suti', component: SutiPage },
  ],
  scrollBehavior(to, from, savedPosition) {
    // A fejléc fix, ezért a horgonyoknál felső eltolás kell.
    if (to.hash) {
      return { el: to.hash, top: 80, behavior: 'smooth' }
    }
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})
