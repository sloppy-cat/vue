<script setup lang="ts">
import myStore from '../myStore'

function handleOnSubmit(e: any) {
  const value = e.target['0']?.value as string
  if (value) {
    myStore.changeKeyWord(value)
  }
}

function isPosibleSecond() {
  console.log(myStore.isInitial())
  console.log(myStore.isMainInitial())
}
</script>

<template>
  <div class="component">
    <h1>Component Reactive: {{myStore.state.keyWord}}</h1>
    <form @submit.prevent="handleOnSubmit">
      <input type="text">
      <button type="submit">sub</button>
    </form>
    <button @click="isPosibleSecond">이중저장소 가능?</button>
  </div>
</template>

<style scoped>
.component {

  background-color: antiquewhite;

}
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
