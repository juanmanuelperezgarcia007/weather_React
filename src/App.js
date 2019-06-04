import React, { Component } from 'react';
import { connect } from 'react-redux'
import ForecastExtend from './components/ForecastExtend'
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar'
import { Grid, Row, Col } from 'react-flexbox-grid'
import LocationList from './components/LocationList';
import { setCity } from './actions'
import './App.css';

const cities = [
  'Madrid,es',
  'Washington,us',
  'Bogota,col',
  'Buenos aires,ar',
  'New york,us'
]


class App extends Component {
  constructor() {
    super()
    this.state = { ciudadSelecionada: null }

  }
  handleSelectedLocation = city => {
    console.log(city)
    let ciudad = city.split(',')
    let ciudadSelecionada = ciudad[0]
    ciudadSelecionada = ciudadSelecionada.toUpperCase()

    this.setState({ ciudadSelecionada })

    // const action = { type: 'setCity', value: city }

    this.props.setCity(city)

  }
  render() {
    return (

      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography vairant='title color' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>

        <Row>
          <Col xs={12} md={6}>
            <LocationList
              cities={cities}
              onSelectedLocation={this.handleSelectedLocation}>
            </LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className='details'>
                {
                  this.state.ciudadSelecionada ?

                    <ForecastExtend city={this.state.ciudadSelecionada}></ForecastExtend> :
                    null
                }
              </div>
            </Paper>

          </Col>
        </Row>


      </Grid>
    );
  }
}
const mapDispatchToPropsActions = dispatch => ({
  setCity: value => dispatch(setCity(value))
});

const AppConnected = connect(null, mapDispatchToPropsActions)(App)

export default AppConnected;
