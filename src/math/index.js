"use strict";

import("./helper").then(({ capitalize }) => {
    console.log(capitalize("hello"));
});

const add = (a, b) => a + b;
const substract = (a, b) => a - b;

export { add, substract };
