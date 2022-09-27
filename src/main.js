import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { initializeApp } from "firebase/app";

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyBrO4U57wDlyHvssEZUD7WFKIKR6LNKLPI",
  authDomain: "deliverypot-3d353.firebaseapp.com",
  projectId: "deliverypot-3d353",
  storageBucket: "deliverypot-3d353.appspot.com",
  messagingSenderId: "548317202641",
  appId: "1:548317202641:web:95d6aa326658a7bbce1df0"
};

initializeApp(firebaseConfig);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
