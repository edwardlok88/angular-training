//implicit arguments -> this, arguments
function sum(x, y) {
    console.log("in sum");
}

function sum() {
    console.log("in sum 2", this);
    console.log("in sum 2", arguments);
}

window.sum(1, 2);
sum();
sum(1, 2, 3, 4, 5, 6);