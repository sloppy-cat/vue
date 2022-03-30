import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import MainPage from './pages/MainPage.vue'
import LoginPage from './pages/LoginPage.vue'
import ProfilePage from './pages/ProfilePage.vue'

Vue.config.productionTip = false


Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { path: '/', component: MainPage },
    { path: '/login', component: LoginPage },
    { path: '/profile', component: ProfilePage }
  ]
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
