import './assets/main.scss'
import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faChevronRight, faChevronDown, faArrowRight,faExpand } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
library.add(faBars, faChevronRight, faChevronDown, faArrowRight,faExpand)
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(createPinia())
app.mount('#app')
