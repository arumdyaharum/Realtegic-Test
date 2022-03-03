import Vue from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { 
  faBars,
  faMagnifyingGlass,
  faArrowRight,
  faAngleLeft,
  faCartShopping,
  faStar,
  faEllipsisVertical
} from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import router from './router'

/* add icons to the library */
library.add(
  faBars,
  faMagnifyingGlass,
  faArrowRight,
  faAngleLeft,
  faCartShopping,
  faClock,
  faStar,
  faEllipsisVertical
)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
