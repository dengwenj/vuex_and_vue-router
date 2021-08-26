// 改文件专门用于创建整个应用的路由器

import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from '../pages/Home'
import About from '../pages/About'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'

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
          children: [{
            path: 'detail/:id/:title',
            name: 'detail',
            component: Detail,

            // props第一种写法，值为对象，这种用的少
            // props: {
            //   a: 1,
            //   b: 2,
            // },

            // props 的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有 params 参数，以 props 的形式传给 Detail 组件
            // props: true,

            // props 的第三种写法，值为函数，返回值必须为对象，函数的参数会接收 $route 这个对象，组件自己的路由信息
            props(route) {
              console.log(route)
              return {
                id: route.params.id,
                title: route.params.title,
              }
            },
          }, ],
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