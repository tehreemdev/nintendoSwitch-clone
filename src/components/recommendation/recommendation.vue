<template>
  <div class="">
    <article class="bg-white p-5 mt-4">
      <h1 class="font-bold text-lg">Recommendation for you</h1>
      <p class="text-zinc-400 text-sm">
        These Recommendation are based on a variety of different parameters, for example you play
        history.
      </p>
    </article>
    <article class="px-12 sm:px-[87px] md:px-44">
      <SignIn
        class="bg-white px-5 py-4 shadow-lg w-[70%] md:w-[65%] absolute mt-16 sm:mt-56 md:mt-80"
      />
    </article>
  </div>
</template>

<script setup>
import SignIn from '../recommendation/SignIn.vue'
</script>

<style lang="ts" scoped></style>
