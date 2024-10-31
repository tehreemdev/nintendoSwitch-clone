<template>
  <div>
    <Translate />
    <BacktoLogin />
    <section
      class="py-10 sm:py-12 grid md:grid-cols-2 gap-6 px-4 sm:px-6 md:px-12 lg:px-24 bg-slate-900 font-mono"
    >
      <div>
        <article class="hidden md:block">
          <h1 class="text-teal-500 text-md text-center mt-32">Signup</h1>
          <h2 class="mt-2 text-white text-2xl text-center">Let's Create An Account</h2>
          <p class="text-gray-400 text-sm text-center mt-4">
            You can learn computer science, coding and other IT skills for free here. Right now. So
            what are you waiting for? Welcome to Bootstrap Academy Nickname . Name
          </p>
          <img class="h-80 mt-4 m-auto" src="../assets/Screenshot 2024-06-24 145017.png" alt="" />
        </article>
      </div>
      <CreateAccount />
    </section>
  </div>
</template>

<script setup>
import Translate from '../components/bar/Translate.vue'
import BacktoLogin from '@/components/bar/BacktoLogin.vue'
import CreateAccount from '../components/form/CreateAccount.vue'
</script>

<style lang="scss" scoped></style>
