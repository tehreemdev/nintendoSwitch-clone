<template>
  <div>
    <NumberComp
      :num="passnum"
      @addition="add()"
      @substraction="sub()"
      @multiplication="multiply()"
      @division="divide()"
      @setNum="passnum = Number($event)"
    />
  </div>
</template>

<script setup lang="ts">
import NumberComp from '../components/NumberComp.vue'
import { ref } from 'vue'

const passnum = ref(6)
function add() {
  passnum.value = passnum.value + 1
}
function sub() {
  passnum.value = passnum.value - 1
}
function multiply() {
  passnum.value = passnum.value * 2
}
function divide() {
  passnum.value = passnum.value / 2
}
</script>

<style scoped></style>
