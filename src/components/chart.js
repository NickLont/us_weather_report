import React from 'react'
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines'
import PropTypes from 'prop-types'
import _ from 'lodash'

const Chart = ({data, color, units}) => (
  <div>
    <Sparklines svgHeight={120} svgWidth={180} data={data}>
      <SparklinesLine color={color} />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
    <div>Average is: {average(data)} {units}</div>
  </div>
)
Chart.propTypes = {
  data: PropTypes.array,
  color: PropTypes.string,
  units: PropTypes.string
}

const average = (array) => {
  return _.round(_.sum(array) / array.length)
}

export default Chart
