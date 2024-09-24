import { transformToNumber } from "../util/numbers";

describe("Return Number Type", () => {
  it("return number dataType", () => {
    const result = transformToNumber(5);
    expect(result).toBe(5);
  });

  it("return not a number", () => {
    const result = transformToNumber("b");
    expect(result).toBeNaN();
  });

  it("return number type if it is string number", () => {
    const result = transformToNumber("7");
    expect(result).toBe(7);
  });

  it("return number type if it is string number with decimals", () => {
    const result = transformToNumber("14.5");
    expect(result).toBe(14.5);
  });

  it("Handle null as input", () => {
    const result = transformToNumber(null);
    expect(result).toBe(0);
  });

  it("Handle undefined as input", () => {
    const result = transformToNumber(undefined);
    expect(result).toBeNaN();
  });

  it("Handle boolean as input", () => {
    const result = transformToNumber(true);
    expect(result).toBe(1);
  });

  it("Handle boolean as input", () => {
    const result = transformToNumber(false);
    expect(result).toBe(0);
  });

  it("Handle boolean string as input", () => {
    const result = transformToNumber("true");
    expect(result).toBeNaN();
  });

  it("Handle empty string as input", () => {
    const result = transformToNumber(" ");
    expect(result).toBe(0);
  });

  it("Handle number string with spaces as input", () => {
    const result = transformToNumber("  123  ");
    expect(result).toBe(123);
  });
});
