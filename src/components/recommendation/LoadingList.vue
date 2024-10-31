<template>
  <div class="">
    <article class="grid grid-cols-2 md:grid-cols-3">
      <LoadingCard v-for="game in games" />
    </article>
  </div>
</template>

<script setup>
import LoadingCard from './LoadingCard.vue'

const props = defineProps({
  games: { type: Array, default: [] }
})
</script>

<style lang="ts" scoped></style>
