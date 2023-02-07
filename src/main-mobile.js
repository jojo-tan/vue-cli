import { createApp } from 'vue'
import './utils/rem.js'
import Root from './root-mobile.vue'
// import http from './http/index.js'
// import router from './router/index.js'
import vantUi from './vant-ui/index.js'

const root = createApp(Root)

// root.use(http)
// root.use(router)
root.use(vantUi)

root.mount(document.querySelector('#root-mount'))