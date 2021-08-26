<template>
  <div>
    <ul>
      <li>news001 <input type="text" /></li>
      <li>news002 <input type="text" /></li>
      <li>news003 <input type="text" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'News',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {
    console.log('news组件没有被销毁了')
  },
  methods: {},
  // 通过路由规则，进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    // ...
  },
  // 通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    // ...
  },
}
</script>

<style scoped lang="less"></style>
