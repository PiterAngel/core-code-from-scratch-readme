// ====== The Hashtag Generator ====== 
function generateHashtag(str) {
    if (str === "") return false;
    let x = str.split(' ').filter((word) => word !== '').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    if (x.length > 139) return false
    if (x === "") return false
    return "#".concat(x);
}

// ======= String incrementer =======
function incrementString(str) {
    let num = "";
    for (let i = str.length - 1; i >= 0; i--) {
        if (isNaN(parseInt(str[i]))) {
            break;
        }
        num = str[i] + num;
    }
    if (num === "") {
        return str + "1";
    }
    let newNum = (parseInt(num) + 1).toString();
    while (newNum.length < num.length) {
        newNum = "0" + newNum;
    }
    return str.slice(0, str.length - num.length) + newNum;
}