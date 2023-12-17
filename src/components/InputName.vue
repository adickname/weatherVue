<template>
    <label for="placeNameInput">
        Please enter only english names
    </label>
    <input type="text" ref="placeNameInput" id="placeNameInput">
    <button @click="changeName">ok</button>
    <p>{{ placeName }}</p>
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

<style scoped></style>