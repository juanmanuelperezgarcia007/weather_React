import React, { Component } from 'react';
import PropTypes from 'prop-types'
import getUrlWeatherByDays from './../services/getUrlWeatherByDays'
import transformForecast from './../services/transformForecast'
import ForescastItem from './ForescastItem';
import CircularProgress from '@material-ui/core/CircularProgress'
import './style.css'

// const days = [
//     'Lunes',
//     'Martes',
//     'Miercoles',
//     'Jueves',
//     'Viernes'
// ]

// const data = {
//     temperature:10,
//     humidity:10,
//     weatherState: 'normal',
//     wind: 'normal'
// }

class ForecastExtend extends Component {
    constructor() {
        super()
        this.state = { forecastData: null }
    }
    componentDidMount() {
        this.updateCity(this.props.city)
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.city !== this.props.city){
            this.setState({forecastData:null})
            this.updateCity(nextProps.city)
        }
        
    }
    
    updateCity = city => {
        const weather_day = getUrlWeatherByDays(this.props.city)

        fetch(weather_day).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data)
                const forecastData = transformForecast(weather_data);
                console.log(forecastData)
                this.setState({ forecastData })
            }
        )
    }
    renderForecastItemDays(forecastData) {

        return forecastData.map(forecast => (
            <ForescastItem
                key={`${forecast.weekDay}${forecast.hour}`}
                hour={forecast.hour}
                weekDay={forecast.weekDay}
                data={forecast.data}>
            </ForescastItem>))

    }
    renderProgress = () => {
        return <div className='CircularProgress'>
            <CircularProgress></CircularProgress>
            <h5>'Cargando pronostico extendido...</h5>
        </div>
    }
    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className='forecast-title'>
                    Pronóstico Extendido para {city}
                </h2>
                {forecastData ?
                    this.renderForecastItemDays(forecastData) :
                    this.renderProgress()}

            </div>);
    }
}
ForecastExtend.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtend