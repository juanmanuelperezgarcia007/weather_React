import React from 'react';
import PropTypes from 'prop-types'
import WeatherData from './../WeatherLocation/WeatherData'


const ForescastItem = ({ weekDay, hour , data }) => (
    <div>
        <h2>{weekDay} {hour} hs</h2>
        <WeatherData data = {data}></WeatherData>
    </div>
)
ForescastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature:PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
}
export default ForescastItem;