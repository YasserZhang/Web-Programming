function checkIsProperNumber(val, variableName) {
    // check each argument is provided, is a number, and 
    // is within proper bounds.
    if (val === undefined) {
        //console.log(`${variableName || "provided variable"} is undefined.`);
        //return;
        throw `${variableName || "provided variable"} is not provided.`
    }
    if (typeof val !== 'number') {
        //console.log(`${variableName || "provided variable"} is not a number.`);
        //return;
        throw `${variableName || "provided variable"} is not a number.`;
    }
    if (isNaN(val) || val <= 0) {
        //console.log(`${variableName || "provided variable"} must be greater than 0.`);
        //return;
        throw `${variableName || "provided variable"} must be greater than 0.`;
    }
}
function volumeOfRectangularPrism(length, width, height) {
    checkIsProperNumber(length, "length");
    checkIsProperNumber(width, "width");
    checkIsProperNumber(height, "height");
    return length*width*height;
}

function surfaceAreaOfRectangularPrism(length, width, height) {
    checkIsProperNumber(length, "length");
    checkIsProperNumber(width, "width");
    checkIsProperNumber(height, "height");
    return (length*width + length*height + width*height)*2;
}

function volumeOfSphere(radius){
    checkIsProperNumber(radius, "radius");
    return 4*Math.PI*Math.pow(radius,3)/3;
}

function surfaceAreaOfSphere(radius) {
    checkIsProperNumber(radius, "radius");
    return 4*Math.PI*Math.pow(radius, 2);
}

module.exports = {
    volumeOfRectangularPrism : volumeOfRectangularPrism,
    surfaceAreaOfRectangularPrism : surfaceAreaOfRectangularPrism,
    volumeOfSphere : volumeOfSphere,
    surfaceAreaOfSphere : surfaceAreaOfSphere
};

