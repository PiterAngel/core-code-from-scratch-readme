// ====== Who likes it? =====
function likes(names) {
    if (names.length == 0) {
        return 'no one likes this';
    }
    if (names.length == 1) {
        return names[0] + ' likes this';
    }
    if (names.length == 2) {
        return names[0] + ' and ' + names[1] + ' like this';
    }
    if (names.length == 3) {
        return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
    } else {
        return (
            names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this');
    }
}
console.log(likes(["peter", "angel", "esau", "de", "león"]))


//  ====== Bit counting ======
var countBits = function(n) {
    let binario = n.toString(2);
    let contador = 0;
    for (let i = 0; i < binario.length; i++) {
        if (binario[i] === "1") contador++;
    }
    return contador;
};
console.log(countBits(10))

var countBits = function(n) {
    return n.toString(2).replace(/0/g, '').length;
};
console.log(countBits(10))

// ====== Your order, please ======
function order(words) {
    let array = words.split(' ');
    let sortedArray = [];
    for (i = 0; i <= array.length; i++) {
        for (j = 0; j < array.length; j++) {
            if (array[j].indexOf(i) >= 0) {
                sortedArray.push(array[j]);
            }
        }
    }
    return sortedArray.join(' ');
}
console.log(order("2is this1"))