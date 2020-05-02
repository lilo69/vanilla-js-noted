function decapitalize(textVal, isDecapitalizeRest) {
    let result = '';
    for (let i = 0; i < textVal.length; i++) {
        if (i === 0) {
            result += textVal[i].toLowerCase();
        } else {
            result += textVal[i];
        }
    }
    return result;
}