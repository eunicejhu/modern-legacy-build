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

export const toString = () => {
    let dictionary = Object.create(null);

    dictionary.toString = function () {
        return Object.keys(this).join();
    };

    // add some data
    dictionary.apple = "Apple";
    dictionary.__proto__ = "test"; // __proto__ is a regular property key here

    // only apple and __proto__ are in the loop
    for (let key in dictionary) {
        alert(key); // "apple", then "__proto__"
    }

    // your toString in action
    alert(dictionary); // "apple,__proto__"
};

class Clock {
    timer;
    constructor({ template }) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = "0" + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = "0" + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = "0" + secs;

        let output = this.template
            .replace("h", hours)
            .replace("m", mins)
            .replace("s", secs);

        console.log(output);
    }

    start() {
        this.render();
        this.timer = setInterval(this.render, 1000);
    }

    stop() {
        clearInterval(this.timer);
    }
}

export { Clock };
