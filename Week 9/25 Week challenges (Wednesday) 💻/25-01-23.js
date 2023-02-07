// ====== Easy mathematical callback ====== 
function processArray(arr, callback) {
    // TODO
    return arr.map(callback);
}

// ======= Moving Zeros To The End ======= 
function moveZeros(nums) {
    let nonZero = [];
    let zeros = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeros.push(nums[i]);
        } else {
            nonZero.push(nums[i]);
        }
    }
    return nonZero.concat(zeros);
}

// ======= Valid Parentheses =======
function validParentheses(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            count++;
        } else if (str[i] === ")") {
            count--;
            if (count < 0) {
                return false;
            }
        }
    }
    return count === 0;
}