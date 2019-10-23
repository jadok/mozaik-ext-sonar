'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _utils = require('./utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MetricItem = function (_Component) {
  _inherits(MetricItem, _Component);

  function MetricItem() {
    var _temp, _this, _ret;

    _classCallCheck(this, MetricItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.getColorStatus = function (currentVal, previousVal) {
      return (0, _utils.gradingValue)(currentVal, previousVal);
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
    var currentVal = parseFloat(lastMetric.value);
    var previousVal = parseFloat(value);
    var colorKey = this.getColorStatus(currentVal, previousVal);
    return _react2.default.createElement(
      'div',
      { style: _extends({}, style, {
          display: 'inline-block',
          float: 'left',
          width: '100%'
        }) },
      _react2.default.createElement(
        'div',
        { style: {
            fontSize: theme.widget.header.fontSize,
            padding: '.5vmin 1vmin'
          } },
        metric
      ),
      _react2.default.createElement(
        'div',
        { style: {
            backgroundColor: theme.colors[colorKey],
            color: theme.colors.background,
            padding: '1vmin'
          } },
        _react2.default.createElement(
          'p',
          { style: {
              fontSize: '3.5vmin',
              textAlign: 'center'
            } },
          currentVal.toFixed(2)
        ),
        _react2.default.createElement(
          'span',
          { style: { fontSize: '2.5vmin', textAlign: 'right', display: 'block' } },
          previousVal.toFixed(2)
        )
      )
    );
  };

  return MetricItem;
}(_react.Component);

MetricItem.propTypes = {
  project: _propTypes2.default.string.isRequired,
  metric: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.string.isRequired,
  periods: _propTypes2.default.any,
  theme: _propTypes2.default.any,
  style: _propTypes2.default.any
};
exports.default = (0, _styledComponents.withTheme)(MetricItem);