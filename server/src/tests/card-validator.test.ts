import { validateCardNumber } from '../card-validator';

describe('Luhn Algorithm Validator', () => {
  it('should return true for a valid card number', () => {
    expect(validateCardNumber('4539578763621486')).toBe(true); // Valid Visa card number
  });

  it('should return false for an invalid card number', () => {
    expect(validateCardNumber('4539578763621487')).toBe(false); // Invalid Visa card number
  });

  it('should return false for a card number with non-digit characters', () => {
    expect(validateCardNumber('4539a587b763621486')).toBe(false); // Contains letters
  });

  it('should return false for a card number with less than 16 digits', () => {
    expect(validateCardNumber('453957876362148')).toBe(false); // 15 digits
  });

  it('should return false for a card number with more than 16 digits', () => {
    expect(validateCardNumber('4539578763621486123')).toBe(false); // 19 digits
  });

  it('should return false for an empty card number', () => {
    expect(validateCardNumber('')).toBe(false); // Empty string
  });
});
