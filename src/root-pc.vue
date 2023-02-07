<!-- 根组件 -->
<template>
  <section id="root">
    <router-view v-slot="{ Component, route: { meta = {} } }">
      <nav-menu v-if="!meta.hideMenu"></nav-menu>
      <section
        id="page-container" 
        :style="{height: `calc(100% - ${meta.hideMenu ? 0 : 52}px)`}"
      >
        <!-- 缓存的页面 -->
        <keep-alive v-if="meta.keepAlive !== false">
          <component :is="Component"></component>
        </keep-alive>
        <!-- 不缓存的页面 -->
        <component v-else :is="Component"></component>
      </section>
    </router-view>
  </section>
</template>
<script>
import NavMenu from '@/components/nav-menu.vue'
export default {
  name: 'root',
  mixins: [],
  props: {},
  components: { NavMenu },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {
    // this.$http.imooc.getColumn({
    //   currentPage: 1,
    //   pageSize: 6
    // }).then((res) => {
    //   console.log(res)
    // })
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
#root {
  height: 100%;
  width: 100%;
  #page-container {
    width: 100%;
  }
}
</style>