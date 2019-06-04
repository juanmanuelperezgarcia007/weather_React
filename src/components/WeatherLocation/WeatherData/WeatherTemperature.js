import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcons from 'react-weathericons';
import  './style.css';
import {
    CLOUD,
    THUNDER,
    SUN,
    RAIN,
    SNOW,
    DRIZZLE
} from './../../../constants/weather'

const icons = {
    [SUN]: 'day-sunny',
    [CLOUD]: 'cloud',
    [DRIZZLE]: 'day-showers',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [THUNDER]: 'day-thunderstorm',
   
}

const getWeatherIcon = weatherState => {
    
    const icon= icons[weatherState];
    
    const sizeIcon = '4x'
    if (icon)
        return <WeatherIcons className='wicon' name={icon} size={sizeIcon}></WeatherIcons>
    else
        return <WeatherIcons  className='wicon' name={'day-sunny'} size={sizeIcon}></WeatherIcons>
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className= 'weatherTemperatureCont'>
        {
            getWeatherIcon(weatherState)
        }
        <span className = 'temperature'>{`${temperature}`}</span>
        <span className= 'temperatureType'>{`ºC`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number, 
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature