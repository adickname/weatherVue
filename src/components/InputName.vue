<template>
    <input type="text" ref="placeNameInput" id="placeNameInput" placeholder="the place name">
    <button @click="changeName">ok</button>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
const emits = defineEmits(['sendName'])
const placeNameInput = ref('')
const placeName = ref('')
const changeName = () => {
    emits('sendName', placeNameInput.value.value)
}
</script>

<style scoped>
input {
    margin: 10px 0 0 10px;
    padding: 10px;
}

button {
    padding: 10px;
}
</style>