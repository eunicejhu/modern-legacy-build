import { isMathExpression } from "../../src/regex/index";

it("'1+3 + (3/5)' is a mathExpression", () => {
    let expression = "1+3 + (3/5)";
    expect(isMathExpression(expression)).toBeTruthy();
});

it("'1+3 - ze' is not mathExpression", () => {
    let expression = "1+3-ze";
    expect(isMathExpression(expression)).toBeFalsy();
});
