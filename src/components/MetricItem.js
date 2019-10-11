import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'

class MetricItem extends Component {
  static propTypes = {
    project: PropTypes.string.isRequired,
    metric: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    periods: PropTypes.any,
    theme: PropTypes.any,
    style: PropTypes.any
  }

  getColorStatus = (value) => value == 0 ? 'success' : 'failure'

  render() {
    const { style, theme, periods, metric, value, } = this.props;

    const lastMetric = periods[periods.length - 1];
    const colorKey = this.getColorStatus(lastMetric.value)
    return (
      <div style={{
        ...style,
        width: 'calc(25vw - 6vmin)',
        display: 'inline-block',
        float: 'left',
        padding: '1vmin'
      }}>
        <div style={{
          fontSize: theme.widget.header.fontSize,
          padding: '1vmin'
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
            {lastMetric.value}
          </p>
          <span style={{ textAlign: 'right', display: 'block' }}>
            {value}
          </span>
        </div>
      </div>
    )
  }
}

export default withTheme(MetricItem)
