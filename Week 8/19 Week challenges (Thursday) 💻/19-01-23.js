// ====== Counting duplicates ======
function duplicateCount(text) {
    let contador = 0;
    text = text.toLowerCase();
    for (let i = 0; i < text.length; i++) {
        if (text.indexOf(text[i]) !== text.lastIndexOf(text[i])) {
            contador++;
            text = text.replace(new RegExp(text[i], 'g'), '');
            i = i - 1;
        }
    }
    return contador;
}
console.log(duplicateCount("abcdefghijklmnopqrstuvwyz"))


// ====== Encrypt this! ======
var encryptThis = function(text) {
    let words = text.split(' ');
    let result = "";
    for (let i = 0; i < words.length; i++) {
        result += String(words[i].charCodeAt(0));
        let letters = words[i].split('');
        if (letters.length > 1) {
            result += letters[letters.length - 1];
            if (letters.length > 2) {
                for (let j = 2; j < letters.length - 1; j++) {
                    result += letters[j];
                }
                result += letters[1];
            }
        }
        if (i != words.length - 1) {
            result += " ";
        }
    }
    return result;
}
console.log(encryptThis("ola"))
    // otra forma
const encryptWord = w => {
    const first = w.charCodeAt(0);
    let res;
    switch (w.length) {
        case 0:
            return '';
        case 1:
            return first;
        case 2:
            res = [first, w[1]];
            break;
        case 3:
            res = [first, w[2], w[1]];
            break;
        default:
            res = [first, w.slice(-1), w.slice(2, -1), w[1]];
            break;
    }
    return res.join('');
};
const encryptThis = text => text.split(' ').map(encryptWord).join(' ');


// ====== Valid parentheses ======
function validParentheses(parens) {
    let count = 0;
    for (let i = 0; i < parens.length; i++) {
        if (parens[i] == "(") {
            count++;
        } else {
            count--;
        }
        if (count < 0) {
            return false;
        }
    }
    return count == 0;
}
console.log(validParentheses())

// otra forma
function validParentheses(parens) {
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
        if (parens[i] == '(') n++;
        if (parens[i] == ')') n--;
        if (n < 0) return false;
    }

    return n == 0;
}

// ====== Convert string to camel case ======
function toCamelCase(str) {
    return str
        .replace(/-/g, '_')
        .split('_')
        .map((word, i) => (i > 0 ? word.toUpperCase()[0] + word.substr(1) : word))
        .join('');
}