function foo(){
    var a = "a"
    let b = "b"
    const c = "c"
}

console.log(a) //ReferenceError: a is not defined
console.log(b) //ReferenceError: b is not defined
console.log(c) //ReferenceError: c is not defined

// Все переменные недоступны вне фукнций, так как переменные типа let и const имеют блочную область видимости, а переменные типа var - функциональную