// ======= Functions =======
function hello() {
    return "Hello World";
}
let result = hello();
console.log(result);


// ======= Multiple functions =======
function a() {
    return "Hello a!";
}

function b() {
    return "Hello b!";
}
console.log(a())
console.log(b())


// ======= Function calls =======
function greet() {
    return "Haydo!";
}
let salutation = greet()
console.log(salutation);


// ======= What is x? (function version) =======
function reply(phrase) {
    return phrase;
}
let x = reply("How do you do?");
console.log(x)


// ======= Parameters =======
function echo(message) {
    return message;
}
let resultecho = echo("Greta");
console.log(resultecho)