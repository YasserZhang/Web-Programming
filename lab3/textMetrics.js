function checkIsProperString(str, strName){
    if (str === undefined) {
        throw `Error: ${strName || "provided variable"} is not provided.`;
    }
    if (typeof str !== 'string') {
        throw `Error: ${strName || "provided variable"} is not a string.`
    }
}

function simplify(text) {
    //check if it is a string
    checkIsProperString(text, 'The input text');
    text = text.toLocaleLowerCase();
    text = text.replace(/[^a-zA-Z \s]/g, '');
    text = text.replace(/\s/g, ' ');
    text = text.replace(/ {2,}/g, ' ');
    text = text.trim();
    return text;
}

function createMetrics(text) {
    checkIsProperString(text, 'The input text');
    if (text.length === 0) {
        return {
            'totalLetters': 0,
            'totalWords': 0,
            'uniqueWords': 0,
            'longWords': 0,
            'averageWordLength': 0, 
            'wordOccurrences': {}
        }
    }
    text = simplify(text);
    let totalLetters = 0;
    let totalWords = 0;
    let uniqueWords = new Set();
    let longWords = 0;
    let wordOccurrences = {};
    text = text.split(' ');
    for (let word of text) {
        totalLetters += word.length;
        totalWords += 1;
        uniqueWords.add(word);
        longWords += word.length >= 6;
        if (wordOccurrences[word]) {
            wordOccurrences[word] += 1;
        }
        else {
            wordOccurrences[word] = 1;
        }
    }
    return {
        'totalLetters': totalLetters,
        'totalWords': totalWords,
        'uniqueWords': uniqueWords.size,
        'longWords': longWords,
        'averageWordLength': totalLetters/totalWords, 
        'wordOccurrences': wordOccurrences
    }
}

module.exports = {
    simplify: simplify,
    createMetrics: createMetrics
}