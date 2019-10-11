'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ui = require('@mozaik/ui');

var _MetricItem = require('./MetricItem');

var _MetricItem2 = _interopRequireDefault(_MetricItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

    return _react2.default.createElement(
      _ui.Widget,
      null,
      _react2.default.createElement(_ui.WidgetHeader, {
        title: 'Sonar',
        subject: project,
        subjectPlacement: 'append',
        icon: function icon() {
          return null;
        }
      }),
      _react2.default.createElement(
        _ui.WidgetBody,
        null,
        data && data.measures.map(function (mesure) {
          return _react2.default.createElement(_MetricItem2.default, _extends({}, mesure, {
            key: mesure.component + ' - ' + mesure.metric,
            theme: theme,
            style: style
          }));
        })
      )
    );
  };

  return Metric;
}(_react.Component);

Metric.propTypes = {
  project: _propTypes2.default.string.isRequired,
  metric: _propTypes2.default.string.isRequired,
  apiData: _propTypes2.default.any,
  apiError: _propTypes2.default.object,
  theme: _propTypes2.default.any,
  style: _propTypes2.default.any
};
exports.default = Metric;