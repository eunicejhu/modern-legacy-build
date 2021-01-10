import {
    capitalize,
    chainAlerts,
    cloneDeep,
    cloneShallow,
    sum,
    printNumbers1,
    printNumbers2,
    memo,
    throttle,
    shareNotStomach,
    repeatSelf,
    deferize,
    deferize2,
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

it("cloneShallow ", () => {
    const obj = { id: 1, next: { id: 2, value: 3 } };
    const copy = cloneShallow(obj);

    obj.next.value = 4;
    expect(copy.next.value).not.toBe(3);
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

it("printNumbers2", () => {
    jest.useFakeTimers();
    jest.spyOn(global.console, "log").mockImplementation(() => {});
    printNumbers2(2, 5);
    jest.runTimersToTime(5000);
    expect(console.log).toHaveBeenCalledTimes(4);
});

it("memo", () => {
    let add = (a, b, c) => a + b + c;
    add = memo(add);
    add(1, 2, 3);
    add(1, 2, 3);
    expect(add(1, 3, 3)).toBe(7);
});

it("throttle", (done) => {
    const addMock = jest.fn();
    const add = throttle(addMock, 1000);
    add(1, 2, 3);
    add(1, 1, 3);
    add(2, 2, 3);
    setTimeout(() => {
        expect(addMock).toHaveBeenLastCalledWith(2, 2, 3);
        done();
    }, 2000);
});

it("shareNotStomach", () => {
    const { speedy, lazy } = shareNotStomach();
    speedy.eat("apple");
    expect(speedy.stomach).toEqual(["apple"]);
    expect(lazy.stomach).toEqual([]);
});

it("repeatSelf", () => {
    expect(repeatSelf.call("la", 3)).toBe("lalala");
});

it("deferize", () => {
    jest.useFakeTimers();
    jest.spyOn(global.console, "log").mockImplementation(jest.fn);

    const sayHi = () => {
        console.log("hi");
    };

    deferize();
    sayHi.defer(500);
    jest.advanceTimersByTime(500);

    expect(console.log).toHaveBeenCalledWith("hi");
});

it("deferize2", () => {
    jest.useFakeTimers();
    jest.spyOn(global.console, "log").mockImplementation(jest.fn);
    const User = function (name) {
        this.name = name;
        this.sayHi = (greetings) => {
            // sayHi has [[Enviroment]] refered to Instance of User
            // this in arrow function point to the outside
            console.log("hi ", this.name, greetings);
        };
    };
    const isa = new User("isabella");
    deferize2();
    isa.sayHi.defer(500)("welcome");
    jest.advanceTimersByTime(500);

    expect(console.log).toHaveBeenCalledWith("hi ", "isabella", "welcome");
});

it("Date", () => {
    const today = new Date();
    expect(today.__proto__).toEqual(Date.prototype);
    expect(today.__proto__.__proto__).toEqual(Object.prototype);
    expect(today.__proto__.__proto__.__proto__).toBeNull();
    expect(Date.prototype).toEqual({});
    expect(Date.prototype.constructor).toEqual(Date);
});

it.only("exclude", () => {
    const fruits = ["apple", "banana", "peach"];
    const exclude = (exclude, target) => {
        return target != exclude;
    };
    const actual = fruits.filter(exclude.bind(this, "banana"));
    expect(actual).toEqual(["apple", "peach"]);
});
