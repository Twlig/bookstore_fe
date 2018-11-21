import Vue from 'vue'
import Router from 'vue-router'
import  Login from '@/components/Login'
import Register from '@/components/Register'
import User from '@/components/User'
import Main from '@/components/Main'
import  Chart from '@/components/Chart'
import List from '@/components/List'
import Information from '@/components/Information'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/chart',
      name: 'Chart',
      component: Chart
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/information',
      name: 'Information',
      component: Information
    }
  ]
})
