<script setup>
import { ref, defineProps, inject, provide } from 'vue';
import { forecast } from '../helpers/forecast'
import { setTime } from "../helpers/setTime"
const props = defineProps(['lat', 'lon', 'units', 'name'])
const lat = ref(props.lat)
const lon = ref(props.lon)
const units = ref(props.units)
const name = ref(props.name)
const date = ref()
let res = await forecast(lat.value, lon.value, units.value)
if (typeof res[0] === 'string') {
    const changeErrorObject = inject('changeErrorObject')
    changeErrorObject(res[1].error.message, res[0], res[1].error.fileName, res[1].error.lineNumber)
}

const [
    clouds, temp, feels_like, pressure, humidity, visibility, rain, snow, dt, wind, description, icon
] = res
const lastHourRain = rain?.['1h']
const lastHourSnow = snow?.['1h']
if (dt) {
    date.value = setTime(dt)
}



</script>

<template>
    <main>
        <div v-if="res !== null && res !== undefined" class="wrapper">
            <div class="nextToSelf">
                <h1>{{ name }}</h1>
                <img :src="`https://openweathermap.org/img/wn/${icon}@2x.png`" alt="">
            </div>

            <h2 class="center">Current weather</h2>
            <div class="info">
                <p>temp {{ temp }}&#176;C</p>
                <p>sensed temp {{ feels_like }}&#176;C </p>
                <p>humidity {{ humidity }}%</p>
                <p> clouds {{ clouds }}</p>
                <p>rain <span v-if="lastHourRain === 0 || lastHourRain === undefined">0</span><span v-else>{{
                    lastHourRain
                }}mm</span>
                </p>
                <p>snow <span v-if="lastHourSnow === 0 || lastHourSnow === undefined">0</span><span v-else>{{
                    lastHourSnow
                }}mm</span>
                </p>
                <p>visibility {{ visibility }}m</p>
                <p> pressure {{ pressure }}hPa</p>
                <p>wind {{ wind.speed }}m/s {{ wind.deg }}</p>
            </div>
            <p>There is {{ description }}</p>
            <p>{{ date }}</p>
        </div>
    </main>
</template>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    background-color: cornflowerblue;
}


h1 {
    text-transform: capitalize;
    margin: 5px;
    display: inline-block;
}

img {
    display: inline-block;
    /* flex-direction: row; */
    width: 52px;
    height: 52px;
}

.center {
    align-self: center;
}

.info {
    display: flex;
    flex-wrap: wrap;
}

.info p {

    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: calc(33% - 10px);
    margin: 5px;
}

p {
    margin: 5px;
}
</style>