var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Widget, WidgetHeader, WidgetBody } from '@mozaik/ui';

import MetricItem from './MetricItem';

var Metric = function (_Component) {
  _inherits(Metric, _Component);

  function Metric() {
    _classCallCheck(this, Metric);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Metric.getApiRequest = function getApiRequest(_ref) {
    var project = _ref.project,
        metric = _ref.metric;

    return {
      id: 'sonar.metricFlow.' + project + '.' + metric,
      params: {
        project: project,
        metric: metric
      }
    };
  };

  Metric.prototype.render = function render() {
    var _props = this.props,
        data = _props.apiData,
        project = _props.project,
        theme = _props.theme,
        style = _props.style;

    return React.createElement(
      Widget,
      null,
      React.createElement(WidgetHeader, {
        title: 'Sonar',
        subject: project,
        subjectPlacement: 'append',
        icon: function icon() {
          return null;
        }
      }),
      React.createElement(
        WidgetBody,
        null,
        data && data.measures.map(function (mesure) {
          return React.createElement(MetricItem, _extends({}, mesure, {
            key: mesure.component + ' - ' + mesure.metric,
            theme: theme,
            style: style
          }));
        })
      )
    );
  };

  return Metric;
}(Component);

Metric.propTypes = {
  project: PropTypes.string.isRequired,
  metric: PropTypes.string.isRequired,
  apiData: PropTypes.any,
  apiError: PropTypes.object,
  theme: PropTypes.any,
  style: PropTypes.any
};
export default Metric;