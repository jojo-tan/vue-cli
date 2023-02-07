<!-- 首页 -->
<template>
  <section id="home">
    home
    <img src="img/模拟养成.png" />
    <img src="./模拟养成.png" />
    <img :src="imgSrc" />
  </section>
</template>
<script>
export default {
  name: 'home',
  mixins: [],
  props: {},
  components: {},
  data() {
    return {
      imgSrc: './img/模拟养成.png'
    }
  },
  computed: {},
  watch: {},
  created() {},
  activated() {
    console.log('home activated')
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
#home {
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 250px;
}
</style>