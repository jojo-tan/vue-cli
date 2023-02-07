import { createApp } from 'vue'
import Root from './root-pc.vue'
import '@/scss/global.scss'
import http from './http/index.js'
import elementUi from './element-ui/index.js'
import router from './router/index.js'

const root = createApp(Root)

root.use(http)
root.use(elementUi)
root.use(router)

root.mount(document.querySelector('#root-mount'))