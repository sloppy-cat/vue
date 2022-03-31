<script setup lang="ts">

import useStore from '../piniaStore'
const store = useStore()

function handleOnSubmitPinia(e: any) {
  const value = e.target['0'].value as string
  if (value) {
    store.changeKeyWord(value)
  }
}

</script>

<template>
  <div class="component">
    <h1>Component Pinia: {{store.isLoading ? '로딩중입니다' : store.keyWord}}</h1>
    <form @submit.prevent="handleOnSubmitPinia">
      <input type="text">
      <button type="submit">sub</button>
    </form>
  </div>
</template>

<style scoped>
.component {

  background-color: aquamarine;

}
</style>
