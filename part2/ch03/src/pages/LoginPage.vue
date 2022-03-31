<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      login: <input v-model="login" type="text" />
      password: <input v-model="password" type="password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      alert(`Login as ${this.login}`, `Password is ${this.password}`)
      // this.$http.post('/login', {
      //   login: this.login,
      //   password: this.password
      // }).then(response => {
      //   console.log(response)
      // })
    }
  }
}
</script>
<style lang="">

</style>
