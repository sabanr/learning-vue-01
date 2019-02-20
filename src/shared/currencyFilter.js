export default function (amount, symbol) {
  return `${symbol} ${amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
}
