import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as firebase from 'firebase'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
  created(){
    firebase.initializeApp({
      apiKey: 'AIzaSyAUuoQCRJf5PgsaLH9hJ_h7Twfo0rnc4IM',
      authDomain: 'almacen-vue.firebaseapp.com',
      databaseURL: 'https://almacen-vue.firebaseio.com',
      projectId: 'almacen-vue',
      storageBucket: 'almacen-vue.appspot.com'
    })
  }
}).$mount('#app')
