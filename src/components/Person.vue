<template>
  <div class="">
    <input type="text" v-model="name" />&nbsp;
    <button @click="add">添加一个人</button>
    <ul>
      <li v-for="item in person" :key="item.name">{{ item.name }}</li>
    </ul>
    <h3>Count组件求和为：{{ sum }}</h3>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
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
    ...mapState(['person', 'sum']),
  },
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    add() {
      const addObj = { name: this.name }
      this.$store.commit('ADD_PERSON', addObj)
      this.name = ''
    },
    // ...mapMutations(),
  },
}
</script>

<style scoped lang="less"></style>
