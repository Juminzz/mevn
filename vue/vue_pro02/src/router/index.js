import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ex_1',
    name: 'ex_1',
    // route level code-splitting
    // this generates a separate chunk (ex.[ha sh].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ex" */ '../views/ex_1.vue')
  },
  {
    path: '/ex_2',
    name: 'ex_2',
    // route level code-splitting
    // this generates a separate chunk (ex.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ex" */ '../views/ex_2.vue')
  },
  {
    path: '/ex_3',
    name: 'ex_3',
    // route level code-splitting
    // this generates a separate chunk (ex.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ex" */ '../views/ex_3.vue')
  },
  {
    path: '/ex_4',
    name: 'ex_4',
    // route level code-splitting
    // this generates a separate chunk (ex.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "ex" , webpackPrefetch:true */ '../views/ex_4.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
