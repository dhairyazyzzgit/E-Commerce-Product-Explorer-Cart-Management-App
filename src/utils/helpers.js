export function formatINR(priceUSD) {
  const rate = 83 // approx USD → INR
  const priceINR = priceUSD * rate

  return priceINR.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  })
}