<template>
  <div>
    <article class="md:pl-20">
      <div class="flex items-center p-5 md:p-9 text-black text-2xl md:text-3xl font-bold gap-8">
        <game class="" />
        <h1>GAMES</h1>
      </div>
      <article class="hidden md:block">
        <div class="flex items-center py-[2px] px-10 bg-zinc-200 gap-2 text-zinc-500">
          <HomeIcon class="h-4" />
          <RouterLink to="/nintendo">Home</RouterLink>
          <span class=""> | </span>
          <p>Games</p>
        </div>
      </article>
    </article>
  </div>
</template>

<script setup>
import game from '@/components/svgs/game.vue'
import { HomeIcon } from '@heroicons/vue/24/outline'
</script>

<style lang="ts" scoped></style>
