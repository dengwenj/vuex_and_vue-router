<template>
  <div>
    <!-- <h3>{{ $route.query.id }}</h3>
    <h3>{{ $route.query.title }}</h3> -->
    <!-- <h3>{{ $route.params.id }}</h3>
    <h3>{{ $route.params.title }}</h3> -->
    <h3>{{ id }}</h3>
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    id: {
      default: '',
    },
    title: {
      default: '',
    },
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    console.log(this)
  },
  beforeDestroy() {},
  methods: {},
}
</script>

<style scoped lang="less"></style>
