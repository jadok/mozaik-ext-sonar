export var gradingValue = function gradingValue(currentVal, previousVal) {
  if (previousVal === 0 && currentVal > 0) {
    return 'failure';
  }
  var diffPercent = currentVal / previousVal * 100;
  if (diffPercent < 1.0) {
    return 'success';
  }
  return 'failure';
};

export var formatDate = function formatDate(date) {
  if (!date) {
    return '';
  }
  var dateToFormat = new Date(date);
  return ' -- ' + dateToFormat.getDate() + '-' + (dateToFormat.getMonth() + 1) + '-' + dateToFormat.getFullYear();
};