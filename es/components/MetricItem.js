var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

var MetricItem = function (_Component) {
  _inherits(MetricItem, _Component);

  function MetricItem() {
    var _temp, _this, _ret;

    _classCallCheck(this, MetricItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.getColorStatus = function (value) {
      return value == 0 ? 'success' : 'failure';
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  MetricItem.prototype.render = function render() {
    var _props = this.props,
        style = _props.style,
        theme = _props.theme,
        periods = _props.periods,
        metric = _props.metric,
        value = _props.value;


    var lastMetric = periods[periods.length - 1];
    var colorKey = this.getColorStatus(lastMetric.value);
    return React.createElement(
      'div',
      { style: _extends({}, style, {
          width: 'calc(25vw - 6vmin)',
          display: 'inline-block',
          float: 'left',
          padding: '1vmin'
        }) },
      React.createElement(
        'div',
        { style: {
            fontSize: theme.widget.header.fontSize,
            padding: '1vmin'
          } },
        metric
      ),
      React.createElement(
        'div',
        { style: {
            backgroundColor: theme.colors[colorKey],
            color: theme.colors.background,
            padding: '1vmin'
          } },
        React.createElement(
          'p',
          { style: {
              fontSize: '3.5vmin',
              textAlign: 'center'
            } },
          lastMetric.value
        ),
        React.createElement(
          'span',
          { style: { textAlign: 'right', display: 'block' } },
          value
        )
      )
    );
  };

  return MetricItem;
}(Component);

MetricItem.propTypes = {
  project: PropTypes.string.isRequired,
  metric: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  periods: PropTypes.any,
  theme: PropTypes.any,
  style: PropTypes.any
};


export default withTheme(MetricItem);