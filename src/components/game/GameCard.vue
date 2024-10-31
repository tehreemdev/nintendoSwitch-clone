<template>
  <div class="p-[2px]">
    <article class="bg-white md:p-2 cursor-pointer">
      <img
        class="w-full h-36 sm:h-72 md:h-44 object-cover"
        :class="roundedImages ? 'rounded-sm' : ''"
        :src="`/images/${game.image}`"
      />
      <h1 class="text-lg font-bold mt-2">
        {{ game.title }}
      </h1>
      <p class="text-sm">{{ game.category }}</p>
      <span class="font-bold">{{ game.price }}</span>
      <p class="text-[16px] text-zinc-500 hidden md:block">{{ game.description }}</p>
      <atricle class="flex justify-end mt-14">
        <div :class="showHeart ? 'bg-zinc-200 p-2' : ''">
          <HeartIcon v-if="showHeart" class="h-4" />
        </div>
      </atricle>
    </article>
  </div>
</template>

<script setup>
import { HeartIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  game: { type: String, default: '' },
  roundedImages: { type: Boolean, default: false },
  seeMoreGames: { type: String, default: '' },
  showHeart: { type: Boolean, default: '' }
})
</script>

<style lang="ts" scoped></style>
