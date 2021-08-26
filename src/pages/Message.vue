<template>
  <div class="">
    <ul>
      <li v-for="item in detail" :key="item.id">
        <!-- 跳转并携带 query 参数，to 的字符串写法 -->
        <!-- <router-link
          :to="`/home/message/detail?id=${item.id}&title=${item.title}`"
          >{{ item.title }}</router-link
        > -->

        <!-- 跳转并携带 query 参数，to 的对象写法 -->
        <!-- <router-link
          :to="{
            //path: '/home/message/detail',
            name: 'detail',
            query: {
              id: item.id,
              title: item.title,
            },
          }"
          >{{ item.title }}</router-link
        > -->

        <!-- 跳转并携带 params 参数，to 的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail/${item.id}/${item.title}`">{{
          item.title
        }}</router-link> -->

        <!-- 跳转并携带 params 参数，to 的对象写法 -->
        <router-link
          :to="{
            name: 'detail',
            params: {
              id: item.id,
              title: item.title,
            },
          }"
          >{{ item.title }}</router-link
        >
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Message',
  components: {},
  props: {},
  data() {
    return {
      detail: [
        {
          id: '001',
          title: '消息001',
        },
        {
          id: '002',
          title: '消息002',
        },
        {
          id: '003',
          title: '消息003',
        },
      ],
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {
    console.log('Message组件被销毁了')
  },
  methods: {},
}
</script>

<style scoped lang="less"></style>
