<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <louter-link to="/">go to Home</louter-link>
    <louter-link to="/login">go to Login</louter-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
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
