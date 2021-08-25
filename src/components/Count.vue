<template>
  <div class="">
    <h2>当前求和为：{{ sum }}</h2>
    <h3>当前求和放大10倍为：{{ bigSum }}</h3>
    <h3>我在{{ address }}，读的{{ school }}</h3>
    <h3>Person组件的人为：{{ person.length }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等在加</button>
    <hr />
    <Person></Person>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import Person from './Person'

export default {
  name: '',
  components: {
    Person,
  },
  props: {},
  data() {
    return {
      n: 1,
    }
  },
  computed: {
    // mapState, mapGetters 返回值是对象
    // ...mapState({ sum: 'sum', school: 'school', address: 'address' }), // 对像写法
    ...mapState(['sum', 'school', 'address', 'person']), // 数组写法 这样写了就可以不用 写 this.$store.state.sum ......

    // ...mapGetters({ bigSum: 'bigSum' }), // 对象写法
    ...mapGetters(['bigSum']), // 数组写法  这样写了就可以不用 写 this.$store.getters.bigSum ......
  },
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    // increment() {
    //   this.$store.commit('JIA', this.n)
    // },
    // decrement() {
    //   this.$store.commit('JIAN', this.n)
    // },

    // 简写形式
    ...mapMutations({ increment: 'JIA', decrement: 'JIAN' }), // 对象写法
    // ...mapMutations(['JIA', 'JIAN']), // 数组写法 就是方法名要和 commit 提交的名字一样

    // incrementOdd() {
    //   this.$store.dispatch('jiaOdd', this.n)
    // },
    // incrementWait() {
    //   this.$store.dispatch('jiaWait', this.n)
    // },

    // 简写形式
    ...mapActions({ incrementOdd: 'jiaOdd', incrementWait: 'jiaWait' }), // 对象写法
    // ...mapActions(['jiaOdd', 'jiaWait']), // 数组写法
  },
}
</script>

<style scoped lang="css">
button {
  margin-left: 5px;
}
</style>
