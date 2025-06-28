<template>
  <div class="fixed left-0 h-full lg:w-20 bg-slate-50 md:bg-red-800">
    <article
      class="flex flex-wrap lg:flex-col md:flex-col p-4 sm:p-4 gap-3 sm:gap-3 md:gap-0 md:p-0"
    >
      <div
        class="bg-red-600 list-none hover:bg-red-700 h-32 sm:h-32 md:h-20 lg:h-20 mt-[0.5px] w-20 rounded-tr-xl flex items-center justify-center flex-col"
      >
        <router-link to="/nintendo" class="text-white"> <games />Games</router-link>
        <!-- <div class="pl-24">
          <li class="relative">
            <ul class="absolute bg-white px-6 py-5">
              <li>
                Nintendo Games
              </li>
            </ul>
          </li>
        </div> -->

        <!-- <p class="text-white text-xs">Games</p> -->
      </div>

      <div
        class="bg-red-600 hover:bg-red-700 h-32 sm:h-32 md:h-20 lg:h-20 w-20 mt-[0.5px] rounded-tr-xl flex items-center justify-center flex-col"
      >
        <hardware />
        <p class="text-white text-xs">Hardware</p>
      </div>

      <div
        class="bg-red-600 hover:bg-red-700 h-32 sm:h-32 md:h-20 lg:h-20 w-20 mt-[0.5px] rounded-tr-xl flex items-center justify-center flex-col"
      >
        <switchonline />
        <p class="text-white text-xs text-center">Nintendo switch online</p>
      </div>
      <div
        class="bg-red-600 hover:bg-red-700 h-32 sm:h-32 md:h-20 lg:h-20 w-20 mt-[0.5px] rounded-tr-xl flex items-center justify-center flex-col"
      >
        <stayintouch />
        <p class="text-white text-xs">Stay in touch</p>
      </div>
      <span
        class="bg-red-600 hover:bg-red-700 h-32 sm:h-32 md:h-20 lg:h-20 w-20 mt-[0.5px] rounded-tr-xl flex items-center justify-center font-extrabold text-white"
        >...</span
      >
    </article>
  </div>
</template>

<script setup lang="ts">
import games from '../../svgs/games.vue'
import hardware from '../../svgs/hardware.vue'
import stayintouch from '../../svgs/stayintouch.vue'
import switchonline from '../../svgs/switchonline.vue'
</script>

<style scoped></style>
