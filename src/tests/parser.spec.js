import { extractNumbers } from "../parser";

describe("extractNumbers", () => {
  it('should return the values of num1 and num2 from FormData', () => {
    const formData = new FormData();
    formData.append('num1', '10');
    formData.append('num2', '20');
    
    const result = extractNumbers(formData);
    expect(result).toEqual(['10', '20']);
  });

  it('should return [null, null] if num1 and num2 are not present in FormData', () => {
    const formData = new FormData();
    
    const result = extractNumbers(formData);
    expect(result).toEqual([null, null]);
  });

  it('should return [value, null] if only num1 is present in FormData', () => {
    const formData = new FormData();
    formData.append('num1', '10');
    
    const result = extractNumbers(formData);
    expect(result).toEqual(['10', null]);
  });

  it('should return [null, value] if only num2 is present in FormData', () => {
    const formData = new FormData();
    formData.append('num2', '20');
    
    const result = extractNumbers(formData);
    expect(result).toEqual([null, '20']);
  });

});
