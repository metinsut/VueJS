import Vue from 'vue'
import App from './App.vue'
import Seker from './Seker.vue'
import Mtn from './Mtn.vue'

//Vue.component("skr",Seker)

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

new Vue({
  el:'#mtn',
  render: h => h(Mtn)
})
