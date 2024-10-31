<template>
  <div>
    <h2>
      Number:
      {{ num }}
    </h2>

    <label class="text-gray-800 mt-4" for="">Enter the Number: </label>
    <input class="mt-2 bg-slate-400 rounded-md h-10 w-72 text-white" type="Number" v-model="val" />
    <button @click="add()" class="px-4 py-2 mt-2 bg-cyan-950 text-white rounded-lg">
      add
    </button>

    <button @click="sub()" class="px-4 py-2 bg-cyan-950 text-white rounded-lg">
      substract
    </button>

    <button @click="multiply()" class="px-4 py-2 bg-cyan-950 text-white rounded-lg">
      Multiply
    </button>
    <button @click="divide()" class="px-4 py-2 bg-cyan-950 text-white rounded-lg">
      divide
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const props = defineProps({
  num: { type: Number, default: '' }
})

const emits = defineEmits(['addition', 'substraction', 'multiplication', 'division', 'setNum'])

function add() {
  emits('addition')
}
//pass function
// const val = ref(props.num)

// const val = computed(() => {
//   return props.num
// })

//pass by object
const val = computed({
  get() {
    return props.num
  },
  set(val) {
    emits('setNum', val)
  }
})

function sub() {
  emits('substraction')
}
function multiply() {
  emits('multiplication')
}
function divide() {
  emits('division')
}
</script>

<style lang="ts" scoped></style>
