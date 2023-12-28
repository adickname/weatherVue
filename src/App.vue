<script setup>
import { ref, defineAsyncComponent, reactive, provide } from 'vue';
import InputName from './components/InputName.vue';
import Error from "./components/Error.vue"
import { coordinates } from './helpers/geographicalCoordinates.js'

const AsyncWeather = defineAsyncComponent(() =>
  import('./components/Weather.vue')
)

const errorObject = reactive({
  isError: false, message: '', messageForUser: '', fileName: ''
  , lineNumber: 0
})

const changeErrorObject = (message, messageForUser, fileName, lineNumber) => {
  errorObject.isError = true
  errorObject.message = message
  errorObject.messageForUser = messageForUser
  errorObject.fileName = fileName
  errorObject.lineNumber = lineNumber
}

const removeIsError = () => {
  errorObject.isError = false
}
provide('changeErrorObject', changeErrorObject)
provide('removeIsError', removeIsError)

const lat = ref(null)
const lon = ref(null)
const nameOfPlace = ref(null)
const coordinating = async (name) => {
  errorObject.isError = false
  nameOfPlace.value = name
  lat.value = null
  lon.value = null
  let res = await coordinates(name)
  if (typeof res[0] === 'string') {
    changeErrorObject(res[1].error.message, res[0], res[1].error.fileName, res[1].error.lineNumber)
  } else {
    lat.value = await res[0]
    lon.value = await res[1]
  }

}
</script>

<template>
  <InputName @send-name="coordinating" />
  <template v-if="errorObject.isError">
    <Error :errorObject="errorObject" />
  </template>
  <template v-else>
    <Suspense v-if="lat !== null && lon !== null">
      <template #default>

        <AsyncWeather :lat="lat" :lon="lon" units="metric" :name="nameOfPlace">
        </AsyncWeather>
      </template>
      <template #fallback>
        <p>loading...</p>
      </template>
    </Suspense>
  </template>
</template>

