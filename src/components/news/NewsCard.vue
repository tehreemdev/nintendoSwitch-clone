<template>
  <div class="flex h-32 p-2 mt-1 bg-white drop-shadow-lg">
    <section>
      <img class="h-20 lg:h-20 md:h-full bg-red-400" src="/images/CardImage.png  " alt="" />
    </section>
    <section class="">
      <p class="font-bold text-sm md:text-lg lg:text-sm">{{ news.title }}</p>
      <p class="text-[12px]">{{ news.date }} | {{ news.category }}</p>
      <p class="text-[14px] mt-4">{{ news.description }}</p>
      <!-- {{ image }} -->
    </section>
  </div>
</template>

<script setup>
const props = defineProps({
  news: { type: Object, default: '' }
})
</script>

<style lang="ts " scoped></style>
