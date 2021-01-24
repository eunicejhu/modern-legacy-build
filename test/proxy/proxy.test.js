import { wrap } from "../../src/proxy/index";

test("wrap", () => {
    let user = {
        name: "John",
    };

    user = wrap(user);

    expect(user.name).toBe("John"); // John
    expect(() => {
        console.log(user.age);
    }).toThrowError(`ReferenceError: Property doesn't exist: "age"`);
});
