import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AdminPage from '../views/AdminPage.vue'
import TitkosPage from '../views/TitkosPage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/admin', component: AdminPage },
    { path: '/titkos', component: TitkosPage }
  ]
})
