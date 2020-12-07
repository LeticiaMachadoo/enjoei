import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import App from './app.vue'
import router from './router'
import store from './store'
import pageTitle from '@/tools/page-title'

Vue.mixin(pageTitle)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
