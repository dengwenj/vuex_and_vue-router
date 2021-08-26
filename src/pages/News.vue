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
}
</script>

<style scoped lang="less"></style>
