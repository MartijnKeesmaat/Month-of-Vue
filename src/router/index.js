import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SignIn from '@/components/User/SignIn'
import SignUp from '@/components/User/SignUp'
import Profile from '@/components/User/Profile'
import Movue from '@/components/Movue/Movue'
import AddMovue from '@/components/Movue/addMovue'
import AuthGuard from './AuthGuard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: AuthGuard
    },
    {
      path: '/AddMovue',
      name: 'AddMovue',
      component: AddMovue,
      beforeEnter: AuthGuard
    },
    {
      path: '/Movues/:id',
      name: 'Movue',
      props: true,
      component: Movue
    }
  ],
  mode: 'history'
})
