<template>
  <div>
    <Navbar
      :showSideBar="showSideBar"
      @toggle="showSideBar = !showSideBar"
      class="sticky z-10 top-0"
    />
    <SideBar v-if="showSideBar" />
    <div class="md:pl-[85px] md:pr-1">
      <gadgets />
      <services class="mt-2 bg-red-600 hover:bg-red-400" />
      <services class="mt-2 bg-zinc-300 hover:bg-zinc-200" />
      <Animation class="mt-2" />
      <footers />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gadgets from '@/components/nintendoSwitchGames/gadgets.vue'
import Navbar from '@/components/bar/Navbar.vue'
import SideBar from '@/components/bar/sideBar/SideBar.vue'
import services from '@/components/nintendoSwitchGames/services.vue'
import Animation from '@/components/nintendoSwitchGames/Animation.vue'
import footers from '@/components/bar/footer.vue'

const showSideBar = ref(false)

window.addEventListener('resize', (el) => {
  console.log('check size', el)
  if (el?.currentTarget?.innerWidth >= 768) {
    showSideBar.value = true
  }
})

onMounted(() => {
  if (window.innerWidth >= 768) {
    showSideBar.value = true
  }
})
</script>

<style scoped></style>
