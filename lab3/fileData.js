const bluebird = require("bluebird");
const fs = bluebird.promisifyAll(require("fs"));

function checkIsProperFilename(path, pathname){
    if (!path) {
        throw `Error: no path is provided. ${pathname} does not exist.`;
    }
    if (typeof path !== 'string') {
        //console.log(typeof path);
        throw `Error: ${pathname} is not valid input, and its type is ${typeof path}`;
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


async function getFileAsString(path) {
    checkIsProperFilename(path, 'the path name');
    var result = await fs.readFileAsync(path, "utf-8").then(function(data) {
        return data;
      });
    return result;
}

async function getFileAsJSON(path) {
    checkIsProperFilename(path, 'the path name');
    const result = await fs.readFileAsync(path, "utf-8").then(function(data) {
        return JSON.parse(data);
      });
    return result;
}

async function saveStringToFile(path, text) {
        checkIsProperFilename(path, 'the path name');
        //checkIsProperFilename(text, 'text');
    var result = await fs.writeFileAsync(path, text).then((data)=>{
        return true;
    }).catch(err => {
        console.log(err);
        return false;
    });
    if (!result) {
        throw 'text is not saved properly.';
    }
    return result;
}

async function saveJSONToFile(path, obj) {
    checkIsProperFilename(path, 'the path name');
    checkIsProperObject(obj, 'The second input')
    var result = await fs.writeFileAsync(path, JSON.stringify(obj)).then((data) => {
        return true;
    }).catch(err => {
        return false;
    });
    return result;
}

module.exports = {
    getFileAsString: getFileAsString,
    getFileAsJSON: getFileAsJSON,
    saveStringToFile: saveStringToFile,
    saveJSONToFile: saveJSONToFile
}

/*
var d = getFileAsJSON('try1.json').then((data) => {
    return saveJSONToFile('try1.txt',data);
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});

console.log("program ended.");
*/

/*
var d = getFileAsString('chapter1.txt').then((data)=>{
    data = textMetrics.simplify(data);
    return data;
});
*/