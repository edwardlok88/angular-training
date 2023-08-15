
console.log("x", x); //undefined - Hoisting
let x = 10;
console.log("x", x); //10

var y;
console.log("y", y); //undefined

// console.log("z", z); //unhandled error

foo();
function foo() {
    console.log("in foo...");
    var z = 100;
    if (z > 10) {
        let msg = "Hello foo";
    }
    // console.log("msg", msg); // expcetion when using let
}

console.log("App over"); // App over