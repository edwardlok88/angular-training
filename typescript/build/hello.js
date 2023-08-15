console.log("Hello Typescript12345");
//1 - Type Inference
var x = 10;
console.log("x", x);
//x = "abc"; // compilation error=? static type checking
var y;
console.log("y", y);
y = 20;
console.log("y", y);
y = "abc";
console.log("y", y);
//2 - Type annotation
var z;
z = "apple";
//z = 100; // compilation error
console.log("z", z);
var user;
user = { id: 10, name: "loki" };
console.log("user", user);
