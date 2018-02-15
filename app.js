const fileParser = require('./fileData');
const textMetrics = require('./textMetrics');
const bluebird = require('bluebird');
const fs = bluebird.promisifyAll(require("fs"));
/*
Notes on asynchronous programming.
you have to promisify file system module such that it return Promise.
use await to fulfill the Promise returned by promisified fs.
fs itself does not return Promise, and it only return normal value types.
We use async/await because it both take advantage of asynchronous programming and the neatness of sequential code syntax in synchronous programming. In another word, we don't have to write infinite nested callback functions anymore!!
*/
function checkIsProperFilename(path, pathname){
    if (!path) {
        throw `Error: no path is provided. ${pathname} is not a path.`;
    }
    if (typeof path !== 'string') {
        //console.log(typeof path);
        throw `Error: ${pathname} is not valid input, and its type is ${typeof path}`;
    }
}

async function main(filename){
    checkIsProperFilename(filename, filename);
    var filename_parts = filename.split('.')
    var result = filename_parts[0] + '.result.json';
    var exist = await fs.statAsync(result).then((stats) => {
        return true;
    }).catch((err) => {
        return false;
    });
    if (exist) {
        var file = await fileParser.getFileAsString(result);
        console.log(`${result} already exists`);
        console.log(file);
        return;
    }else {
        throw `${filename} does not exist.`;
    }
    var simplifiedData = await fileParser.getFileAsString(filename).then((data) => {
        data = textMetrics.simplify(data);
        return data;
    });

    var finalData = await fileParser.saveStringToFile(filename_parts[0] + '.debug.txt', simplifiedData).then(
        (flag) => {
            if (flag) {
                var finalData = textMetrics.createMetrics(simplifiedData);
                return finalData;
            }
            return null;
        }
    );
    var savedFlag = false;
    if (finalData !== null) {
        savedFlag = await fileParser.saveJSONToFile(result, finalData);
    }else {
        throw `${filename_parts[0]}.debug.txt is not saved properly.`;
    }
    console.log(finalData);

    if (!savedFlag) {
        throw `${filename_parts[0]}.result.json is not saved properly.`;
    }
    return;
}

filenames = ['chapter1.txt', 'chapter2.txt','chapter3.txt'];
for (filename of filenames) {
    var res = main(filename).catch((err) => {
        console.log('errrr... something is wrong.')
        console.log(err);
    });
}
/*
main('tr.t').catch(err => {
    console.log('errrr... something is wrong.')
    console.log(err);
});
*/
