function checkIsProperNumber(val, variableName) {
    // check each argument is provided, is a number, and 
    // is within proper bounds.
    if (val === undefined) {
        throw `${variableName || "provided variable"} is not provided.`;
    }
    if (typeof val !== 'number') {
        throw `${variableName || "provided variable"} is not a number.`;
    }
    if (isNaN(val) || val <= 0) {
        throw `${variableName || "provided variable"} must be greater than 0.`;
    }
}

function checkIsProperObject(obj, objName) {
    if (obj === undefined) {
        throw `${objName || "provided variable"} is not provided.`;
    }
    if (typeof obj !== 'object') {
        throw `${objName || "provided variable"} is not an object.`;
    }
    if (obj.constructor.name !== 'Object') {
        throw `${objName || "provided variable"} is not an Object(key/value).`;
    }
}

function checkIsProperArray(arr, arrName) {
    if (arr === undefined) {
        throw `${arrName || "provided variable"} is not provided.`;
    }
    if (!Array.isArray(arr)) {
        throw `${arrName || "provided variable"} is not an array.`
    }
}

function checkIsProperString(str, strName){
    if (str === undefined) {
        throw `${strName || "provided variable"} is not provided.`;
    }
    if (typeof str !== 'string') {
        throw `${strName || "provided variable"} is not a string.`
    }
}

function deepEquality(obj1, obj2) {
    checkIsProperObject(obj1, 'first argument');
    checkIsProperObject(obj2, 'second argument');
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            if (obj1[key] && obj1[key].constructor.name == 'Object' && obj2[key] && obj2[key].constructor.name == 'Object'){
                return deepEquality(obj1[key], obj2[key]);
            }
            return false;
        }
    }
    return true;
}

function uniqueElements(arr) {
    checkIsProperArray(arr, 'arr');
    let uniqueSet = new Set();
    for (let a of arr) {
        uniqueSet.add(a);
    }
    return uniqueSet.size;
}

function countOfEachCharacterInString(str) {
    checkIsProperString(str, 'str');
    let charMap = {};
    for (let c of str.split('')){
        if (charMap[c]) {
            charMap[c]++;
        }else {
            charMap[c] = 1;
        }
    }
    return charMap;
}

module.exports = {
    deepEquality : deepEquality,
    uniqueElements : uniqueElements,
    countOfEachCharacterInString : countOfEachCharacterInString
};
