export default function (value) {
  if (typeof value !== 'number') {
    return value;
  }
  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    currencyDisplay: 'symbol',
    minimumFractionDigits: 2,
  });
  return formatter.format(value);
}
