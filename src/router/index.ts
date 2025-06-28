import { createRouter, createWebHistory } from 'vue-router'
// import Login from '../views/loginsite.vue'
import Login from '../views/loginsite.vue'
import signupSite from '../views/signupSite.vue'
import nintendo from '../views/nintendo.vue'
import games from '@/views/games/index.vue'
import gameDetails from '@/views/games/[gameId].vue'
import search from '@/views/games/search.vue'
import nintendoSwitchFamily from '@/views/hardware/nintendoSwitchFamily.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },

    {
      path: '/signup',
      name: 'signupSite',
      component: signupSite
    },

    {
      path: '/nintendo',
      name: 'Nintendo',
      component: nintendo
    },
    {
      path: '/nintendo/games',
      name: 'games',
      component: games
    },
    {
      path: '/nintendo/games/:gameId',
      name: 'gameDetail',
      component: gameDetails
    },
    {
      path: '/nintendo/search',
      name: 'search',
      component: search
    },
    {
      path: '/hardware/Nintendo-Switch-Family',
      name: 'nintendoSwitchFamily',
      component: nintendoSwitchFamily
    }
  ]
})

export default router
