import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VueGAPI from 'vue-gapi'

Vue.config.productionTip = false
const apiConfig = {
  apiKey: 'AIzaSyC_IlCvbBpH_pqf9ejw454_p0yrKKtL4d4',
  clientId: '100227490864-hq5ooidf3jmlp168fd2v7lfeik1s3fe9.apps.googleusercontent.com',
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
