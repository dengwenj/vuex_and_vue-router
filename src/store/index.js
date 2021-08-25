// 该文件用于创建 Vuex 中最为核心的 store

import Vue from 'vue'
import Vuex from 'vuex'

// 使用插件
Vue.use(Vuex)

// 准备 actions 对象——响应组件中用户的动作
const actions = {
  jiaOdd(context, value) {
    // context 上下文 ，相当于迷你版的 store
    if (context.state.sum % 2) {
      context.commit('JIA', value)
    }
  },
  jiaWait(context, value) {
    setTimeout(() => {
      context.commit('JIA', value)
    }, 1000)
  },
}

// 准备 mutations 对象——操作 state 中的数据
const mutations = {
  JIA(state, value) {
    state.sum += value
  },
  JIAN(state, value) {
    state.sum -= value
  },
}

// 准备 state 对象——用户存储数据
const state = {
  sum: 0, // 当前求和为
}

// 准备一个 getters 相当于组件中的 computed
const getters = {
  bigSum(state) {
    return state.sum * 10
  },
}

// 创建 state 并导出 state
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
})