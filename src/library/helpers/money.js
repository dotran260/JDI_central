export function formatMoney(number) {
  if (!number) return;
  return "$ " + number.toLocaleString("en-SG", { minimumFractionDigits: 0 });
}
