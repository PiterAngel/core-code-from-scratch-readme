// ======= Training JS #7: if..else and ternary operator! =======
function saleHotdogs(n) {
    let total = 0;
    if (n < 5) {
        total += 100 * n
    } else if (n >= 5 && n < 10) {
        total += 95 * n
    } else if (n >= 10) {
        total += 90 * n
    }
    return total;
}
console.log(saleHotdogs(5))

// ====== Training JS #8: Conditional statement--switch =======
function howManydays(month) {
    var days;
    switch (month) {
        case 1:
            days = 31
            break;
        case 2:
            days = 28
            break;
        case 3:
            days = 31;
            break;
        case 4:
            days = 30;
            break
        case 5:
            days = 31;
            break;
        case 6:
            days = 30;
            break;
        case 7:
            days = 31;
            break;
        case 8:
            days = 31;
            break;
        case 9:
            days = 30;
            break;
        case 10:
            days = 31;
            break;
        case 11:
            days = 30;
            break;
        case 12:
            days = 31;
            break;
    }
    return days;
}
console.log(howManydays(1));


// ======= Basic Calculator =======
function calculate(num1, operation, num2) {
    if (operation === "+") {
        return num1 + num2;
    } else if (operation === "-") {
        return num1 - num2
    } else if (operation === "*") {
        return num1 * num2
    } else if (operation === "/" && num2 != 0) {
        return num1 / num2
    } else
        return null
}
console.log(calculate(1, "+", 1))