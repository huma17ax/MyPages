import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AboutMe from '@/components/AboutMe'
import Activity from '@/components/Activity'
import Product from '@/components/Product'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/AboutMe',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/Activity',
      name: 'Activity',
      component: Activity
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
