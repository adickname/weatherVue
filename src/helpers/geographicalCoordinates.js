import axios from "axios";
const ApiKey = "1c06548de2a982279e6f0791780e569d";
export const coordinates = async (name) => {
    const res = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${name}&appid=${ApiKey}`
    );
    await res.data[0].lat;
    await res.data[0].lon;
    return [await res.data[0].lat, await res.data[0].lon];
};
