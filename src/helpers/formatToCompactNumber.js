/**
 * Formats a large number into a compact, human-readable string with suffixes (K, M, B, T).
 *
 * @param {number} num - The number to format.
 * @returns {string} The formatted string (e.g., "2.31T", "15.5B", "340.1M", "5.2K").
 */
export default function formatToCompactNumber(num) {
  // Return '0' if the input is not a valid number or is falsy.
  if (!num || typeof num !== 'number') {
    return '0';
  }

  // Use the built-in Internationalization API for robust number formatting.
  // 'en-US' specifies the locale (for '.' as decimal separator).
  // 'notation: compact' is the key feature that adds the K/M/B/T suffixes.
  // 'maximumFractionDigits: 2' limits the result to two decimal places.
  const formatter = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 2
  });

  return formatter.format(num);
}


// // --- DEMONSTRATION ---

// // Your example number
// const trillionValue = 2312243427555;
// console.log(`${trillionValue}  ->  ${formatToCompactNumber(trillionValue)}`);

// // Other examples
// const billionValue = 15500000000;
// console.log(`${billionValue}   ->  ${formatToCompactNumber(billionValue)}`);

// const millionValue = 340100000;
// console.log(`${millionValue}    ->  ${formatToCompactNumber(millionValue)}`);

// const thousandValue = 5230;
// console.log(`${thousandValue}         ->  ${formatToCompactNumber(thousandValue)}`);

// const smallValue = 987;
// console.log(`${smallValue}           ->  ${formatToCompactNumber(smallValue)}`);

// const zeroValue = 0;
// console.log(`${zeroValue}             ->  ${formatToCompactNumber(zeroValue)}`);
