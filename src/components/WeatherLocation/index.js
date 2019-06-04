import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import Location from './Location'
import WeatherData from './WeatherData'
import PropTypes from 'prop-types'
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity'
import './style.css'
import transformweather from './../../services/transformweather'



class WeatherLocation extends Component {
    constructor(props) {
        super(props);
        const { city } = props
        this.state = {
            city,
            data: null,
        }
 
    }

    componentDidMount() {
   
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
     

    }

    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city)
        fetch(api_weather).then(resolve => {

            return resolve.json()
        }).then(data => {
            const newWeather = transformweather(data);
            
            this.setState({
                city: newWeather.city,
                data: newWeather
            });
     
        })


    }
    render() {
       
        const {onWeatherLocationClick} = this.props;
        const { city, data } = this.state
        return (<div className='weatherLocationCont'onClick = {onWeatherLocationClick}>
            <Location city= {city}></Location>
            {data ?
                <WeatherData data={this.state.data}></WeatherData> :
                <div className='CircularProgress'><CircularProgress></CircularProgress></div>}
                
        </div>
            )
        }
    
    
    };
    
    //PROPTYPES
    
// WeatherData.propTypes = {
//     data: PropTypes.shape({
//         temperature: PropTypes.number.isRequired,
//         weatherState: PropTypes.string.isRequired,
//         humidity: PropTypes.number.isRequired,
//         wind: PropTypes.string.isRequired,
//     })
// }




WeatherLocation.propTypes={
    city:PropTypes.string.isRequired,
    onwWeatherLocationClick: PropTypes.func,
}


export default WeatherLocation;