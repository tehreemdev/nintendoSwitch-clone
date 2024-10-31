<template>
  <div>
    <!-- <p
      class="bg-white mt-4 md:mt-2 p-1 md:px-28 md:py-5 text-zinc-400 text-xs text-center rounded-md"
    >
      *All indicated prices refer to the price of the software in the Nintendo eShop, and all other
      items offered in the My Nintendo Store. All prices shown are inclusive of applicable VAT.
    </p> -->

    <div>
      <article class="bg-red-600 flex items-center h-12 pl-6 mt-6">
        <Nintendo />
      </article>

      <article class="bg-red-700 text-white p-4 text-xs leading-8">
        <a class="mr-8" href="#">Parents & Parental Controls</a>
        <a class="mr-8" href="#">Support</a>
        <a class="mr-8" href="#">Company Information</a>
        <a class="mr-8" href="#">Career</a>
        <a class="mr-8" href="#">Website Privacy Policy</a>
        <a class="mr-8" href="#">Cookies Settings</a>
        <a class="mr-8" href="#">Legal Information</a>
        <a class="mr-8" href="#">Service Termination</a>
        <a class="mr-8" href="#">CSR</a>
        <a class="mr-8" href="#">Modern Slavery Transparency Statment</a>
        <a class="mr-8" href="#">Contact</a>
        <p class="mt-4">Nintendo. 2024</p>
      </article>
    </div>
  </div>
</template>

<script setup>
import Nintendo from '../svgs/nintendo.vue'
</script>

<style lang="ts" scoped></style>
