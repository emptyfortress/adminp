import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store/store.js'
import vuetify from './plugins/vuetify'
import '@/assets/css/support.css'
import '@/assets/css/main.scss'
import VueStickto from 'vue-stickto'
import VueDragDrop from 'vue-drag-drop'
import LiquorTree from 'liquor-tree'
import SvgTransition from 'vue-svg-transition'
import vueAwesomeCountdown from 'vue-awesome-countdown'
import VuePipeline from 'vue-pipeline'
// import { Timeline } from 'vue2vis'
// import 'vue2vis/dist/vue2vis.css'

Vue.use(VueStickto)
Vue.use(VueDragDrop)
Vue.use(LiquorTree)
Vue.use(SvgTransition)
Vue.use(vueAwesomeCountdown, 'vac')
Vue.use(VuePipeline)
Vue.config.productionTip = false

// Vue.component('timeline', Timeline)

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App),
}).$mount('#app')
