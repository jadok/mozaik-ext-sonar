export const gradingValue = (currentVal, previousVal) => {
  if (previousVal === 0 && currentVal > 0) {
    return 'failure';
  }
  const diffPercent = currentVal / previousVal * 100;
  if (diffPercent < 1.0) {
    return 'success';
  }
  return 'failure';
}
