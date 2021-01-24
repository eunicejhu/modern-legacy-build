import { wrap, arrayProxy, makeObservable } from "../../src/proxy/index";

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

test("makeObservable", () => {
    jest.spyOn(console, "log");
    let user = {};
    user = makeObservable(user);
    user.name = "isa";
    expect(console.log).toHaveBeenCalledWith("SET name = isa");
});
