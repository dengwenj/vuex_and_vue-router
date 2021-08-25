<template>
  <div class="">
    <h2>当前求和为：{{ sum }}</h2>
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
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      n: 1,
      sum: 0, // 当前求和为
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    console.log(this)
  },
  beforeDestroy() {},
  methods: {
    increment() {
      this.sum += this.n
    },
    decrement() {
      this.sum -= this.n
    },
    incrementOdd() {
      if (this.sum % 2) {
        this.sum += this.n
      }
    },
    incrementWait() {
      setTimeout(() => {
        this.sum += this.n
      }, 1000)
    },
  },
}
</script>

<style scoped lang="css">
button {
  margin-left: 5px;
}
</style>
