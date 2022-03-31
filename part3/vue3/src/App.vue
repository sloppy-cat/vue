<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import CompReactive from './components/CompReactive.vue'
import myStore from './myStore'
import useStore from './piniaStore'
import CompPinia from './components/CompPinia.vue'
const store = useStore()

async function handleOnSubmit(e: any) {
  const value = e.target['0'].value as string
  if (value) {
    myStore.changeKeyWord(value)
  }
}

async function handleOnSubmitPinia(e: any) {
  const value = e.target['0'].value as string
  if (value) {
    store.changeKeyWord(value)
  }
}

</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="reactive">
    <CompReactive />
    <h1>App Reactive: {{myStore.state.keyWord}}</h1>
    <form @submit.prevent="handleOnSubmit">
      <input type="text">
      <button type="submit">sub</button>
    </form>
  </div>
  <div class="pinia">
    <CompPinia />
    <h1>App Pinia: {{store.isLoading ? '로딩중입니다' : store.keyWord}}</h1>
    <form @submit.prevent="handleOnSubmitPinia">
      <input type="text">
      <button type="submit">sub</button>
    </form>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.reactive {
  background-color: aliceblue;
}
.pinia {
  background-color: aqua;
}
</style>
