<script setup>
import { ref, defineProps } from 'vue';
import { forecast } from '../helpers/forecast'
const props = defineProps(['lat', 'lon', 'units'])
const lat = ref(props.lat)
const lon = ref(props.lon)
const units = ref(props.units)

forecast(lat.value, lon.value, units.value)

</script>

<template>
    <div>
        lat {{ lat }}
        lon {{ lon }}
        units {{ units }}
    </div>
</template>
