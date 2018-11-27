import Vue from 'vue'
import Router from 'vue-router'
import  Login from '@/components/Login'
import Register from '@/components/Register'
import Main from '@/components/Main'
import  Chart from '@/components/Chart'
import List from '@/components/List'
import Information from '@/components/Information'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
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
