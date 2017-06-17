import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/Index'
import PrivateTrader from '@/components/trader/PrivateTrader'
import Group from '@/components/group/Group'
import PlayGround from '@/components/playground/PlayGround'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/trader',
      name: 'PrivateTrader',
      component: PrivateTrader
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/playground',
      name: 'PlayGround',
      component: PlayGround
    }
  ]
})
