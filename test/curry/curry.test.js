import { curry } from "../../src/curry/index";
it("curry", () => {
    function sum(a, b, c) {
        return a + b + c;
    }

    let curriedSum = curry(sum);

    expect(curriedSum(1, 2, 3)).toBe(6);
    expect(curriedSum(1)(2, 3)).toBe(6);
    expect(curriedSum(1)(2)(3)).toBe(6);
});
