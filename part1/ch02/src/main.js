import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import LoginPage from './pages/LoginPage.vue'
import HelloWorld from './components/HelloWorld.vue'

Vue.config.productionTip = false



const routes = [
  { path: '/', component: HelloWorld },
  { path: '/login', component: LoginPage }
]

const router = new VueRouter({
  routes
})
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
