// ======= Strings =======
function greet(name) {
    return "Hello " + name + "!";
}
console.log(greet("Piter"))

//---

function greet2(name2) {
    return "Hello ".concat(name2).concat("!");
}
console.log(greet2("Angel"))

//---

function greet3(name3) {
    return `Hello ${name3}!`;
}
console.log(greet3("Esaú"))


// ======= String: length =======
let name5 = 'Weiwei';
charNumber = name5.length;
console.log(charNumber);

//- 

function lengthh(letter1) {
    return "The amount is: " + letter1.length;
}
console.log(lengthh("Sun"));


// ======= String: toUpperCase() =======
let town = 'Mthatha';
let output = town.toUpperCase();
console.log(output);

//-

function toCase(Ma) {
    return Ma.toLowerCase() + "-" + Ma.toUpperCase()
}
console.log(toCase("Mthatha"))


// ======= String: charAt() =======
let s1 = 'Amnesty'.charAt(0);
let s2 = 'International'.charAt(0);

function shorcut(s1, s2) {
    return s1 + s2;
}
console.log(shorcut(s1, s2))


// ======= String: indexOf() =======
function indexOfIgnoreCase(c1, c2) {
    let c1Lower = c1.toLowerCase();
    let c2Lower = c2.toLowerCase();
    return c1Lower.indexOf(c2Lower);
}
console.log(indexOfIgnoreCase("Ola", "adios"))