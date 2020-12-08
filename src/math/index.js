import { Arithmatic } from "./logger";
const add = (x, y) => x + y;
const substract = (x, y) => x - y;
const delayedMultiply = (x, y) =>
    new Promise((resolve) => {
        setTimeout(resolve(x * y), 1000);
    });
const multiply = (x, y) => Arithmatic.multiply(x, y);
export { add, substract, delayedMultiply, multiply };
