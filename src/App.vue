<script setup>
import { ref } from 'vue';
import InputName from './components/InputName.vue';
import { coordinates } from './helpers/geographicalCoordinates'
const lat = ref(null)
const lon = ref(null)
const coordinating = async (name) => {
  const res = await coordinates(name)
  lat.value = res[0]
  lon.value = res[1]
}
</script>

<template>
  <InputName @send-name="coordinating" />
</template>

