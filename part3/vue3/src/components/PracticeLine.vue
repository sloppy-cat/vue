<script setup lang="ts">

import { ref } from 'vue';
import { Comment_ } from '../api/comments'

const {...props} = defineProps<{
  comment: Comment_
}>()
const isClicked = ref(false)
function handleOnClick() {
  isClicked.value = !isClicked.value
}
</script>

<template>
  <div @click="handleOnClick" >
    <p>name : {{comment.name}}</p>
    <div v-if="isClicked">
      <p>email : {{comment.email}}</p>
      <p>body : {{comment.body}}</p>
    </div>
  <hr>
  </div>
</template>

<style scoped>
</style>
