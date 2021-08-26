// 人员相关的配置
const personOptions = {
  namespaced: true,
  actions: {
    addNameDeng(context, value) {
      if (value.name.indexOf('邓') === 0) {
        context.commit('ADD_PERSON', value)
      } else {
        alert('请添加一个姓邓的人')
      }
    },
  },
  mutations: {
    ADD_PERSON(state, value) {
      state.person.unshift(value)
    },
  },
  state: {
    person: [{ name: '张三' }],
  },
  getters: {
    firstName(state) {
      return state.person[0].name
    },
  },
}

export default personOptions