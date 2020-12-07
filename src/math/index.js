const add = (x, y) => x + y;
const substract = (x, y) => x - y;
const delayedMultiply = (x, y) =>
    new Promise((resolve) => {
        setTimeout(resolve(x * y), 1000);
    });
export { add, substract, delayedMultiply as multiply };
