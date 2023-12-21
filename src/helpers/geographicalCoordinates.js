import axios from "axios";
const ApiKey = "1c06548de2a982279e6f0791780e569d";
/* const ApiKey = "a9dde29858875c00d8831ecfe3e26767"; */
export const coordinates = async (name) => {
    try {
        const res = await axios.get(
            `http://api.openweathermap.org/geo/1.0/direct?q=${name}&appid=${ApiKey}`
        );

        const lat = await res.data[0].lat;
        const lon = await res.data[0].lon;
        return [await lat, await lon];
    } catch (error) {
        console.error(123, error.message);
    }
};
