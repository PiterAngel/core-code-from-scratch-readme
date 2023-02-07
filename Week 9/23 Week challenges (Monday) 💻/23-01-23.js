// ======= "this" is a problem ======= 
function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = this.firstName + ' ' + this.lastName;
}

var n = new NameMe('John', 'Doe');
n.firstName //Expected: John
n.lastName //Expected: Doe
n.name //Expected: John Doe


// ======= "Thinkful - List and Loop Drills: Lists of lists"======= 
function processData(data) {
    return data.map(function(ar) {
        return ar[0] - ar[1];
    }).reduce(function(a, b) { return a * b; });
}



// ======= Stop gninnipS My sdroW! ======= 
function spinWords(string) {
    let words = string.split(' ');
    return words.map(function(s) {
        return s.length >= 5 ? s.split("").reverse().join("") : s;
    }).join(" ");
}