import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/components/TodoList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/all',
      name: 'all',
      alias: '/',
      component: TodoList
    },
    {
      path: '/active',
      name: 'active',
      component: TodoList
    },
    {
      path: '/completed',
      name: 'completed',
      component: TodoList
    },
    {path:'*',redirect:'/'}
  ]
})
