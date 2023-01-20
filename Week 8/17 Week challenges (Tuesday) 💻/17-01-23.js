// ======= Even or odd =======
function evenOrOdd(number) {
    if (number % 2 === 0) {
        return 'Even';
    }
    return 'Odd';
}

// ====== A wolf in sheep's clothing ======
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);
}
console.log(indices);

function warnTheSheep(queue) {
    let wolf = queue.indexOf('wolf');
    return ++wolf === queue.length ?
        'Pls go away and stop eating my sheep' :
        'Oi! Sheep number ' +
        (queue.length - wolf) + '! You are about to be eaten by a wolf!';
}

// ====== Decode the morse code ====== 
decodeMorse = function(morseCode) {
    let phrase = [];
    let words = morseCode.trim().split('   ');
    let letters = [];
    for (let i = 0; i < words.length; i++) {
        letters = words[i].split(' ');
        for (let j = 0; j < letters.length; j++) {
            letters[j] = MORSE_CODE[letters[j]];
        }
        phrase.push(letters.join(''));
    }
    return phrase.join(' ').trim();
};