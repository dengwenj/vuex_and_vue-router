// 该文件用于创建 Vuex 中最为核心的 store

import Vue from 'vue'
import Vuex from 'vuex'

// 使用插件
Vue.use(Vuex)

// 准备 actions 对象——响应组件中用户的动作
const actions = {}

// 准备 mutations 对象——操作 state 中的数据
const mutations = {}

// 准备 state 对象——用户存储数据
const state = {}

// 创建 state 并导出 state
export default new Vuex.Store({
  state,
  actions,
  mutations,
})