import { createApp } from 'vue'
import { Empty } from 'ant-design-vue'

import App from './App.vue'

const app = createApp(App).use(Empty)

app.mount('#app')