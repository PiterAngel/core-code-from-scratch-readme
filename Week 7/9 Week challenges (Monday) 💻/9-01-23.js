// ======= String: substr() =======
/*let see = 'see and stop'.substr(0, 2);
let and = 'see and stop'.substr(4, 3);
let stop = 'see and stop'.substr(8);
console.log(see)*/

function firstWord() {
    let see = "see an stop"
    return see.substr(0, 3)
}
console.log(firstWord())

// ======= String: replace() =======
function normalize() {
    let dates = "20 - 05 - 2017";
    return dates.replace(/-/g, "/");

}
console.log(normalize())


// ======= Increment =======
let x = 3;
x++;
x = x * 2;
x--;
console.log(x)


// ======= Fahrenheit =======
function toFahrenheit(celsius) {
    return 1.8 * celsius + 32;
}
console.log(toFahrenheit(0))


// ======= Boolean =======
function nand(y, z) {
    let and = y && z;
    return !and;
}
console.log(nand())