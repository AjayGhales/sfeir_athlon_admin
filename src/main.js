// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import DateFilter from './filters/date'
import EventSorter from './filters/sort-event'
import vuetify from './plugins/vuetify'
Vue.filter('date', DateFilter)
Vue.filter('sortEvent', EventSorter)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  vuetify,
  components: { App }
})
