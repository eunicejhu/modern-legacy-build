export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.substr(1);
};

export const chainAlerts = () => {
    return new Promise((resolve) => resolve(2));
};

export const cloneDeep = (obj) => {
    return JSON.parse(JSON.stringify(obj));
};

export const cloneShallow = (obj) => {
    return Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
};

export const sum = function (a) {
    return function (b) {
        return a + b;
    };
};

export const printNumbers1 = function (from, to) {
    let delay = 1000;
    let count = from;
    // option1: setInterval
    print(); // print immediately
    const intervalId = setInterval(print, delay);
    function print() {
        console.log(count);
        if (count < to) {
            count++;
        } else {
            clearInterval(intervalId);
        }
    }
};

export const printNumbers2 = function (from, to) {
    let delay = 1000;
    let count = from;
    // option 2: setTimout
    setTimeout(print, delay);
    function print() {
        console.log(count);
        if (count < to) {
            count++;
            setTimeout(print, delay);
        }
    }
};

export const memo = function (f) {
    let cache = new Map();
    const hash = (args) => Array.prototype.join.call(args); // method borrowing if args is not a real array.

    return function (...args) {
        let key = hash(args); // args is real array. but arguments is array-like.

        if (cache.get(key)) {
            return cache.get(key);
        }
        let result = f.call(this, ...args);
        cache.set(key, result);
        return result;
    };
};

function throttle(func, ms) {
    let isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {
        if (isThrottled) {
            // (2)
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments); // (1)

        isThrottled = true;

        setTimeout(function () {
            isThrottled = false; // (3)
            console.log({ savedArgs, savedThis });
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}

export const shareNotStomach = () => {
    let lazy, speedy;
    let hamster = {
        stomach: [],
        eat(food) {
            this.stomach.push(food);
        },
    };
    lazy = {
        stomach: [],
        __proto__: hamster,
    };
    speedy = {
        stomach: [],
        __proto__: hamster,
    };
    return { lazy, speedy };
};

export const repeatSelf = function (n) {
    return new Array(n + 1).join(this);
};

export const deferize = function () {
    if (!Function.prototype.defer) {
        Function.prototype.defer = function (ms) {
            setTimeout(this, ms);
        };
    }
};

export const deferize2 = function () {
    if (!Function.prototype.defer) {
        Function.prototype.defer = function (ms) {
            let f = this;
            function wrapper(...args) {
                setTimeout(() => {
                    f.apply(this, args);
                }, ms);
            }
            return wrapper;
        };
    }
};
