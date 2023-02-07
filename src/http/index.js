import imooc from './imooc/index.js'

const http = {
  install: (root) => {
    root.config.globalProperties.$http = window.$http = { imooc }
  }
}

export default http