/*const stringToNumber = function(str) {
    Math.floor(str)
    return;
}
console.log(stringToNumber())*/
/*const stringToNumber = function(str) {
    return Math.floor(str);
}
console.log(stringToNumber(12))*/
// ======= Convert a String to a Number! =======
const stringToNumber = function(str) {
    return Math.floor(str);
}
console.log(stringToNumber(12))

// ======= Convert number to reversed array of digits =======
function digitize(n) {
    return String(n).split("").reverse().map(function(numero) {
        return Math.floor(numero)
    });
}
x = "35231"
console.log(digitize(x))


// ======= Truthy and Falsy =======

// =======  =======