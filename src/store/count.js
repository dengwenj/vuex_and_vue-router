// 求和相关的配置
const countOptions = {
  namespaced: true,
  actions: {
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
  },
  mutations: {
    JIA(state, value) {
      state.sum += value
    },
    JIAN(state, value) {
      state.sum -= value
    },
  },
  state: {
    sum: 0, // 当前求和为
    school: '开州中学',
    address: '重庆',
  },
  getters: {
    bigSum(state) {
      return state.sum * 10
    },
  },
}

export default countOptions