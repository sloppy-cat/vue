<script setup lang="ts">
import {store} from '../global'

function handleOnSubmit(e: Event) {
  const value = e?.target['0']?.value as string
  if (value) {
    store.changeKeyWord(value)
  }
}
</script>

<template>
  <div class="component">
    <h1>Component: {{store.state.keyWord}}</h1>
    <form @submit.prevent="handleOnSubmit">
      <input type="text">
      <button type="submit">sub</button>
    </form>
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
