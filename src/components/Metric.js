import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Widget,
  WidgetHeader,
  WidgetBody
} from '@mozaik/ui'

import { formatDate } from './utils'
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
    const version = data && data.project && data.project.component && data.project.component.version ? `-${data.project.component.version}` : ''
    const lastRelease = formatDate(data && data.project && data.project.component && data.project.component.leakPeriodDate ? data.project.component.leakPeriodDate : null)
    return (
      <Widget>
        <WidgetHeader
          title={`Sonar${version}`}
          subject={`${project}${lastRelease}`}
          subjectPlacement="append"
          icon={() => null}
        />
        <WidgetBody>
          {data && data.metrics && data.metrics.measures.map((mesure) => {
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
