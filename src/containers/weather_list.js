import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
  static propTypes = {
    weather: PropTypes.array
  }

  renderWeather = (cityData) => {
    const temps = cityData.list.map(
      (weather) => weather.main.temp - 273.15
    )
    const pressures = cityData.list.map(
      (weather) => weather.main.pressure
    )
    const humidities = cityData.list.map(
      (weather) => weather.main.humidity
    )
    const lat = cityData.city.coord.lat
    const lon = cityData.city.coord.lon

    return (
      <tr key={cityData.city.id}>
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
          <Chart data={temps} color="orange" units="C" />
        </td>
        <td>
          <Chart data={pressures} color="blue" units="hPa" />
        </td>
        <td>
          <Chart data={humidities} color="green" units="%" />
        </td>
      </tr>
    )
  }
  render () {
    const {weather} = this.props
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps (state) {
  return {weather: state.weather}
}

export default connect(mapStateToProps)(WeatherList)
