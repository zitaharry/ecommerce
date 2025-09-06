export function formatCurrency(
  amount: number,
  currencyCode: string = "GBP",
): string {
  try {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: currencyCode.toUpperCase(),
    }).format(amount);
  } catch (e) {
    // Fallback formatting if currency code is invalid
    console.error("Invalid currency code:", currencyCode, e);
    return `${currencyCode.toUpperCase()} ${amount.toFixed(2)}`;
  }
}
