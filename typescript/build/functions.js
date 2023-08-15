//function statement
function sum(x, y) {
    return x + y;
}
//function espression
const add = function (x, y) {
    return x + y;
};
console.log("add", add(10, 20));
//arrow function
let calc = (x, y) => {
    return x + y;
};
console.log("calc", add(10, 20));
calc = (x, y) => x * y;
calc(20, 30);
console.log("calc", add(10, 20));
const obj = {
    id: 100,
    print: function () {
        console.log("id", this);
        var x = 100;
        setTimeout(function () {
            console.log("id after 2 sec function expression", this);
        }, 2000);
        setTimeout(() => {
            console.log("id after 2 sec arrow function", this);
        }, 2000);
    }
};
obj.print();
