import { wrap, arrayProxy } from "../../src/proxy/index";

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

test("arrayProxy", () => {
    let array = [1, 2, 3];
    let proxyArray = arrayProxy(array);

    expect(proxyArray[-1]).toBe(3);
});
