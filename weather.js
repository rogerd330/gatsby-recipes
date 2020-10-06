import axios from "axios"

export function getWeather(zipCode) {
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},US&units=imperial&appid=${process.env.GATSBY_WEATHER_API_KEY}`
    return axios.get(endpoint).then(response => response.data)
}
