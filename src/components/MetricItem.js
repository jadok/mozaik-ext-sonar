import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'

import { gradingValue } from './utils.js'

class MetricItem extends Component {
  static propTypes = {
    project: PropTypes.string.isRequired,
    metric: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    periods: PropTypes.any,
    theme: PropTypes.any,
    style: PropTypes.any
  }

  getColorStatus = (currentVal, previousVal) => gradingValue(currentVal, previousVal)

  render() {
    const { style, theme, periods, metric, value, } = this.props;

    const lastMetric = periods[periods.length - 1];
    const currentVal = parseFloat(lastMetric.value);
    const previousVal = parseFloat(value);
    const colorKey = this.getColorStatus(currentVal, previousVal);
    return (
      <div style={{
        ...style,
        display: 'inline-block',
        float: 'left',
        width: '100%'
      }}>
        <div style={{
          fontSize: theme.widget.header.fontSize,
          padding: '.5vmin 1vmin'
        }}>
          {metric}
        </div>
        <div style={{
          backgroundColor: theme.colors[colorKey],
          color: theme.colors.background,
          padding: '1vmin'
        }}>
          <p style={{
            fontSize: '3.5vmin',
            textAlign: 'center'
          }}>
            {currentVal.toFixed(2)}
          </p>
          <span style={{ fontSize: '2.5vmin', textAlign: 'right', display: 'block' }}>
            {previousVal.toFixed(2)}
          </span>
        </div>
      </div>
    )
  }
}

export default withTheme(MetricItem)
