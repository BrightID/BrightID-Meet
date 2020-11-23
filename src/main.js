import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VueGAPI from 'vue-gapi'

Vue.config.productionTip = false
const apiConfig = {
    // use https://developers.google.com/calendar/quickstart/js
    apiKey: '', // set your api key
    clientId: '', // set your client id
    discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
    // see all available scopes here: https://developers.google.com/identity/protocols/googlescopes'
    scope: 'https://www.googleapis.com/auth/calendar.events'
}



new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueGAPI, apiConfig)
