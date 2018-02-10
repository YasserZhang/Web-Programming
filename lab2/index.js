const utilities = require('./utilities');
const geometry = require('./geometry');
//testing
console.log('Test on Geometry');
console.log('\n########################\n');
//volumeOfRectangularPrism test 1
console.log('\x1b[33m%s\x1b[0m',"volumeOfRectangularPrism test 1: 2*3*4 = 24");
var volume = geometry.volumeOfRectangularPrism(2,3,4);
console.log('\x1b[32m%s\x1b[0m',volume);
//volumeOfRectangularPrism test 2
console.log('\x1b[33m%s\x1b[0m',"volumeOfRectangularPrism test 2: check edge case, one arguemnt is not nonzero.");
try {
    geometry.volumeOfRectangularPrism(2,0,4);
}
catch (error){
    console.log('\x1b[31m%s\x1b[0m', 'Error: ', error);
}
try {
    geometry.volumeOfRectangularPrism(-1,2,4);
}
catch (error){
    console.log('\x1b[31m%s\x1b[0m','Error: ', error);
}
try {
    geometry.volumeOfRectangularPrism(2,3,-4);
}
catch (error){
    console.log('\x1b[31m%s\x1b[0m','Error: ', error);
}
//volumeOfRectangularPrism test 3
console.log('\x1b[33m%s\x1b[0m',"volumeOfRectangularPrism test 3: check edge case, one argument is undefined.");
try {
    geometry.volumeOfRectangularPrism(2,2);
}
catch (error){
    console.log('\x1b[31m%s\x1b[0m','Error: ', error);
}

//volumeOfRectangularPrism test 4
console.log('\x1b[33m%s\x1b[0m',"volumeOfRectangularPrism test 4: check edge case, one argument is not a number.");
try {
    geometry.volumeOfRectangularPrism('a',2, 4);
}
catch (error) {
    console.log('\x1b[31m%s\x1b[0m', 'Error: ', error);
}

//volumeOfRectangularPrism test 5
console.log('\x1b[33m%s\x1b[0m',"volumeOfRectangularPrism test 5: check edge case, one argument is null.");
try {
    geometry.volumeOfRectangularPrism(null, 2, 4);
}
catch (error) {
    console.log('\x1b[31m%s\x1b[0m', 'Error: ', error);
}

//surfaceAreaOfRectangularPrism test 1
console.log('\x1b[33m%s\x1b[0m',"surfaceAreaOfRectangularPrism test 1: (1*2 + 2*3 + 1*3) * 2 = 22");
var volume = geometry.surfaceAreaOfRectangularPrism(1,2,3);
console.log('\x1b[32m%s\x1b[0m',volume);
//surfaceAreaOfRectangularPrism test 2
console.log('\x1b[33m%s\x1b[0m',"surfaceAreaOfRectangularPrism test 2: check edge case, one arguemnt is not nonzero.");
try {
    geometry.surfaceAreaOfRectangularPrism(-2,2,3);
}
catch(error) {
    console.log('\x1b[31m%s\x1b[0m', 'Error: ', error);
}

//surfaceAreaOfRectangularPrism test 3
console.log('\x1b[33m%s\x1b[0m',"surfaceAreaOfRectangularPrism test 3: check edge case, one argument is undefined.");
try {
    geometry.surfaceAreaOfRectangularPrism(2,2);
}
catch (error){
    console.log('\x1b[31m%s\x1b[0m','Error: ', error);
}

//surfaceAreaOfRectangularPrism test 4
console.log('\x1b[33m%s\x1b[0m',"surfaceAreaOfRectangularPrism test 4: check edge case, one argument is not a number.");
try {
    geometry.surfaceAreaOfRectangularPrism('a',2, 4);
}
catch (error) {
    console.log('\x1b[31m%s\x1b[0m', 'Error: ', error);
}

//surfaceAreaOfRectangularPrism test 5
console.log('\x1b[33m%s\x1b[0m',"surfaceAreaOfRectangularPrism test 5: check edge case, one argument is null.");
try {
    geometry.surfaceAreaOfRectangularPrism(null, 2, 4);
}
catch (error) {
    console.log('\x1b[31m%s\x1b[0m', 'Error: ', error);
}

//volumeOfSphere test 1
console.log('\x1b[33m%s\x1b[0m',"volumeOfSphere test 1: radius of 4 => .");
var volume = geometry.volumeOfSphere(4);
console.log('\x1b[32m%s\x1b[0m',volume);

//volumeOfSphere test 2
console.log('\x1b[33m%s\x1b[0m',"volumeOfSphere test 2: check edge case, one arguemnt is not nonzero.");
try {
    geometry.volumeOfSphere(-2);
}
catch(error) {
    console.log('\x1b[31m%s\x1b[0m', 'Error: ', error);
}

//volumeOfSphere test 3
console.log('\x1b[33m%s\x1b[0m',"volumeOfSphere test 3: check edge case, one argument is undefined.");
try {
    geometry.volumeOfSphere();
}
catch (error){
    console.log('\x1b[31m%s\x1b[0m','Error: ', error);
}

//volumeOfSphere test 4
console.log('\x1b[33m%s\x1b[0m',"volumeOfSphere test 4: check edge case, one argument is not a number.");
try {
    geometry.volumeOfSphere('a');
}
catch (error) {
    console.log('\x1b[31m%s\x1b[0m', 'Error: ', error);
}

//volumeOfSphere test 5
console.log('\x1b[33m%s\x1b[0m',"volumeOfSphere test 5: check edge case, one argument is null.");
try {
    geometry.volumeOfSphere(null);
}
catch (error) {
    console.log('\x1b[31m%s\x1b[0m', 'Error: ', error);
}

console.log('\n########################\n');
console.log('Test on Utilities');
//deepEquality test 1
console.log('\x1b[33m%s\x1b[0m', "deepEquality test 1: check two equal objects.");
obj1 = {'a': 1, 'b': 2, 'c':1};
obj2 = {'a': 1, 'b': 2, 'c':1};
console.log('input:  ');
console.log(obj1);
console.log(obj2);
var result = utilities.deepEquality(obj1, obj2);
console.log('output:    ');
console.log('\x1b[32m%s\x1b[0m', result);

//deepEquality test 2
console.log('\x1b[33m%s\x1b[0m', "deepEquality test 2: check two equal objects with items in different orders.");
obj1 = {'a': 1, 'b': 2, 'c':1};
obj2 = {'b': 2, 'c':1, 'a': 1};
console.log('input:  ');
console.log(obj1);
console.log(obj2);
var result = utilities.deepEquality(obj1, obj2);
console.log('output:    ');
console.log('\x1b[32m%s\x1b[0m', result);

//deepEquality test 3
console.log('\x1b[33m%s\x1b[0m', "deepEquality test 3: check two objects of different lengths.");
obj1 = {'a': 1, 'b': 2, 'c':1};
obj2 = {'b': 2, 'c':1, 'a': 1, 'd': 3};
console.log('input:  ');
console.log(obj1);
console.log(obj2);
var result = utilities.deepEquality(obj1, obj2);
console.log('output:    ');
console.log('\x1b[32m%s\x1b[0m', result);

//deepEquality test 4
console.log('\x1b[33m%s\x1b[0m', "deepEquality test 4: one argument is not valid.");

obj1 = {'a': 1, 'b': 2, 'c':1};
obj2 = {'b': 2, 'c':1, 'a': 1, 'd': 3};
try {
    console.log('input:  ');
    console.log(obj1);
    console.log(obj2);
    var result = utilities.deepEquality(obj2);
    console.log('\x1b[32m%s\x1b[0m', result);
}
catch(error) {
    console.log('\x1b[31m%s\x1b[0m', 'Error: ', error);
}

try {
    console.log('input:  ');
    console.log(obj1);
    console.log(obj2);
    var result = utilities.deepEquality(obj1, []);
    console.log('\x1b[32m%s\x1b[0m', result);
}
catch(error) {
    console.log('\x1b[31m%s\x1b[0m', 'Error: ', error);
}

try {
    console.log('input:  ');
    console.log(obj1);
    console.log(obj2);
    var result = utilities.deepEquality(0, '1');
    console.log('\x1b[32m%s\x1b[0m', result);
}
catch(error) {
    console.log('\x1b[31m%s\x1b[0m', 'Error: ', error);
}
//deepEquality test 5
console.log('\x1b[33m%s\x1b[0m', "deepEquality test 5: two different objects of the same lengths.");

obj1 = {'a': 1, 'b': 2, 'c':1};
obj2 = {'b': 2, 'd':1, 'a': 1};
try {
    console.log('input:  ');
    console.log(obj1);
    console.log(obj2);
    var result = utilities.deepEquality(obj1, obj2);
    console.log('\x1b[32m%s\x1b[0m', result);
}
catch(error) {
    console.log('\x1b[31m%s\x1b[0m', 'Error: ', error);
}

//deepEquality test 6
console.log('\x1b[33m%s\x1b[0m', "deepEquality test 6: check two equal nested objects.");
obj1 = {'a': 1, 'd':{'b': 2, 'c':1}};
obj2 = {'d':{'b': 2, 'c':1}, 'a': 1};
console.log('input:  ');
console.log(obj1);
console.log(obj2);
var result = utilities.deepEquality(obj1, obj2);
console.log('output:    ');
console.log('\x1b[32m%s\x1b[0m', result);

//deepEquality test 7
console.log('\x1b[33m%s\x1b[0m', "deepEquality test 7: check two different nested objects.");
obj1 = {'a': 1, 'd':{'b': 2, 'c':1}};
obj2 = {'d': {}, 'a': 1};
console.log('input:  ');
console.log(obj1);
console.log(obj2);
var result = utilities.deepEquality(obj1, obj2);
console.log('output:    ');
console.log('\x1b[32m%s\x1b[0m', result);



//uniqueElements test 1
//print out output to see its correctness
var arr = ['hello','hello', 'abc', 'bcd', 'abc','bcd'];
console.log('\x1b[33m%s\x1b[0m', "uniqueElements test 1: check a typical array input.");
var unique = utilities.uniqueElements(arr);
console.log('input:  ');
console.log(arr);
console.log('output:  ');
console.log('\x1b[32m%s\x1b[0m', unique);
//uniqueElements test 2
//check an array containing values of various types
var arr = ['a',1, false, 'a', 'b', 1, false]
console.log('\x1b[33m%s\x1b[0m', "uniqueElements test 2: check an array containing values of various types.");
var unique = utilities.uniqueElements(arr);
console.log('input:  ');
console.log(arr);
console.log('output:  ');
console.log('\x1b[32m%s\x1b[0m', unique);
//uniqueElements test 3
//check validity of argument
console.log('\x1b[33m%s\x1b[0m', "uniqueElements test 3: check invalid arguments.");
try{
    console.log('input:  ');
    console.log('a');
    var unique = utilities.uniqueElements('a');
    console.log('\x1b[32m%s\x1b[0m', unique);
}
catch (error) {
    console.log('\x1b[31m%s\x1b[0m', 'Error: ', error);
}

try{
    console.log('input:  ');
    console.log('undefined');
    var unique = utilities.uniqueElements();
    console.log('\x1b[32m%s\x1b[0m', unique);
}
catch (error) {
    console.log('\x1b[31m%s\x1b[0m', 'Error: ', error);
}

//uniqueElements test 4
console.log('\x1b[33m%s\x1b[0m', "uniqueElements test 4: check an empty array.");
var unique = utilities.uniqueElements([]);
console.log('input:  ');
console.log([]);
console.log('output:  ');
console.log('\x1b[32m%s\x1b[0m', unique);

//uniqueElements test 5
console.log('\x1b[33m%s\x1b[0m', "uniqueElements test 5: check items that JavaScript think are equal.");
var arr = ['1', 1, true]
var unique = utilities.uniqueElements(arr);
console.log('input:  ');
console.log(arr);
console.log('output:  ');
console.log('\x1b[32m%s\x1b[0m', unique);


//countOfEachCharacterInString test 1
console.log('\x1b[33m%s\x1b[0m', "countOfEachCharacterInString test 1: check a typical string input.");
var str = 'This method will traverse the string provided.\n';
var dict = utilities.countOfEachCharacterInString(str);
console.log('input:  ');
console.log(str);
console.log('output:  ');
console.log(dict);

//countOfEachCharacterInString test 2
console.log('\x1b[33m%s\x1b[0m', "countOfEachCharacterInString test 2: check an empty string.");
var dict = utilities.countOfEachCharacterInString('');
console.log('input:  ');
console.log('');
console.log('output:  ');
console.log(dict);


//countOfEachCharacterInString test 3
//check validity of argument
console.log('\x1b[33m%s\x1b[0m', "countOfEachCharacterInString test 3: check invalid arguments.");
try{
    console.log('input:  ');
    console.log(123);
    var dict = utilities.countOfEachCharacterInString(123);
    console.log('\x1b[32m%s\x1b[0m', dict);
}
catch (error) {
    console.log('\x1b[31m%s\x1b[0m', 'Error: ', error);
}

try{
    console.log('input:  ');
    console.log('undefined');
    var dict = utilities.countOfEachCharacterInString();
    console.log('\x1b[32m%s\x1b[0m', dict);
}
catch (error) {
    console.log('\x1b[31m%s\x1b[0m', 'Error: ', error);
}

//countOfEachCharacterInString test 4
console.log('\x1b[33m%s\x1b[0m', "countOfEachCharacterInString test 2: check non alphanumeric strings.");
var str = '\n\n\tafddsf\r';
var dict = utilities.countOfEachCharacterInString(str);
console.log('input:  ');
console.log(str);
console.log('output:  ');
console.log(dict);


//countOfEachCharacterInString test 5
console.log('\x1b[33m%s\x1b[0m', "countOfEachCharacterInString test 2: check a long string input.");
var str = 'You will have to write each function\nYou must submit all files, zipped up, not contained in any folders\nYou must not use any npm dependencies in this lab. You must do basic error checking in each function\nCheck for arguments existing and of proper type.\nThrow if anything is out of bounds (ie, trying to perform an incalculable math operation or accessing data that does not exist)';
var dict = utilities.countOfEachCharacterInString(str);
console.log('input:  ');
console.log(str);
console.log('output:  ');
console.log(dict);


