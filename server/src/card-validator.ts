/**
 * Validates a credit card number using the Luhn algorithm.
 *
 * @param cardNumber - A string representing the credit card number to validate.
 * @returns True if the card number is valid according to the Luhn algorithm; false otherwise.
 */
export const validateCardNumber = (cardNumber: string): boolean => {
  // is the number long enough?
  if (cardNumber.length !== 16) {
    return false;
  }
  // is the number all digits?
  if (!/^\d+$/.test(cardNumber)) {
    return false;
  }
  // reverse the provided number to run the algorithm from right to left
  const sum = [...cardNumber].reverse().reduce((acc, digit, index) => {
    // if the index is even, double the digit
    const multiplier =  (index % 2 === 1 ? 2 : 1);
    const checkValue = parseInt(digit, 10) * multiplier;
    // if the doubled digit is greater than 9, subtract 9
    const adjustment = checkValue > 9 ? -9 : 0;
    return acc + checkValue + adjustment;
  }, 0);
  return sum % 10 === 0;
};