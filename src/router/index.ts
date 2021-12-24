import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Members from '../views/Members.vue'
import Sections from '../views/Sections.vue'
import Projects from '../views/Projects.vue'
import Roles from '../views/Roles.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/members',
    name: 'Members',
    component: Members
  },
  {
    path: '/sections',
    name: 'Sections',
    component: Sections
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/roles',
    name: 'Roles',
    component: Roles
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
