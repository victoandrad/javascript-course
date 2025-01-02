
const calc = (function(){
    let n = 0

    function somar(_n) {
        n += _n
        return this
    }

    function subtrair(_n) {
        n -= _n
        return this
    }

    function log() {
        return n
    }

    return {
        somar,
        subtrair,
        log
    }
})()

calc.somar(5).somar(5).subtrair(10)
console.log(calc.log())