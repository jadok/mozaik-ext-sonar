import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Widget,
  WidgetHeader,
  WidgetBody
} from '@mozaik/ui'

import MetricItem from './MetricItem'

export default class Metric extends Component {
  static propTypes = {
    project: PropTypes.string.isRequired,
    metric: PropTypes.string.isRequired,
    apiData: PropTypes.any,
    apiError: PropTypes.object,
    theme: PropTypes.any,
    style: PropTypes.any
  }

  static getApiRequest({ project, metric }) {
    return {
      id: `sonar.metricFlow.${project}.${metric}`,
      params: {
        project,
        metric
      }
    }
  }

  render() {
    const { apiData: data, project, theme, style } = this.props
    return (
      <Widget>
        <WidgetHeader
          title="Sonar"
          subject={project}
          subjectPlacement="append"
          icon={() => null}
        />
        <WidgetBody>
          {data && data.measures.map((mesure) => {
            return (
              <MetricItem
                {...mesure}
                key={`${mesure.component} - ${mesure.metric}`}
                theme={theme}
                style={style}
              />
            )
          })}
        </WidgetBody>
      </Widget>
    )
  }
}
