import Vue from 'vue'
import VueRouter from 'vue-router'
import Menu from '../components/Menu'
import PotHomeScreen from '../components/PotHomeScreen'
import PotSignup from '../components/PotSignup'
import PotInfo from '../components/PotInfo'
import PotLogin from '../components/PotLogin'

Vue.use(VueRouter)

const routes = [
  {path : '/info', component: PotInfo },
  {path : '/menu', component: Menu },
  {path : '/pothomescreen', component : PotHomeScreen},
  {path : '/signup', component :  PotSignup},
  {path : '/login', component :  PotLogin},
  {path : '/', component :  PotInfo},
  {path : '*', component : PotInfo},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
