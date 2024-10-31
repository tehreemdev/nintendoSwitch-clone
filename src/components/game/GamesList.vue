<template>
  <div class="">
    <p v-if="seeMoreGames" class="bg-white p-4 font-bold text-xl mt-3 mb-1">
      {{ title }}
    </p>

    <article class="grid grid-cols-2 md:grid-cols-3">
      <GameCard
        v-for="game in games"
        :game="game"
        :roundedImages="roundedImages"
        :showHeart="showHeart"
      />
    </article>
    <a
      v-if="seeMoreGames"
      class="bg-white flex justify-end items-center p-3 font-bold mt-[2px] pr-10"
      href="#"
    >
      {{ seeMoreGames }}
    </a>
  </div>
</template>

<script setup>
import GameCard from './GameCard.vue'

const props = defineProps({
  title: { type: String, default: '' },
  games: { type: Array, default: [] },
  seeMoreGames: { type: String, default: '' },
  roundedImages: { type: Boolean, default: false },
  showHeart: { type: Boolean, default: false }
})
</script>

<style lang="ts" scoped></style>
