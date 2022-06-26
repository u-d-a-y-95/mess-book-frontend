export const formatMoney = (value, precision) => {
  if (isNaN(value)) return "";
  const precisionedValue = value.toFixed(precision);
  return new Intl.NumberFormat("en-in").format(+precisionedValue);
};
