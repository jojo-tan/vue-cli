import { createRouter, createWebHashHistory } from 'vue-router'
import { menuInfo, noNavMenuInfo, getMenuInfo } from './menu-info.js'

const routes = [
  { path: '/', redirect: '/home' },
  ...getMenuInfo(
    [...menuInfo, ...noNavMenuInfo],
    ['path', 'component', 'meta', 'name']
  )
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

