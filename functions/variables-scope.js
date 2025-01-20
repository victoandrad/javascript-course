// how to define variable scope?

// the `var` declaration has the property of "leaking" out of the block where it was declared
function myFunction() {
    if (true) {
        var x = 10;
    }
    // this code will work because `var` is function-scoped
    console.log(x);
}
myFunction();
// this will throw an error (x is not defined) because `x` is not in the global scope
console.log(x);


// the `let` declaration has the property of being restricted to the block where it was declared
function myFunction2() {
    if (true) {
        let x = 10;
    }
    // This code will throw an error (x is not defined) because `x` is block-scoped
    console.log(x);
}

// this will also throw an error (x is not defined) because `x` was never declared in the global scope
console.log(x);
