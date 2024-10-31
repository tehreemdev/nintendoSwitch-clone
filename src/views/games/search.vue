<template>
  <div class="bg-zinc-100">
    <Navbar
      :showSideBar="showSideBar"
      @toggle="showSideBar = !showSideBar"
      class="sticky z-10 top-0"
    />
    <SideBar v-if="showSideBar" />
    <article class="body pl-2 md:pl-[86px] md:w-[69%]">
      <SearchHeader
        :showFilterAndSorting="showFilterAndSorting"
        @toggle="showFilterAndSorting = !showFilterAndSorting"
      />

      <article class="flex bg-white mt-2">
        <FilterPanel class="h-full w-full md:w-44" v-if="showFilterAndSorting" />
        <ResultList class="bg-white" v-if="!showFilterAndSorting || isLargeScreen" />
      </article>
      <footers />
    </article>
  </div>
</template>

<script setup>
import Navbar from '@/components/bar/Navbar.vue'
import SideBar from '@/components/bar/sideBar/SideBar.vue'
import FilterPanel from '@/components/nintendoSwitchGames/FilterPanel.vue'
import SearchHeader from '@/components/nintendoSwitchGames/SearchHeader.vue'
import ResultList from '@/components/nintendoSwitchGames/ResultList.vue'

import footers from '@/components/bar/footer.vue'

import { onMounted } from 'vue'
import { ref } from 'vue'
const showSideBar = ref(false)
const showFilterAndSorting = ref(false)
const isLargeScreen = ref(false)
window.addEventListener('resize', (el) => {
  console.log('check size', el)
  if (el?.currentTarget?.innerWidth >= 768) {
    showSideBar.value = true
  }
  if (el?.currentTarget?.innerWidth >= 768) {
    showFilterAndSorting.value = true
  }
  if (el?.currentTarget?.innerWidth >= 768) {
    isLargeScreen.value = true
  }
})

onMounted(() => {
  if (window.innerWidth >= 768) {
    showSideBar.value = true
  }
  if (window.innerWidth >= 768) {
    showFilterAndSorting.value = true
  }
  if (window.innerWidth >= 768) {
    isLargeScreen.value = true
  }
})
</script>

<style scoped>
@media screen and (max-width: 959px) {
  .body {
    width: 100%;
  }
}
</style>
