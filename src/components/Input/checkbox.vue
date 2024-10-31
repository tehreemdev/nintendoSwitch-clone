<template>
  <div>
    <label>
      <input
        class="border py-3 border-red-400 focus:border-blue-500 focus:outline-none focus:ring-0"
        v-model="input"
        type="checkbox"
        :true-value="trueValue"
        :false-value="falseValue"
      />
      {{ label }}
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  modelValue: { type: String, default: '' },
  label: { type: String, default: '' },
  trueValue: { type: String, default: '' },
  falseValue: { type: String, default: '' }
})
const emits = defineEmits(['update:modelValue'])

const input = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emits('update:modelValue', val)
  }
})
</script>

<style scoped></style>
