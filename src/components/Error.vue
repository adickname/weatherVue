<template>
    <div class="wrapper">
        <p>{{ messageForUser }}</p>
        <button @click="sendEmail" class="errorReporterButton">report an error</button>
    </div>
</template>

<script setup>
import axios from "axios"
import { emailJsServiceId } from "../../privateData"
import { emailJsTemplateId } from "../../privateData"
import { emailJsUserId } from "../../privateData"
import { ref } from "vue";
const props = defineProps(['errorObject'])
const messageForUser = ref()
messageForUser.value = props.errorObject.messageForUser
const dataToEmialJs = {
    service_id: emailJsServiceId,
    template_id: emailJsTemplateId,
    user_id: emailJsUserId,
    template_params: {
        message: `message: ${props.errorObject.message}, file name: ${props.errorObject.fileName}, line number: ${props.errorObject.lineNumber}`
    }
}

const sendEmail = () => {
    axios.post('https://api.emailjs.com/api/v1.0/email/send', dataToEmialJs)
        .catch(e => messageForUser.value = "Sorry reporting error went wrong.")
    messageForUser.value = 'Thank you for reporting error'
}


</script>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;

}

.errorReporterButton {
    background-color: #DC3545;
    color: wheat;
    width: 45%;
    height: 10%;
    font-size: 17px;
    border: none;
    animation: appearenceErrorReporterButton 1s backwards;
}

@keyframes appearenceErrorReporterButton {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>