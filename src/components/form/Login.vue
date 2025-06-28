<template>
  <div>
    <article class="flex justify-center">
      <form class="px-2 formWidth sm:px-6 md:px-12 border-4 rounded-md border-slate-700">
        <div>
          <h1 class="text-white mt-4 md:mt-8 lg:mt-12 flex justify-center">
            Enter your Credentials
          </h1>
          <p class="text-gray-400 text-sm mt-4 lg:mt-4">
            All user accounts from the-morpheus.cc have been migrated to the Academy, so you can
            still login with your Coding Challenges account.
          </p>
        </div>

        <div>
          <label class="text-gray-400 mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-sm block" for="email">
            E-Mail Address or NickName
          </label>
          <input
            id="email"
            placeholder="example@gmail.com"
            class="mt-2 bg-slate-700 border pl-3 rounded-md h-10 text-sm w-full text-white"
            type="email"
            v-model="email"
          />
          <p v-if="emailError" class="text-red-500 text-sm">{{ emailError }}</p>
        </div>

        <div>
          <label class="text-gray-400 mt-2 text-sm block" for="password">Password</label>
          <input
            id="password"
            class="mt-2 bg-slate-700 border rounded-md h-10 w-full text-white"
            type="password"
            v-model="password"
          />
          <p v-if="passwordError" class="text-red-500 text-sm">{{ passwordError }}</p>
          <RouterLink class="flex justify-end text-gray-400 text-sm mt-6"
            >Forget Password</RouterLink
          >
        </div>

        <section class="flex justify-center mt-4">
          <button class="flex text-white bg-teal-400 px-16 py-2 rounded-md" @click="login">
            LOGIN
          </button>
        </section>

        <div class="text-sm mt-6 flex justify-center">
          <a class="text-gray-400" href="signup">
            Don't have an account?
            <!-- <RouterLink to="/signup"></RouterLink> -->
            <span class="text-teal-400">Create one</span>
          </a>
        </div>

        <section class="grid grid-cols-[1fr_auto_1fr] mt-6 items-center">
          <hr class="w-full" />
          <p class="text-gray-400 text-sm pl-4 pr-4">Or login with</p>
          <hr class="w-full" />
        </section>

        <div class="flex gap-10 justify-center mt-8 mb-8">
          <discord />
          <github />
          <chrome />
        </div>
      </form>
    </article>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')
const emailError = ref('')
const passwordError = ref('')

const validateEmail = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Simple email pattern
  emailError.value = email.value
    ? emailPattern.test(email.value)
      ? ''
      : 'Invalid email format'
    : 'Email is required'
}

const validatePassword = () => {
  passwordError.value = password.value ? '' : 'Password is required'
}

const login = () => {
  validateEmail()
  validatePassword()

  if (!emailError.value && !passwordError.value) {
    router.push('/nintendo')
  }
}
</script>

<style scoped></style>
