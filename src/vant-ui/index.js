import 'vant/lib/index.css'
import { Button } from 'vant'

const vantUi = {
  install: (root) => {
    root.use(Button)
  }
}

export default vantUi