const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns Yes when passed true", () => {
    const result = booleanToWord(5 === 1 + 4);
    expect(result).toBe('Yes');
  });

  it("return No when passed false", () => {
    const result = booleanToWord(5 === 1 + 3);
    expect(result).toBe('No');
  });
}); 
