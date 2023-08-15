console.log("in one.js");

export function add(x, y) {
    console.log("in add of one.js");
    return x + y;
}

export function multiply(x, y) {
    console.log("in multiply of one.js");
    return x * y;
}

export const version = "1.0";

export default {add, multiply};