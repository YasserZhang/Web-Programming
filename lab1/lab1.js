const questionOne = function questionOne(arr) {
    // Implement question 1 here
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        result = result + arr[i]*arr[i];
    }
    return result;
}

const questionTwo = function questionTwo(num) { 
    // Implement question 2 here
    initial_nums = [0,1,1,2,3]
    if (num <= 4){
        return initial_nums[num];
    }
    let num1 = initial_nums[initial_nums.length - 2];
    let num2 = initial_nums[initial_nums.length - 1];
    new_num = num - 4;
    let fib;
    while (new_num > 0) {
        fib = num1 + num2;
        num1 = num2;
        num2 = fib;
        new_num -= 1;
    }
    return fib;
}

const questionThree = function questionThree(text) {
    // Implement question 3 here
    let vowels = new Set(['a','e','i','o','u']);
    let count = 0;
    for (let l of text.split('')) {
        if (vowels.has(l)) {
            count += 1;
        }
    }
    return count;
}

const questionFour = function questionFour(num) {
    // Implement question 4 here
    if (num < 0) {
        return NaN;
    }
    else if (num <= 1) {
        return 1;
    }
    return num*questionFour(num-1);
}

module.exports = {
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};
