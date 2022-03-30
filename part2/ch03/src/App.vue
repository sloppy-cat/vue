<template>
  <div id="app">
    <HeaderRouter></HeaderRouter>
    <router-view/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import SimpleComponent from './components/SimpleComponent.vue'
import HeaderRouter from './components/HeaderRouter.vue'
export default {
  name: 'App',
  components: {
    HeaderRouter,
    // SimpleComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
