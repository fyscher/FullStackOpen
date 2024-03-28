import axios from 'axios';

const api_key = import.meta.env.VITE_API_KEY

const geoURL = 'https://api.openweathermap.org/geo/1.0/direct?'

const getCords = (city) =>
{
    //get coordinates of city
    const req = axios.get(`${geoURL}q=${city}&appid=${api_key}`);
    return req.then(res => res.data)
}

export default { getCords };
