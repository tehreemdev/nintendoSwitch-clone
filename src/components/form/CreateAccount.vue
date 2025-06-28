<template>
  <div>
    <article class="flex justify-center">
      <article class="px-2 formWidth sm:px-6 md:px-12 border-4 rounded-md border-slate-700">
        <div>
          <h1 class="text-white mt-4 md:mt-8 lg:mt-12 flex justify-center">
            Welcome to Bootstrap Academy
          </h1>
        </div>

        <div>
          <label class="text-gray-400 mt-1 sm:mt-2 md:mt-4 lg:mt-6 text-sm block" for=""
            >NickName</label
          >
          <input
            class="mt-2 bg-slate-700 border rounded-md h-10 text-sm w-full text-white"
            type="text"
            v-model="NickName"
          />
        </div>

        <div>
          <label class="text-gray-400 mt-2 md:mt-2 lg:mt-3 text-sm block" for="">Name</label>
          <input
            class="mt-2 bg-slate-700 border rounded-md h-10 text-sm w-full text-white"
            type="text"
            v-model="Name"
          />
        </div>

        <div>
          <label class="text-gray-400 mt-2 md:mt-2 lg:mt-3 text-sm block" for=""
            >E-mail Address</label
          >
          <input
            class="mt-2 bg-slate-700 border rounded-md h-10 text-sm w-full text-white"
            type="email"
            v-model="email"
          />
        </div>

        <div>
          <label class="text-gray-400 mt-2 text-sm block" for="">Password</label>
          <input
            class="mt-2 bg-slate-700 border rounded-md h-10 w-full text-white"
            type="text"
            v-model="Password"
          />
        </div>

        <label class="text-white box mt-3">
          <input type="checkbox" class="cursor-pointer" />
          I agree to the Terms & Conditions.
          <span class="checkmark"></span>
        </label>

        <label class="text-white box mt-3">
          <input type="checkbox" class="cursor-pointer" />
          I agree to the Privacy Policy.
          <span class="checkmark"></span>
        </label>

        <label class="text-white box mt-3">
          <input type="checkbox" class="cursor-pointer" />
          I want to register for Bootstrap newsletter.
          <span class="checkmark"></span>
        </label>

        <section class="flex justify-center mt-4">
          <button class="flex text-white bg-teal-400 px-16 py-2 rounded-md">
            CREATE ACCOUNT
          </button>
        </section>
        <div class="text-sm flex justify-center my-4">
          <a class="text-gray-400" href="Login"
            >Already have an account?
<RouterLink to=/> <span class="text-teal-400">Go to Login</span></RouterLink>
           
          </a>
        </div>
      </article>
    </article>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.box {
  display: block;
  cursor: pointer;
}
.checkmark {
  font-size: 50%;
  background-color: white;
}
</style>
