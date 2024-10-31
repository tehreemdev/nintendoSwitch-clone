<template>
  <div>
    <Navbar
      :showSideBar="showSideBar"
      @toggle="showSideBar = !showSideBar"
      class="sticky z-10 top-0"
    />

    <section class="flex gap-1">
      <SideBar v-if="showSideBar" />

      <section
        class="flex mt-1 gap-1 example overflow-y-scroll h-[calc(100vh_-_64px)] lg:flex-row md:flex-col"
      >
        <LatestGames />
        <article>
          <LatestNews class="hidden md:block max-md:pl-[100px]" />
        </article>
      </section>
    </section>
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/bar/Navbar.vue'
import SideBar from '../components/bar/sideBar/SideBar.vue'
import LatestGames from '@/components/form/LatestGames.vue'
import LatestNews from '../components/news/LatestNews.vue'

import { ref } from 'vue'
import { onMounted } from 'vue'
const showSideBar = ref(false)
window.addEventListener('resize', (el) => {
  console.log('check size', el)
  if (el?.currentTarget?.innerWidth >= 768) {
    showSideBar.value = true
  }
})
onMounted(() => {
  if (window.innerWidth > 768) {
    showSideBar.value = true
  }
})
</script>

<style scoped>
.example::-webkit-scrollbar {
  display: none;
}
</style>
