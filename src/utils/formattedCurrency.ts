export function formatCurrency(
  amount?: number | string | null,
  currency: "INR" | "USD" | "EUR" = "INR"
): string {
  if (amount === null || amount === undefined || amount === "") return "";

  const numericAmount =
    typeof amount === "string" ? parseFloat(amount) : amount;

  if (isNaN(numericAmount)) return "";

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(numericAmount);
}
