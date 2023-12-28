<template>
    <div>
        <p>{{ errorObject.messageForUser }}</p>
    </div>
</template>

<script setup>
const props = defineProps(['errorObject'])
</script>

<style scoped></style>