<template>
    <label for="placeNameInput">
        Enter place you are interested in
    </label>
    <input type="text" ref="placeNameInput" id="placeNameInput">
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
