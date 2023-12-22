export const setTime = (unixTime) => {
    const time = new Date(unixTime * 1000);
    let dayWord;
    switch (time.getDay()) {
        case 0:
            dayWord = "Sunday";
            break;
        case 1:
            dayWord = "Monday";
            break;
        case 2:
            dayWord = "Tuersday";
            break;
        case 3:
            dayWord = "Wednesday";
            break;
        case 4:
            dayWord = "Thursday";
            break;
        case 5:
            dayWord = "Friday";
            break;
        case 6:
            dayWord = "Saturday";
            break;
    }
    const date = ` ${time.getHours()}:${time.getMinutes()}, ${dayWord}, ${time.getDate()}.${
        time.getMonth() + 1
    }, ${time.getFullYear()} `;
    return date;
};
