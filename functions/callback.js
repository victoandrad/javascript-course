const myFunction = function (cb) {
    console.log('Function myFunction', cb)
    typeof cb === 'function' && cb('oi');
};

const fn = function (p) {
    console.log('Anonymous callback function', p)
};

myFunction(fn)
