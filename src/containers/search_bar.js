import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import PropTypes from 'prop-types'

import {fetchWeather} from '../actions/index'

class SearchBar extends Component {
  static propTypes = {
    fetchWeather: PropTypes.func
  }
  constructor (props) {
    super(props)
    this.state = {term: ''}
  }
  // state = {
  //   term: ''
  // }
  onInputChange = (event) => {
    this.setState({term: event.target.value})
  }
  onSubmit = (event) => {
    event.preventDefault()
    // Go and fetch weather data
    this.props.fetchWeather(this.state.term)
    this.setState({term: ''})
  }
  render () {
    return (
      <form className="input-group" onSubmit={this.onSubmit}>
        <input
          type="text"
          value={this.state.term}
          onChange={this.onInputChange}
          placeholder="Get a 5 day forecast in your favorite cities"
          className="form-control"
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  // Dispatch makes sure fetchWeather flows through the middleware and the reducers
  return bindActionCreators({fetchWeather}, dispatch)
}
// Mapping SearchBar
export default connect(null, mapDispatchToProps)(SearchBar)
