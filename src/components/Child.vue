<template>
  <div class="border p-20 text-blue-800 bg-purple-200">
    <h2>
      First child:
      {{ age }}
    </h2>
    <input type="number" v-model="newAge" />
    <button @click="increaseAge()" class="px-4 py-2 bg-cyan-950 text-white rounded-lg">
      Increase
    </button>

    <button @click="decreaseAge()" class="px-4 py-2 bg-cyan-950 text-white rounded-lg">
      decrease
    </button>

    <button @click="setAge()" class="px-4 py-2 bg-cyan-950 text-white rounded-lg">
      set Age
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  age: { type: Number, default: '' }
})

const newAge = ref(111)

const emits = defineEmits(['increase', 'decrease', 'setAge'])

function increaseAge() {
  emits('increase')
}

function decreaseAge() {
  emits('decrease')
}
function setAge() {
  emits('setAge', newAge.value)
}
</script>

<style scoped></style>
