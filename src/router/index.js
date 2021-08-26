// 改文件专门用于创建整个应用的路由器

import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from '../components/Home'
import About from '../components/About'

// 使用插件
Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
      path: '/home',
      component: Home,
    },
    {
      path: '/about',
      component: About,
    },
  ],
})