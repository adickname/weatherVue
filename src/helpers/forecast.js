import axios from "axios";
const ApiKey = "1c06548de2a982279e6f0791780e569d";

export const forecast = async (lat, lon, units) => {
    try {
        const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${ApiKey}`
        );
        console.log(res.data);
    } catch (error) {
        console.error(error.response.data);
    }
};
