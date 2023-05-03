import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0a7f51a0 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _c362d468 = () => interopDefault(import('../pages/categories/index.vue' /* webpackChunkName: "pages/categories/index" */))
const _4e841f83 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _a997693e = () => interopDefault(import('../pages/categories/_single.vue' /* webpackChunkName: "pages/categories/_single" */))
const _1a7831f5 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _2cee850a = () => interopDefault(import('../pages/_singlePost.vue' /* webpackChunkName: "pages/_singlePost" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _0a7f51a0,
    name: "about"
  }, {
    path: "/categories",
    component: _c362d468,
    name: "categories"
  }, {
    path: "/contact",
    component: _4e841f83,
    name: "contact"
  }, {
    path: "/categories/:single",
    component: _a997693e,
    name: "categories-single"
  }, {
    path: "/",
    component: _1a7831f5,
    name: "index"
  }, {
    path: "/:singlePost",
    component: _2cee850a,
    name: "singlePost"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decodeURIComponent(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
