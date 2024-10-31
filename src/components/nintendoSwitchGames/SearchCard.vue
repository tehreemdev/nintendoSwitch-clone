<template>
  <div class="py-4">
    <article class="bg-white cursor-pointer flex items-center pl-2 box-border">
      <section class="">
        <img class="h-20 w-20 object-cover rounded-md" :src="`/images/${result.image}`" />
      </section>

      <section class="pl-2">
        <h1 class="text-md font-bold mt-2">
          {{ result.title }}
        </h1>
        <div class="flex text-xs gap-1">
          <label>{{ result.category }}</label>

          <span>{{ result.date }}</span>
        </div>
        <label class="text-xs font-bold">{{ result.price }}</label>

        <p class="text-sm hidden md:block">{{ result.description }}</p>
      </section>
    </article>
  </div>
</template>

<script setup>
const props = defineProps({
  result: { type: Object, default: null }
})
</script>
