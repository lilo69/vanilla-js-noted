function capitalize(textVal, isUnCapitalizeRest) {
    if (isUnCapitalizeRest) {
        textVal = textVal.replace(/[A-Z]/g, character => character.toLowerCase());
    }
    return textVal.replace(/\b[a-z]/g, character => character.toUpperCase());
}