<template>
  <div class="bg-red-600 flex items-center justify-between h-16 pr-12 pl-6">
    <article class="flex items-center">
      <div class="hidden max-md:block">
        <XMarkIcon @click="toggle()" v-if="showSideBar" class="size-7 text-white" />
        <Bars3Icon @click="toggle()" v-else class="size-7 text-white" />
      </div>

      <nintendo />
    </article>

    <article class="flex gap-2 lg:gap-6 md:gap-6 sm:gap-5 text-md lg:text-2xl">
      <div class="flex flex-col items-center text-white">
        <router-link to="/nintendo/search">
          <search />
        </router-link>
        <p class="text-sm">Search</p>
      </div>

      <div class="flex flex-col items-center text-white">
        <wishlist />
        <p class="text-sm">Wish List</p>
      </div>

      <div class="flex flex-col items-center text-white">
        <signin />
        <p class="text-sm">Sign In</p>
      </div>
    </article>
  </div>
</template>

<script setup>
const props = defineProps({
  showSideBar: { type: Boolean, default: false }
})

const emit = defineEmits(['toggle'])

function toggle() {
  emit('toggle')
}

import search from '../svgs/search.vue'
import wishlist from '../svgs/wishlist.vue'
import signin from '../svgs/signin.vue'
import nintendo from '../svgs/nintendo.vue'
import { Bars3Icon } from '@heroicons/vue/24/solid'
import { XMarkIcon } from '@heroicons/vue/24/solid'
</script>

<!-- <style lang="ts" scoped></style> -->
