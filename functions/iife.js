// self-invoking functions are functions that are immediately called after their declaration
// they have the structure of a normal function, but the function body is wrapped in parentheses
// and another set of parentheses is used to invoke it

(function() {
    // code to execute immediately goes here
    console.log('This is a self-invoking function');
})();
