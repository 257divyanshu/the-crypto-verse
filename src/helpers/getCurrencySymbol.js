/**
 * A mapping of currency codes to their corresponding symbols.
 * Using an object for a simple, readable key-value lookup.
 */
const CURRENCY_SYMBOLS = {
  INR: '₹',
  USD: '$',
};

/**
 * Converts a currency code (e.g., "INR", "USD") into its corresponding symbol.
 *
 * @param {string} currencyCode - The three-letter currency code (case-insensitive).
 * @returns {string} The currency symbol, or the original code if the symbol is not found.
 */
export function getCurrencySymbol(currencyCode) {
  // Ensure the input is a string and handle potential null/undefined values.
  if (!currencyCode || typeof currencyCode !== 'string') {
    return ''; // Return an empty string for invalid input.
  }

  const code = currencyCode.toUpperCase();
  // Look up the symbol in our map.
  // If it exists, return it. Otherwise, return the original code as a fallback.
  return CURRENCY_SYMBOLS[code] || currencyCode;
}

// // --- DEMONSTRATION ---

// // Test with supported currencies
// const inrSymbol = getCurrencySymbol('inr'); // Case-insensitive
// const usdSymbol = getCurrencySymbol('USD');

// console.log(`The symbol for INR is: ${inrSymbol}`);
// console.log(`The symbol for USD is: ${usdSymbol}`);

// // Test with an unsupported currency
// const euroSymbol = getCurrencySymbol('EUR');
// console.log(`The symbol for EUR is: ${euroSymbol}`); // Falls back to the code

// // Test with invalid input
// const invalidInputSymbol = getCurrencySymbol(123);
// console.log(`Symbol for invalid input: "${invalidInputSymbol}"`);
