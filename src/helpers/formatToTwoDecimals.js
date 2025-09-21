/**
 * Formats a number to always display exactly two decimal places, returning a string.
 * Handles small numbers correctly (e.g., 0.004 becomes "0.00").
 *
 * @param {number} num - The number to format.
 * @returns {string} The formatted number string.
 */
export default function formatToTwoDecimals(num) {
  // Use the Internationalization API for robust and configurable number formatting.
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2, // Always show at least 2 decimal places
    maximumFractionDigits: 2, // Never show more than 2 decimal places
  });

  return formatter.format(num);
}


// --- DEMONSTRATION ---

// Your specific case
console.log(`0.004 becomes: "${formatToTwoDecimals(0.004)}"`); // "0.00"

// A number that will round up
console.log(`0.006 becomes: "${formatToTwoDecimals(0.006)}"`); // "0.01"

// A standard number
console.log(`12.3456 becomes: "${formatToTwoDecimals(12.3456)}"`); // "12.35"

// A whole number that needs padding
console.log(`50 becomes: "${formatToTwoDecimals(50)}"`); // "50.00"

// A negative small number
console.log(`-0.003 becomes: "${formatToTwoDecimals(-0.003)}"`); // "-0.00"
