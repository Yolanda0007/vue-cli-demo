import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/test',
  name: 'home',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import ("./views/home/index"),
      meta: {
        title: '主页'
      }
    },{
      path: '/form',
      name: 'form',
      component: () => import ("./views/form/index"),
      meta: {
        title: 'form'
      }
    },{
      path: '/scroll',
      name: 'scroll',
      component: () => import ("./views/scroll/index"),
      meta: {
        title: 'scroll'
      }
    },{
      path: '/ball',
      name: 'ball',
      component: () => import ("./views/ball/index"),
      meta: {
        title: 'ball'
      }
    }
  ]
})

router.afterEach((from,to) => {
  const title = to.meta.title
  if (title) {
    document.title = title
    window.kwapp.setTitle(title)
  }
})

export default router