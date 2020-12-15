export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.substr(1);
};

export const chainAlerts = () => {
    return new Promise((resolve) => resolve(2));
};

export const cloneDeep = (obj) => {
    return JSON.parse(JSON.stringify(obj));
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
