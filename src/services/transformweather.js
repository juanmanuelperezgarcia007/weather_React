import {
    SUN,
    CLOUD,
    RAIN, 
    SNOW,
    THUNDER,
    DRIZZLE,
   
} from './../constants/weather'


const getWeatherState = weather => {
    const { id } = weather;
    
    if (id< 300 ){
        return THUNDER
    }else if (id < 400 ){
        return DRIZZLE
    }else if (id <600 ){
        return RAIN;
    }else if (id < 700 ){
        return SNOW; 
    }else if (id === 800){
        return SUN;
    }else {
        return CLOUD;
    }
}

const transformweather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const {name} = weather_data
    const weatherState = getWeatherState(weather_data.weather[0])

    const data = {
        humidity,
        temperature: Math.round(temp),
        weatherState,
        city:name,
        wind: `${speed} m/s`
    }

    return data;
}

export default transformweather