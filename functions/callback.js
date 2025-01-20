const teste = function (cb) {
    console.log('função teste', cb)
    typeof cb === 'function' && cb('oi')
}

const fn = function (p) {
    console.log('função anônima de callback', p)
}

teste(fn)