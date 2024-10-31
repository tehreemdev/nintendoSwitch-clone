<template>
  <div>
    <GradientLine class="sticky top-0" />
    <Translate />
    <NavigateBack />
    <section
      class="py-10 sm:py-20 grid md:grid-cols-2 gap-6 px-4 sm:px-6 md:px-12 lg:px-24 bg-slate-900 font-mono"
    >
      <Login class="" />
      <div>
        <article class="hidden md:block">
          <h1 class="text-teal-500 text-md text-center">Login</h1>
          <h2 class="mt-2 text-white text-2xl text-center">Welcome Back!</h2>
          <p class="text-gray-400 text-sm text-center mt-4">
            Continue establishing your IT skills, go take some lessons right away
          </p>
          <img class="h-80 mt-4 m-auto" src="../assets/Screenshot 2024-06-13 143947.png" alt="" />
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
import Translate from '../components/bar/Translate.vue'
import NavigateBack from '../components/bar/NavigateBack.vue'
import GradientLine from '../components/bar/GradientLine.vue'
import Login from '../components/form/Login.vue'
</script>

<style scoped>
.formWidth {
  width: min(25rem, 100%);
}
</style>
