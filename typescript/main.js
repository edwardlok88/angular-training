import {process as two_process} from "./two.js";

console.log("in main.js");

function process() {
    console.log("process of main.js");
}

process();
two_process();