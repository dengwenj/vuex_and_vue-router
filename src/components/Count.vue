<template>
  <div class="">
    <h2>当前求和为：{{ sum }}</h2>
    <h3>当前求和放大10倍为：{{ bigSum }}</h3>
    <h3>我在{{ address }}，读的{{ school }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等在加</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      n: 1,
    }
  },
  computed: {
    // ...mapState({ sum: 'sum', school: 'school', address: 'address' }), // 对像写法
    ...mapState(['sum', 'school', 'address']), // 数组写法 这样写了就可以不用 写 this.$store.state.sum ......

    // ...mapGetters({ bigSum: 'bigSum' }), // 对象写法
    ...mapGetters(['bigSum']), // 数组写法  这样写了就可以不用 写 this.$store.getters.bigSum ......
  },
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    increment() {
      this.$store.commit('JIA', this.n)
    },
    decrement() {
      this.$store.commit('JIAN', this.n)
    },
    incrementOdd() {
      this.$store.dispatch('jiaOdd', this.n)
    },
    incrementWait() {
      this.$store.dispatch('jiaWait', this.n)
    },
  },
}
</script>

<style scoped lang="css">
button {
  margin-left: 5px;
}
</style>
