function capitalize(textVal, isDecapitalizeRest) {
    if (isDecapitalizeRest) {
        textVal = textVal.replace(/[A-Z]/g, character => character.toLowerCase());
    }
    return textVal.replace(/\b[a-z]/g, character => character.toUpperCase());
}