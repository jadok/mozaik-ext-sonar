'use strict';

exports.__esModule = true;
var gradingValue = exports.gradingValue = function gradingValue(currentVal, previousVal) {
  if (previousVal === 0 && currentVal > 0) {
    return 'failure';
  }
  var diffPercent = currentVal / previousVal * 100;
  if (diffPercent < 1.0) {
    return 'success';
  }
  return 'failure';
};