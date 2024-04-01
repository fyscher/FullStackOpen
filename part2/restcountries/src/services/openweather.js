import axios from 'axios';

const api_key = import.meta.env.VITE_API_KEY

const baseURL = 'https://api.openweathermap.org/data/2.5/weather?'

const getWeather = (city) =>
{
    const req = axios.get(`${baseURL}q=${city}&appid=${api_key}&units=metric`);
    return req.then(res => res.data)
}

export default { getWeather };
