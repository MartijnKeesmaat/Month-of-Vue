import Vue from 'vue'
import Router from 'vue-router'
import Movues from '@/components/Movues'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Movues',
      component: Movues
    }
  ]
})
