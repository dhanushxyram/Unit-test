import { validateStringNotEmpty, validateNumber } from "../util/validation";

describe("validateStringNotEmpty", () => {
  it('should throw an error if an empty string is passed', () => {
    expect(() => validateStringNotEmpty('')).toThrowError('Invalid input - must not be empty.');
  });

  it('should throw an error if a string with only spaces is passed', () => {
    expect(() => validateStringNotEmpty('   ')).toThrowError('Invalid input - must not be empty.');
  });

  it('should not throw an error if a non-empty string is passed', () => {
    expect(() => validateStringNotEmpty('valid input')).not.toThrow();
  });
});

describe("validateNumber", () => {
  it('should throw an error if a non-numeric string is passed', () => {
    expect(() => validateNumber('abc')).toThrowError('Invalid number input.');
  });

  it('should throw an error if an object is passed', () => {
    expect(() => validateNumber({})).toThrowError('Invalid number input.');
  });

  it('should throw an error if undefined is passed', () => {
    expect(() => validateNumber(undefined)).toThrowError('Invalid number input.');
  });

  it('should not throw an error if a valid number is passed', () => {
    expect(() => validateNumber(42)).not.toThrow();
  });

  it('should not throw an error if a numeric string is passed', () => {
    expect(() => validateNumber('42')).not.toThrow();
  });
});
