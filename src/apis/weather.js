import axios from 'axios'

const API_KEY = '115dbed065611525b98943579998e5f1'

export const getWeather = (locationName) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=${API_KEY}&units=metric&lang=vi`)
}