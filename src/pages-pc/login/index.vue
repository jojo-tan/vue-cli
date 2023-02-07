<!-- 登录页 -->
<template>
  <section id="login">
    <el-button @click="$router.go(-1)">返回</el-button>
  </section>
</template>
<script>
export default {
  name: 'login',
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
#login {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>