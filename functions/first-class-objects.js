// first-class objects

// passed as parameters to other functions (callbacks)
// assigned to object properties (methods)
// returned as the result of another function
// can have their own properties

// this function receives the parameter `cb`
function fn(cb) {
    console.log('Execute callback action');
    // if the parameter `cb` is a function, execute it
    typeof cb === 'function' && cb();
}

// creating a function called `callback`
function callback() {
    console.log('Function passed as a parameter');
}

// invoking the function `fn`, passing the function `callback` as a parameter
fn(callback);

// assigning the `callback` function to an object property
const obj = {
    callback: callback
};

obj.callback();

// functions can also be returned as the result of another function
function fn2(n1) {
    return function(n2) {
        return n1 * n2;
    };
}

// the variable `function2` stores the return of `fn2`, which is another function
const function2 = fn2(10);

// now let's invoke `function2`
const mult = function2(10);
console.log(mult); // Output: 100

// example of a function with its own properties
function fn3() {
    fn3.count++;
    return function() {
        console.log('Function returned by parameter');
    };
}

// initialize a property `count` on the function `fn3`
fn3.count = 0;

// the variable `function3` stores the return of `fn3`, which is a function
const function3 = fn3();
console.log(fn3.count); // Output: 1
