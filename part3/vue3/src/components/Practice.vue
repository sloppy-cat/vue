<script setup lang="ts">
import { ref } from 'vue';
import {getComments, Comment_} from '../api/comments'
import PracticeLine from './PracticeLine.vue';
const comments = ref<Comment_[]>([])
async function handleOnclickButton() {
  getComments().then(res => {
    comments.value = res
  })
}

</script>
<template lang="">
  <div class="practice">
    <PracticeLine v-for="comment in comments" :comment="comment" :key="comment.id" />
    <button @click="handleOnclickButton" >실습</button>
  </div>
</template>
<style scoped>
.practice {
  margin-top: 100px;
}
</style>
