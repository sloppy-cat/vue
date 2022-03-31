<script setup lang="ts">
import { ref } from 'vue'
import { getUser } from '../api/user';

function handleOnClick() {
  getUser("1").then(user => {
    console.log(user)
  })
}

const count = ref(0)
</script>

<template>
  <h1>HelloWorld</h1>
  <button @click="handleOnClick"></button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
