<!-- 根组件 -->
<template>
  <section id="root">
    自适应文字
    <van-button type="primary">主要按钮</van-button>
  </section>
</template>
<script>
export default {
  name: 'root',
  mixins: [],
  props: {},
  components: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
#root {
  font-size: 18px;
  color: $primary;
}
</style>