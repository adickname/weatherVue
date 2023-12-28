import axios from "axios";
import { ApiKey } from "../../privateData";

export const forecast = async (lat, lon, units) => {
    try {
        const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${ApiKey}`
        );
        const {
            data: {
                clouds: { all },
                main: { temp, feels_like, pressure, humidity },
                visibility,
                rain,
                snow,
                dt,
                wind,
                weather: [{ description, icon }],
            },
        } = res;
        return [
            all,
            temp,
            feels_like,
            pressure,
            humidity,
            visibility,
            rain,
            snow,
            dt,
            wind,
            description,
            icon,
        ];
    } catch (error) {
        return [`Sorry, something went wrong.`, { error }];
    }
};
