<template>
  <div class="">
    <section class="bg-white mt-3 rounded-md">
      <div class="flex px-10 pt-5 pb-2">
        <input class="w-full border h-10 md:h-14 shadow-lg" type="text" />
        <search class="bg-zinc-400 p-3 md:p-5" />
      </div>

      <div class="font-bold pt-3 px-5 hidden max-md:block">
        <a class="flex justify-start" href="#" @click="toggle()" v-if="showFilterAndSorting">
          Go Back</a
        >
        <a class="flex justify-end" href="#" @click="toggle()" v-else>Filter and sorting </a>
        <!-- <a href="#" @click="toggle()" v-if="hideGameCrad"></a> -->
      </div>

      <section class="mt-6 border-b text-zinc-400 px-7">
        <button class="mr-3 p-2">All</button>
        <button class="mr-3 p-2">Games</button>
        <button class="mr-3 p-2">amiibo</button>
        <button class="mr-3 p-2">News</button>
        <button class="mr-3 p-2">Support</button>
        <button class="mr-3 p-2">DLC</button>
        <button class="mr-3 p-2">Other</button>
      </section>
      <section class="text-xs text-zinc-400 py-4 px-9 flex items-center justify-between">
        <p>Results: 16318</p>
        <p class="font-semibold">Relevance</p>
      </section>
    </section>
  </div>
</template>

<script setup>
import search from '@/components/svgs/search.vue'

const props = defineProps({
  showFilterAndSorting: { type: Boolean, default: false },
  showAll: { type: Boolean, default: false }
  // hideGameCrad: { type: Boolean, default: false }
})

const emit = defineEmits(['toggle'])

function toggle() {
  emit('toggle')
}
</script>
<style scoped></style>
