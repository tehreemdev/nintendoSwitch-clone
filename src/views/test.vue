<script setup>
import { ref } from 'vue'
import Child2 from '../components/Child2.vue'
import Child from '../components/Child.vue'
import InputField from '../components/Input/Field.vue'
import InputCheckbox from '../components/Input/checkbox.vue'

const passAge = ref(23)
function increaseAge() {
  passAge.value = passAge.value + 1
}

const switchValue = ref([])

function decreaseAge() {
  passAge.value = passAge.value - 1
}

function setAge(value) {
  passAge.value = value
}
const FName = ref('Tehreem ')
const LName = ref('Khalid')
function fullName() {
  FName.value = FName.value + LName.value
}

const switches = [
  {
    label: 'Thi sis one',
    trueValue: 'one'
  },
  {
    label: 'this is two',
    trueValue: 'two'
  },
  {
    label: 'thi sis three',
    trueValue: 'three'
  }
]
</script>

<template>
  <Child
    :age="passAge"
    @increase="increaseAge()"
    @decrease="decreaseAge()"
    @setAge="setAge($event)"
  />
  <Child2 :FirstName="FName" @Full_Name="fullName()" />
  <InputField v-model="val" />
  <!-- swtiches -->

  <div>
    {{ switchValue }}
    <InputCheckbox
      v-for="(input, i) of switches"
      :label="input.label"
      :trueValue="input.trueValue"
      v-model="switchValue[i]"
    />
  </div>
</template>

<style></style>
