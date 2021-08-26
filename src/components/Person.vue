<template>
  <div class="">
    <input type="text" v-model="name" />&nbsp;
    <button @click="add">添加一个人</button>
    <button @click="addNameDeng">点击添加一个姓邓的人</button>
    <h3>第一个人的名字是:{{ firstName }}</h3>
    <ul>
      <li v-for="item in person" :key="item.name">{{ item.name }}</li>
    </ul>
    <h3>Count组件求和为：{{ sum }}</h3>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  name: 'Person',
  components: {},
  props: {},
  data() {
    return {
      name: '',
    }
  },
  computed: {
    // ...mapState('countOptions', ['sum']),
    // ...mapState('personOptions', ['person']),
    sum() {
      return this.$store.state.countOptions.sum
    },
    person() {
      return this.$store.state.personOptions.person
    },
    firstName() {
      return this.$store.getters['personOptions/firstName']
    },
  },
  watch: {},
  created() {},
  mounted() {
    console.log(this)
  },
  beforeDestroy() {},
  methods: {
    add() {
      const addObj = { name: this.name }
      this.$store.commit('personOptions/ADD_PERSON', addObj)
      this.name = ''
    },
    // ...mapMutations(),

    addNameDeng() {
      const obj = { name: this.name }
      this.$store.dispatch('personOptions/addNameDeng', obj)
      this.name = ''
    },
  },
}
</script>

<style scoped lang="less"></style>
