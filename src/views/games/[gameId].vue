<template>
  <div>abcdef {{ gameId }}</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const gameId = computed(() => {
  return route.params.gameId
})
</script>

<style scoped></style>
