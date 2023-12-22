<script setup>
import { ref, defineAsyncComponent } from 'vue';
import InputName from './components/InputName.vue';
import { coordinates } from './helpers/geographicalCoordinates'

const AsyncWeather = defineAsyncComponent(() =>
  import('./components/Weather.vue')
)
const lat = ref(null)
const lon = ref(null)
const nameOfPlace = ref(null)
const coordinating = async (name) => {
  nameOfPlace.value = name
  let res = await coordinates(name)
  lat.value = null
  lon.value = null
  lat.value = await res[0]
  lon.value = await res[1]
}
</script>

<template>
  <InputName @send-name="coordinating" />

  <Suspense>
    <template #default>

      <AsyncWeather v-if="lat !== null && lon !== null" :lat="lat" :lon="lon" units="metric" :name="nameOfPlace">
      </AsyncWeather>
    </template>
    <template #fallback>
      <p>loading...</p>
    </template>
  </Suspense>
</template>

