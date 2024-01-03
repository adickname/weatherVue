export const direction = (deg) => {
    if (deg < 24 || (deg >= 337 && deg <= 360)) {
        return "N";
    } else if (deg > 23 && deg <= 68) {
        return "NE";
    } else if (deg >= 69 && deg <= 113) {
        return "E";
    } else if (deg >= 114 && deg <= 158) {
        return "SE";
    } else if (deg >= 159 && deg <= 203) {
        return "S";
    } else if (deg >= 204 && deg <= 248) {
        return "SW";
    } else if (deg >= 249 && deg <= 293) {
        return "W";
    } else if (deg >= 294 && deg <= 336) {
        return "NW";
    }
};
