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
const truthy = [true, 2, "0", 12, "false"];
const falsy = [false, 0, null, undefined, NaN];

// ======= Training JS #4: Basic data types--Array =======
function getLength(arr) {
    //return length of arr
    return arr.length;
}

function getFirst(arr) {
    //return the first element of arr
    return arr[0];
}

function getLast(arr) {
    //return the last element of arr
    return arr[arr.length - 1];
}

function pushElement(arr) {
    var el = 1;
    //push el to arr
    arr.push(el);
    return arr
}

function popElement(arr) {
    //pop an element from arr
    arr.pop();
    return arr
}