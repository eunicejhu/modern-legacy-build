import { capitalize } from "../src/math/helper";

it.only("captalize", () => {
    expect(capitalize("hello")).toBe("Hello");
});
