import { add, printDivide, multiply } from "../src/math/index.js";

describe("math test", () => {
    it("add test:", () => {
        expect(add(1, 2)).toBe(3);
    });
    it("printDivide test:", () => {
        expect(printDivide(4, 2)).toBe(2);
    });
    it("multiply", () => {
        expect(multiply(2, 4)).toBe(8);
    });
});
