import axios from "axios"

export function getWeather(zipCode) {
    const endpoint = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},US&units=imperial&appid=YOUR_API_KEY_HERE`
    return axios.get(endpoint).then(response => response.data)
}
