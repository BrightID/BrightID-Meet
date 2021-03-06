import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VueGAPI from 'vue-gapi'

Vue.config.productionTip = false
const apiConfig = {
  apiKey: '<Your api key>',
  clientId: '<your client id>',
  discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
  // see all available scopes here: https://developers.google.com/identity/protocols/googlescopes'
  scope: 'https://www.googleapis.com/auth/calendar.events'
}



Vue.use(VueGAPI, apiConfig)


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

