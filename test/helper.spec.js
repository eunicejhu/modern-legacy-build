import {
    capitalize,
    chainAlerts,
    cloneDeep,
    sum,
    printNumbers1,
    printNumbers2,
    memo,
} from "../src/math/helper";

it("captalize", () => {
    expect(capitalize("hello")).toBe("Hello");
});

it("chainAlerts", () => {
    chainAlerts()
        .then((result) => {
            expect(result).toBe(2);
            return Promise.reject("whoops");
        })
        .catch((error) => {
            console.log({ error });
            expect(error).toBe("something");
        })
        .finally((data) => {
            console.log({ data });
            expect(data).toBeUndefined();
        });
});

it("cloneDeep", () => {
    const obj = { id: 1, next: { id: 2, value: 3 } };
    const copy = cloneDeep(obj);

    obj.next.value = 4;
    expect(copy.next.value).toBe(3);
});

it("sum", () => {
    expect(sum(2)(3)).toBe(5);
});

it("printNumbers1", (done) => {
    jest.spyOn(global.console, "log");
    printNumbers1(2, 5);
    setTimeout(() => {
        expect(console.log).toHaveBeenCalledTimes(4);
        done();
    }, 5000);
});

it("printNumbers2", (done) => {
    jest.spyOn(global.console, "log");
    printNumbers2(2, 5);
    setTimeout(() => {
        expect(console.log).toHaveBeenCalledTimes(4);
        done();
    }, 5000);
});

it.only("memo", () => {
    let add = (a, b, c) => a + b + c;
    add = memo(add);
    add(1, 2, 3);
    add(1, 2, 3);
    expect(add(1, 3, 3)).toBe(7);
});
