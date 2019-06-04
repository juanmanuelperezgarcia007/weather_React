import { url_base_weather_days, api_key} from './../constants/api_url'
const getUrlWeatherByDays = city =>{
   return `${url_base_weather_days}?q=${city}&units=metric&lang=es&APPID=${api_key}`;

}

export default  getUrlWeatherByDays