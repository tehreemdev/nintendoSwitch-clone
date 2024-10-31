<template>
  <div class="p-20 border my-10 bg-slate-500 text-white">
    <h1 class="mb-5">
      Second Child:
      {{ FirstName }}
      {{ LastName }}
      {{ FullName }}
    </h1>
    <button @click="fullName()" class="px-4 py-2 bg-cyan-950 text-white rounded-lg">
      Full Name
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  FirstName: { type: String, default: '' },
  LastName: { type: String, default: '' },
  FullName: { type: String, default: '' }
})

const emits = defineEmits(['Full_Name'])
function fullName() {
  emits('Full_Name')
}
</script>

<style scoped></style>
