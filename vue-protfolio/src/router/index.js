import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Profile from '@/components/Profile'
import Portfolios from '@/components/Portfolios'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/portfolios',
      name: 'Portfolios',
      component: Portfolios
    }
  ]
})
