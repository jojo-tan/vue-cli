<!-- 导航菜单 -->
<template>
  <section class="nav-menu">
    <section class="menu-flex">
      <section class="menu-logo">之乎者也</section>
      <section class="menu-list">
        <section 
          class="menu-item"
          v-for="item in menuList"
          :key="item.key"
          :class="{'active': item.key === selectKey}"
          @click="selectMenu(item)"
        >
          {{ item.title }}
        </section>
      </section>
      <section class="menu-button">
        <el-button type="primary" @click="login">登录</el-button>
        <el-button>注册</el-button>
      </section>
    </section>
  </section>
</template>
<script>
import { menuInfo, getMenuInfo } from '@/router/menu-info.js'
export default {
  name: 'login',
  mixins: [],
  props: {},
  components: {},
  data() {
    return {
      selectKey: 'home',
      menuList: getMenuInfo(menuInfo, ['key', 'title', 'path'])
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    /** @descrption 选择菜单 */
    selectMenu({ key, path = '/' }) {
      this.selectKey = key
      this.$router.push({ path })
    },
    /** @descrption 登录 */
    login() {
      this.$router.push({ path: '/login' })
    }
  }
}
</script>
<style lang="scss" scoped>
.nav-menu {
  color: $primary-text;
  height: 52px;
  border-bottom: $boder-style-lighter;
  .menu-flex {
    height: 100%;
    width: 1000px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    .menu-logo {
      line-height: 24px;
      font-size: 24px;
      font-weight: bold;
      color: $primary;
    }
    .menu-list {
      flex: 1;
      padding: 0 48px;
      display: flex;
      .menu-item {
        line-height: 50px;
        cursor: pointer;
        &:hover {
          color: $primary;
        }
        &.active {
          color: $primary;
          border-bottom: 2px solid $primary;
          font-weight: bold;
        }
        &:not(:last-of-type) {
          margin-right: 36px;
        }
      }
    }
  }
}
</style>