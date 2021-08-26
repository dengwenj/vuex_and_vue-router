// 改文件专门用于创建整个应用的路由器

import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from '../pages/Home'
import About from '../pages/About'
import Message from '../pages/Message'
import News from '../pages/News'

// 使用插件
Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
      path: '/home',
      component: Home,
      children: [{
          path: 'news',
          component: News,
        },
        {
          path: 'Message',
          component: Message,
        },
      ],
    },
    {
      path: '/about',
      component: About,
    },
  ],
})

/* 
  注意点
     1 路由组件通常存放在 pages 文件夹，一般组件通常存放在 components 文件夹
     2 通过切换，隐藏了的路由组件，默认是被销毁掉的，需要的时候在去挂载
     3 每个组件都有自己的 $route 属性，里面存放着自己的路由信息
     4 整个应用只有一个 router，可以通过组件的 $router 属性获取到
*/